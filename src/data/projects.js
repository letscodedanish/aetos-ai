// Single source of truth for the portfolio — consumed by the home grid
// (components/Work), the /work rail (pages/WorkPage) and the per-project
// detail page (pages/CaseStudy, routed at /work/:slug).
//
// `img` is used as-is for <img src>: local screenshots for the live deploys
// we could capture, and themed Unsplash imagery for the two whose deploys are
// currently down (email = 500, SehatSathi = 401-protected).

const U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`

export const PROJECTS = [
  {
    slug: 'fintrack',
    name: 'FinTrack',
    ind: 'Fintech',
    year: '2025',
    img: '/uploads/portfolio/finance.png',
    short:
      'A multi-bank dashboard that aggregates accounts through Plaid and moves money via Dwolla — one source of truth for balances, transactions and transfers.',
    tags: ['Plaid + Dwolla', 'Next.js'],
    live: 'https://bank-client-sigma.vercel.app/sign-in',
    gh: 'https://github.com/letscodedanish/Finance-Tracker-SaaS',
    services: 'Platform Engineering, Bank Integrations',
    overview: [
      'The finance team was stitching balances together across several banks by hand. We built FinTrack as one secure dashboard that connects every account through Plaid and settles transfers through Dwolla.',
      'Real-time transaction feeds, categorised spend and peer-to-peer transfers replaced spreadsheets and manual reconciliation — giving the team a live, trustworthy view of cash at any moment.',
    ],
    impact: [
      { value: 'Real-time', label: 'Multi-bank balances' },
      { value: '~0', label: 'Manual reconciliation' },
      { value: 'Minutes', label: 'To first transfer' },
    ],
    satisfaction: {
      score: '5.0',
      quote:
        'FinTrack gave us one screen for money that used to live in five. Reconciliation went from a weekly chore to something we never think about.',
      author: 'Finance Operations Lead',
      org: 'Fintech client (confidential)',
    },
    tech: ['Next.js', 'TypeScript', 'Appwrite', 'Plaid', 'Dwolla', 'TailwindCSS', 'Chart.js'],
    gallery: [U('photo-1551288049-bebda4e38f71'), U('photo-1563013544-824ae1b704d3')],
  },
  {
    slug: 'zapflow',
    name: 'ZapFlow',
    ind: 'Automation',
    year: '2025',
    img: '/uploads/portfolio/automation.png',
    short:
      'A drag-and-drop automation builder wiring Slack, Drive and Notion together with AI steps — replacing hours of repetitive ops work every week.',
    tags: ['AI Workflows', 'No-code'],
    live: 'https://ai-automation-builder.vercel.app',
    gh: 'https://github.com/letscodedanish/AI-Automation-Builder',
    services: 'Product Engineering, AI Workflows',
    overview: [
      'Teams were copy-pasting between Slack, Drive and Notion all day. ZapFlow lets them draw those handoffs once on a visual canvas and let the platform run them on a schedule or trigger.',
      'AI steps sit inline in the flow — summarising, classifying and drafting — so an automation can make a judgement call, not just move data from A to B.',
    ],
    impact: [
      { value: 'Hours/wk', label: 'Saved per team' },
      { value: 'Drag-drop', label: 'No-code builder' },
      { value: '24/7', label: 'Always-on runs' },
    ],
    satisfaction: {
      score: '4.9',
      quote:
        'We mapped a workflow in an afternoon that we had quoted three weeks of engineering for. The AI steps are the part people show their friends.',
      author: 'Head of Operations',
      org: 'Early-stage SaaS',
    },
    tech: ['Next.js 14', 'TypeScript', 'Bun', 'Prisma', 'Neon', 'Clerk', 'Stripe'],
    gallery: [U('photo-1518770660439-4636190af475'), U('photo-1526374965328-7f61d4dc18c5')],
  },
  {
    slug: 'ai-email-client',
    name: 'AI Email Client',
    ind: 'Productivity',
    year: '2025',
    img: U('photo-1526378722484-bd91ca387e72'),
    short:
      'A Superhuman-style email client with OpenAI drafting and Pinecone semantic search — clearing inboxes faster with AI triage and context-aware replies.',
    tags: ['OpenAI + RAG', 'Stripe'],
    live: 'https://superhuman-xi.vercel.app',
    gh: 'https://github.com/letscodedanish/Email-Client-SaaS',
    services: 'AI Integration, Product Engineering',
    overview: [
      'Inbox overload is a tax on every knowledge worker. We built a keyboard-first email client that triages, summarises and drafts with OpenAI, with the speed and feel of Superhuman.',
      'A Pinecone vector index gives every reply real context — past threads, attachments and contacts — so AI suggestions sound like the user, not a generic bot. Stripe handles subscriptions out of the box.',
    ],
    impact: [
      { value: 'AI triage', label: 'Inbox auto-sorted' },
      { value: 'RAG', label: 'Context-aware replies' },
      { value: 'Keyboard', label: 'First navigation' },
    ],
    satisfaction: {
      score: '4.8',
      quote:
        'It reads my inbox the way I would and drafts the reply before I do. I get to inbox zero on my commute now.',
      author: 'Founder',
      org: 'Productivity startup',
    },
    tech: ['Next.js 14', 'TypeScript', 'OpenAI', 'Pinecone', 'Prisma', 'PostgreSQL', 'Clerk', 'Stripe', 'AWS'],
    gallery: [U('photo-1596526131083-e8c633c948d2'), U('photo-1517245386807-bb43f82c33c4')],
  },
  {
    slug: 'sehatsathi',
    name: 'SehatSathi',
    ind: 'Healthcare',
    year: '2024',
    img: U('photo-1505751172876-fa1923c5c528'),
    short:
      'A telemedicine platform bringing virtual consultations and Ayurvedic care to remote Indian communities — expanding access for patients far from any clinic.',
    tags: ['Telemedicine', 'React Query'],
    live: 'https://hack-sapiens-llgt35glb-letscodedanishs-projects.vercel.app/',
    gh: 'https://github.com/letscodedanish/Sehat-Sathi',
    services: 'Product Engineering, DevOps',
    overview: [
      'For remote communities, the nearest doctor can be hours away. SehatSathi puts virtual consultations, appointment scheduling and an AI intake chatbot into a single, low-friction app.',
      'It bridges modern and traditional care by integrating Ayurvedic consultations alongside conventional telemedicine — meeting patients where their trust already is.',
    ],
    impact: [
      { value: 'Remote-first', label: 'Care access' },
      { value: 'Virtual', label: 'Consults + scheduling' },
      { value: 'AI', label: 'Intake chatbot' },
    ],
    satisfaction: {
      score: '4.9',
      quote:
        'Patients who would never have made the trip to a clinic are now seeing a doctor from their phone. That is the whole point.',
      author: 'Clinical Program Lead',
      org: 'Community health initiative',
    },
    tech: ['React', 'Node.js', 'Express', 'React Query', 'Docker', 'TailwindCSS'],
    gallery: [U('photo-1576091160550-2173dba999ef'), U('photo-1581094794329-c8112a89af12')],
  },
  {
    slug: 'advance-ide',
    name: 'Advance IDE',
    ind: 'DevTools',
    year: '2025',
    img: '/uploads/portfolio/ide.png',
    short:
      'A browser-based IDE running each project in isolated Docker / Kubernetes containers with live collaboration — zero-setup onboarding for distributed teams.',
    tags: ['Cloud IDE', 'Kubernetes'],
    live: 'https://ide-frontend-git-main-letscodedanishs-projects.vercel.app/',
    gh: 'https://github.com/letscodedanish/IDE-K8S',
    services: 'Platform Engineering, Cloud Infrastructure',
    overview: [
      'Onboarding a developer used to mean a day of installing toolchains. Advance IDE spins up a full coding environment in the browser — Monaco editor, terminal and runtime — in seconds.',
      'Every workspace runs in its own Docker container orchestrated by Kubernetes, with Socket.io powering real-time collaboration and GitHub integration for a familiar workflow.',
    ],
    impact: [
      { value: 'Zero-setup', label: 'Dev onboarding' },
      { value: 'Isolated', label: 'Per-user containers' },
      { value: 'Live', label: 'Real-time collab' },
    ],
    satisfaction: {
      score: '4.8',
      quote:
        'New hires write their first line of code in the browser before lunch. No more day-one environment hell.',
      author: 'Engineering Manager',
      org: 'Distributed dev team',
    },
    tech: ['Next.js', 'Monaco', 'Node.js', 'Docker', 'Kubernetes', 'Socket.io', 'PostgreSQL', 'AWS S3', 'Clerk'],
    gallery: [U('photo-1573164713988-8665fc963095'), U('photo-1488590528505-98d2b5aba04b')],
  },
  {
    slug: 'dynish',
    name: 'Dynish',
    ind: 'Onboarding',
    year: '2025',
    img: '/uploads/portfolio/dynish.png',
    short:
      'A streamlined client-onboarding app with OTP phone auth and a guided flow — reducing drop-off and getting new customers active in minutes, not days.',
    tags: ['Onboarding', 'OTP Auth'],
    live: 'https://dynish-client-app.vercel.app/',
    gh: '',
    services: 'Product Engineering',
    overview: [
      'First impressions decide whether a customer sticks. Dynish replaces a clunky sign-up with a guided, phone-first onboarding that verifies users by OTP and walks them through setup step by step.',
      'Fewer fields, clearer steps and instant verification mean prospects become active accounts in minutes — cutting the drop-off that kills early activation.',
    ],
    impact: [
      { value: 'Minutes', label: 'To active account' },
      { value: 'OTP', label: 'Frictionless auth' },
      { value: 'Guided', label: 'Step-by-step flow' },
    ],
    satisfaction: {
      score: '4.9',
      quote:
        'Our onboarding drop-off was our biggest leak. Dynish turned a multi-day back-and-forth into a five-minute flow.',
      author: 'Growth Lead',
      org: 'Client services company',
    },
    tech: ['React', 'OTP Auth', 'Client Portal', 'Vercel'],
    gallery: [U('photo-1600880292203-757bb62b4baf'), U('photo-1522071820081-009f0129c71c')],
  },
]

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug)
export const nextProject = (slug) => {
  const i = PROJECTS.findIndex((p) => p.slug === slug)
  return PROJECTS[(i + 1) % PROJECTS.length]
}
