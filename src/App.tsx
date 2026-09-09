import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { About } from './components/About';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PrivacyPolicy, TermsConditions } from './components/LegalViews';
import { NotFound } from './components/NotFound';

type AppView = 'main' | 'privacy' | 'terms' | '404';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('main');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [quotePrefillService, setQuotePrefillService] = useState<string>('Website Development');
  const [quotePrefillBudget, setQuotePrefillBudget] = useState<string>('PKR 25,000 – 50,000');

  // Handle URL hash changes on load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'privacy-policy' || hash === 'privacy') {
        setCurrentView('privacy');
      } else if (hash === 'terms' || hash === 'terms-conditions') {
        setCurrentView('terms');
      } else if (hash === '404') {
        setCurrentView('404');
      } else {
        setCurrentView('main');
        if (hash) {
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
              setActiveSection(hash);
            }
          }, 100);
        }
      }
    };

    handleHashChange();
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  // Update active section on scroll
  useEffect(() => {
    if (currentView !== 'main') return;

    const sections = [
      'home',
      'services',
      'why-biznova',
      'about',
      'process',
      'portfolio',
      'pricing',
      'testimonials',
      'faq',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            // Map why-biznova to about or home for nav highlight
            if (sectionId === 'why-biznova') {
              setActiveSection('services');
            } else if (sectionId === 'testimonials') {
              setActiveSection('pricing');
            } else {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const scrollToSection = (sectionId: string) => {
    if (currentView !== 'main') {
      setCurrentView('main');
      window.history.pushState(null, '', `#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(sectionId);
        }
      }, 50);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  const handleSelectServiceForQuote = (serviceName: string) => {
    setQuotePrefillService(serviceName);
    scrollToSection('contact');
  };

  const handleSelectPlanForQuote = (planName: string) => {
    if (planName === 'STARTER') {
      setQuotePrefillService('Website Development');
      setQuotePrefillBudget('PKR 25,000 – 50,000');
    } else if (planName === 'BUSINESS') {
      setQuotePrefillService('Website Development');
      setQuotePrefillBudget('PKR 50,000 – 100,000');
    } else {
      setQuotePrefillService('Web Application');
      setQuotePrefillBudget('PKR 100,000+');
    }
    scrollToSection('contact');
  };

  const handleOpenPrivacy = () => {
    setCurrentView('privacy');
    window.history.pushState(null, '', '#privacy');
  };

  const handleOpenTerms = () => {
    setCurrentView('terms');
    window.history.pushState(null, '', '#terms');
  };

  const handleBackToMain = () => {
    setCurrentView('main');
    window.history.pushState(null, '', '#home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      {/* View Switcher */}
      <main className="flex-grow">
        {currentView === 'privacy' && <PrivacyPolicy onBack={handleBackToMain} />}
        {currentView === 'terms' && <TermsConditions onBack={handleBackToMain} />}
        {currentView === '404' && <NotFound onGoHome={handleBackToMain} />}

        {currentView === 'main' && (
          <>
            {/* 1. Hero Section */}
            <Hero
              onQuoteClick={() => scrollToSection('contact')}
              onServicesClick={() => scrollToSection('services')}
            />

            {/* 2. Trust Bar */}
            <TrustBar />

            {/* 3. Services Section */}
            <Services onSelectServiceForQuote={handleSelectServiceForQuote} />

            {/* 4. Why BizNova Section */}
            <WhyUs />

            {/* 5. About BizNova */}
            <About />

            {/* 6. How We Work (Process) */}
            <Process />

            {/* 7. Portfolio */}
            <Portfolio onSelectProjectForQuote={handleSelectServiceForQuote} />

            {/* 8. Pricing */}
            <Pricing onSelectPlan={handleSelectPlanForQuote} />

            {/* 9. Testimonials (No fake reviews) */}
            <Testimonials onPartnerClick={() => scrollToSection('contact')} />

            {/* 10. FAQ */}
            <FAQ onAskQuestion={() => scrollToSection('contact')} />

            {/* 11. Contact & Free Quote Form */}
            <Contact
              initialService={quotePrefillService}
              initialBudget={quotePrefillBudget}
            />

            {/* 12. Final Call to Action */}
            <FinalCTA onQuoteClick={() => scrollToSection('contact')} />
          </>
        )}
      </main>

      {/* Floating WhatsApp Button on Every View */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenPrivacy={handleOpenPrivacy}
        onOpenTerms={handleOpenTerms}
      />
    </div>
  );
}
