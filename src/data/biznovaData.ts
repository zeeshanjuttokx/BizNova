import {
  ServiceItem,
  FeatureItem,
  ProcessStep,
  PortfolioProject,
  PricingPlan,
  FaqItem,
} from '../types';

export const COMPANY_CONFIG = {
  name: 'BizNova',
  legalName: 'BizNova Digital Solutions',
  tagline: 'Build. Grow. Manage.',
  secondaryTagline: 'Digital Solutions That Grow Your Business',
  subheadline:
    'BizNova helps businesses build professional websites, powerful digital solutions, and smarter online systems that help them grow.',
  email: 'BizNova.web@gmail.com',
  whatsappNumber: '+923492251225',
  whatsappDisplay: '+92 349 2251225',
  whatsappPrefilledMessage:
    'Hello BizNova, I would like to discuss a project with you.',
  year: '2026',
  socialLinks: [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/biznova-digital', icon: 'Linkedin' },
    { name: 'Twitter / X', url: 'https://twitter.com/biznova_digital', icon: 'Twitter' },
    { name: 'GitHub', url: 'https://github.com/biznova-digital', icon: 'Github' },
    { name: 'Instagram', url: 'https://instagram.com/biznova.digital', icon: 'Instagram' },
  ],
};

export const TRUST_STATS = [
  {
    title: 'Modern Solutions',
    description: 'Technology designed for today’s businesses.',
    icon: 'Sparkles',
  },
  {
    title: 'Responsive Design',
    description: 'Beautiful experiences on every device.',
    icon: 'Smartphone',
  },
  {
    title: 'Business Focused',
    description: 'Solutions designed around real business needs.',
    icon: 'Target',
  },
  {
    title: 'Ongoing Support',
    description: 'Continued support after launch.',
    icon: 'ShieldCheck',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    tagline: 'Fast, responsive, conversion-focused websites',
    description:
      'Professional, fast, responsive websites designed to establish a strong online presence and convert visitors into loyal clients.',
    iconName: 'Globe',
    recommendedFor: 'Startups, Corporate & Professional Services',
    features: [
      'Business websites',
      'Landing pages',
      'Portfolio websites',
      'Corporate websites',
      'Custom websites',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    tagline: 'High-converting online store experiences',
    description:
      'Build professional online stores that make it easy for customers to discover, explore, and purchase your products securely.',
    iconName: 'ShoppingBag',
    recommendedFor: 'Retailers, Boutiques & Direct-to-Consumer brands',
    features: [
      'Online stores',
      'Product catalogs',
      'Shopping carts',
      'Payment integration',
      'Order management',
    ],
  },
  {
    id: 'business-solutions',
    title: 'Business Solutions',
    tagline: 'Digital infrastructure for streamlined operations',
    description:
      'Turn manual business processes into organized, automated digital systems that save hours and eliminate bottlenecks.',
    iconName: 'Cpu',
    recommendedFor: 'Growing enterprises & Service companies',
    features: [
      'Business management systems',
      'Customer management',
      'Databases',
      'Admin dashboards',
      'Custom web applications',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Targeted outreach and audience growth',
    description:
      'Help businesses reach more qualified customers, build authority, and establish an authentic, engaging online presence.',
    iconName: 'TrendingUp',
    recommendedFor: 'Local businesses & Scale-ups',
    features: [
      'Social media',
      'Content strategy',
      'Digital campaigns',
      'Online presence management',
    ],
  },
  {
    id: 'seo',
    title: 'SEO (Search Engine Optimization)',
    tagline: 'Consistent organic reach and Google visibility',
    description:
      'Improve your website’s visibility and search rankings to ensure high-intent potential customers find your business first.',
    iconName: 'Search',
    recommendedFor: 'Every business seeking organic growth',
    features: [
      'On-page SEO',
      'Technical SEO',
      'Keyword optimization',
      'Website optimization',
    ],
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    tagline: 'Peace of mind with proactive monitoring',
    description:
      'Keep your website secure, updated, optimized, and running smoothly without unexpected downtime or security risks.',
    iconName: 'Wrench',
    recommendedFor: 'All active business websites',
    features: [
      'Updates & security patches',
      'Bug fixes',
      'Performance optimization',
      'Content updates',
      'Technical support',
    ],
  },
];

export const WHY_CHOOSE_US: FeatureItem[] = [
  {
    id: 'modern-tech',
    title: 'Modern Technology',
    description:
      'We use modern development tools and technologies to create reliable, future-proof digital solutions.',
    iconName: 'Code2',
  },
  {
    id: 'business-focused',
    title: 'Business-Focused',
    description:
      'We focus on solving real business problems, not simply creating visually pleasing mockups.',
    iconName: 'Briefcase',
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    description:
      'Every solution is precision-engineered to work smoothly across phones, tablets, laptops, and desktops.',
    iconName: 'Layout',
  },
  {
    id: 'custom-solutions',
    title: 'Custom Solutions',
    description:
      'Every business is different. We engineer digital solutions tailored to your unique operational requirements.',
    iconName: 'Layers',
  },
  {
    id: 'transparent-process',
    title: 'Transparent Process',
    description:
      'We keep clients informed throughout planning, development, testing, and launch with zero guesswork.',
    iconName: 'Eye',
  },
  {
    id: 'ongoing-support',
    title: 'Ongoing Support',
    description:
      'Our relationship doesn’t end after deployment. We continue monitoring, refining, and maintaining your platform.',
    iconName: 'Headphones',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We learn about your business, specific goals, target customers, brand identity, and technical requirements.',
    deliverables: ['Requirement analysis', 'Scope definition', 'Tech stack recommendation'],
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'We define the project structure, feature sets, design direction, architecture, and phased development roadmap.',
    deliverables: ['Information architecture', 'Wireframes', 'Milestone schedule'],
  },
  {
    step: '03',
    title: 'Design',
    description:
      'We create a modern, conversion-focused user interface tailored specifically to your business branding.',
    deliverables: ['UI/UX mockups', 'Mobile-first layouts', 'Brand alignment review'],
  },
  {
    step: '04',
    title: 'Develop',
    description:
      'We write clean, secure code, integrate databases and APIs, and optimize performance across all devices.',
    deliverables: ['Frontend & backend code', 'Third-party integrations', 'Performance optimization'],
  },
  {
    step: '05',
    title: 'Launch',
    description:
      'We deploy your project to production infrastructure, verify DNS, SSL, security, and ensure everything functions flawlessly.',
    deliverables: ['Cloud deployment', 'SSL & domain setup', 'Pre-launch QA audit'],
  },
  {
    step: '06',
    title: 'Grow',
    description:
      'We provide ongoing maintenance, feature upgrades, analytical monitoring, and digital support as your business scales.',
    deliverables: ['Periodic updates', 'Security monitoring', 'Scalability support'],
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'e-judiciary',
    title: 'E-Judiciary Portal',
    category: 'Web Application',
    badge: 'Demo / Project',
    description:
      'A web-based judiciary management platform designed to connect citizens, lawyers, judges, and administrators.',
    extendedDescription:
      'An enterprise-grade administrative portal featuring digital case filings, role-based access management, scheduled virtual hearings, document verification, and automated court calendar notifications.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    imagePlaceholder: {
      theme: 'from-blue-900/60 to-slate-900/80',
      headline: 'E-Judiciary Digital Court Portal',
      sub: 'Case Management & Multi-Role Legal System',
      accent: '#38bdf8',
    },
    features: [
      'Role-based access (Citizens, Advocates, Judiciary)',
      'Digital filing & timestamped document uploads',
      'Real-time case status tracking dashboard',
      'Encrypted record archive & hearing schedule',
    ],
  },
  {
    id: 'restaurant-platform',
    title: 'Restaurant Website & Ordering',
    category: 'Business Website',
    badge: 'Demo / Project',
    description:
      'A modern restaurant website designed to showcase culinary services, dynamic menu offerings, location maps, and customer contact options.',
    extendedDescription:
      'Designed for high mobile engagement, featuring mouth-watering visual menus, table reservation requests, direct WhatsApp ordering integration, Google Maps location routing, and operating hour alerts.',
    technologies: ['React', 'Tailwind CSS', 'Responsive UI', 'WhatsApp API', 'SEO Optimized'],
    imagePlaceholder: {
      theme: 'from-amber-950/50 to-slate-900/80',
      headline: 'Artisan Bistro & Dining Experience',
      sub: 'Interactive Menu & Table Reservation System',
      accent: '#f59e0b',
    },
    features: [
      'Interactive digital menu with dietary filters',
      'Table reservation & contact request forms',
      'Direct WhatsApp order link generator',
      'Mobile-optimized for hungry patrons on the go',
    ],
  },
  {
    id: 'pdf-converter',
    title: 'Online PDF Converter & Processor',
    category: 'Web Tool',
    badge: 'Demo / Project',
    description:
      'A simple, high-speed online document conversion platform designed for fast, secure, and convenient file processing.',
    extendedDescription:
      'A streamlined web utility supporting multi-file conversions, drag-and-drop file ingestion, client-side processing preview, and secure batch downloads without storing personal documents on public servers.',
    technologies: ['TypeScript', 'Client-side APIs', 'Web Workers', 'Tailwind CSS'],
    imagePlaceholder: {
      theme: 'from-indigo-950/60 to-slate-900/80',
      headline: 'QuickDoc PDF & File Converter',
      sub: 'Instant Document Processing Utility',
      accent: '#818cf8',
    },
    features: [
      'Drag-and-drop document upload area',
      'Multiple format conversions (Word, Images, PDF)',
      'Zero-retention privacy architecture',
      'Instant download without registration hassle',
    ],
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    target: 'For individuals and small businesses ready to establish a trusted presence.',
    priceNote: "Let's Discuss Your Requirements",
    description:
      'Essential digital package designed to get your brand online quickly with clean design and core business information.',
    features: [
      'Professional custom website',
      'Up to 5 responsive pages',
      'Mobile & tablet optimized design',
      'Secure contact & quote request form',
      'Social media integration',
      'Basic SEO setup & meta configuration',
      'Fast loading speed optimization',
    ],
    buttonText: 'Get Started',
  },
  {
    id: 'business',
    name: 'BUSINESS',
    badge: 'Most Popular',
    popular: true,
    target: 'For growing companies needing dynamic features, CMS, and stronger search visibility.',
    priceNote: 'Get a Quote',
    description:
      'A comprehensive website solution with advanced capabilities to capture leads, showcase offerings, and scale marketing.',
    features: [
      'Professional business website',
      'Advanced page architectures & layouts',
      'CMS / content management capabilities',
      'Full search engine optimization (SEO)',
      'Google Analytics & tracking integration',
      'Custom interactive forms & WhatsApp chat',
      'Priority post-launch maintenance & support',
    ],
    buttonText: 'Get a Quote',
  },
  {
    id: 'custom',
    name: 'CUSTOM',
    target: 'For enterprises and scale-ups requiring bespoke digital systems and workflows.',
    priceNote: 'Discuss Your Project',
    description:
      'Engineered specifically around your operational processes, from multi-role web apps to complex e-commerce and database integrations.',
    features: [
      'Custom web applications & portals',
      'Business management & workflow systems',
      'Full e-commerce & payment gateways',
      'Business process automation',
      'Custom database systems & APIs',
      'Admin dashboards with live metrics',
      'Dedicated technical lead & ongoing SLA',
    ],
    buttonText: 'Discuss Your Project',
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'How much does a website cost?',
    answer:
      'Every project is different. Cost depends on the scope, number of pages, custom features, and system integrations required. Contact BizNova with your requirements and we will provide a clear, customized quotation with no hidden fees.',
  },
  {
    question: 'How long does website development take?',
    answer:
      'Project timelines depend on the number of pages, feature complexity, content availability, and revision rounds. A standard starter website typically takes 1 to 2 weeks, while larger business platforms or custom web applications take 3 to 6 weeks.',
  },
  {
    question: 'Do you build e-commerce websites?',
    answer:
      'Yes. BizNova can develop online stores and e-commerce solutions based on business requirements, including product catalogs, shopping carts, checkout workflows, inventory management, and secure payment integrations.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer:
      'Yes. We can redesign and modernize existing websites to improve visual branding, mobile responsiveness, page speed, user experience, and search engine rankings.',
  },
  {
    question: 'Do you provide website maintenance?',
    answer:
      'Yes. Maintenance and ongoing support can be provided according to the client’s requirements, including security monitoring, software updates, regular backups, content additions, and technical fixes.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. BizNova provides digital services remotely to businesses and entrepreneurs worldwide. We conduct planning and communication through WhatsApp, Google Meet, and email to ensure smooth collaboration across time zones.',
  },
  {
    question: 'Can you build custom business software?',
    answer:
      'Yes. Custom web applications, administrative dashboards, relational databases, customer management tools, and automated business systems can be designed and developed based on your exact requirements.',
  },
];
