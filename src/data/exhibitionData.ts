import { StatisticItem, SDGTopic, ActionGuideline, WorkplaceSpectrumLevel, GameSector } from '../types';

export const SDG5_TOPICS: SDGTopic[] = [
  {
    id: 'discrimination',
    title: 'Ending Discrimination Against Women & Girls',
    summary: 'Eliminating all forms of discrimination in law, employment, wage determination, and institutional access.',
    expandedDetails: 'Target 5.1 focuses on repealing discriminatory legal provisions, ensuring equal inheritance and property rights, and establishing zero-tolerance policies for gender bias in professional hiring and compensation.',
    iconName: 'Scale'
  },
  {
    id: 'violence',
    title: 'Ending Violence & Harassment in Public & Private Life',
    summary: 'Eradicating gender-based violence, sexual harassment, exploitation, and abuse across workplace and domestic spheres.',
    expandedDetails: 'Target 5.2 demands comprehensive protection mechanisms, confidential reporting protocols, strict workplace non-retaliation policies, and dedicated victim support services.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'harmful-practices',
    title: 'Eliminating Harmful Practices & Child Marriage',
    summary: 'Ending early, forced, and child marriage, as well as coercive cultural practices that compromise girls’ futures.',
    expandedDetails: 'Target 5.3 addresses the profound social and health repercussions of child marriage, which curtails secondary education, limits economic autonomy, and perpetuates intergenerational cycles of poverty.',
    iconName: 'AlertCircle'
  },
  {
    id: 'unpaid-care',
    title: 'Recognizing & Valuing Unpaid Care & Domestic Work',
    summary: 'Redistributing domestic responsibilities through public services, infrastructure, and social protection policies.',
    expandedDetails: 'Target 5.4 highlights the asymmetric burden of family caregiving, elder care, and domestic labor primarily borne by women, which severely restricts their participation in the formal workforce.',
    iconName: 'Clock'
  },
  {
    id: 'leadership',
    title: 'Equal Participation & Leadership in Decision-Making',
    summary: 'Ensuring women’s full and effective leadership at all levels of governance, corporate boards, and public policy.',
    expandedDetails: 'Target 5.5 promotes equitable quotas, transparent promotion pipelines, and the dismantling of institutional glass ceilings that restrict female representation in executive roles.',
    iconName: 'Users'
  },
  {
    id: 'economic-opportunities',
    title: 'Equal Access to Economic Resources & Ownership',
    summary: 'Granting equal rights to economic resources, financial credit, property ownership, and inheritance.',
    expandedDetails: 'Target 5.a promotes financial inclusion, equal access to commercial banking and enterprise funding, and closing the micro-credit and venture capital gender disparity.',
    iconName: 'Briefcase'
  },
  {
    id: 'technology',
    title: 'Empowerment Through Technology & Digital Skills',
    summary: 'Enhancing the use of enabling technology, particularly ICT, to foster women’s innovation and career growth.',
    expandedDetails: 'Target 5.b addresses the digital gender divide, ensuring equitable access to stem training, digital literacy tools, and online remote work opportunities.',
    iconName: 'Cpu'
  },
  {
    id: 'legal-policies',
    title: 'Enforcing Sound Policies & Enforceable Legislation',
    summary: 'Adopting and strengthening enforceable laws and structural policies to promote gender equality universally.',
    expandedDetails: 'Target 5.c guarantees accountability mechanisms, independent gender ombudspersons, and dedicated state budgets for gender-responsive public initiatives.',
    iconName: 'FileText'
  }
];

export const SDG5_STATISTICS: StatisticItem[] = [
  {
    id: 'sdg5-child-marriage',
    metric: '18.3%',
    unit: 'About 18 in 100 girls',
    title: 'Marriage Before Age 18',
    description: 'Around 18 out of every 100 girls in Pakistan are married before their 18th birthday.',
    year: '2026 Benchmark / UN Women & PDHS',
    source: 'UN Women Global Gender Data Hub / PDHS 2026 Tracking',
    sourceUrl: 'https://data.unwomen.org',
    metaphor: 'A pathway that ends prematurely before reaching educational fulfillment.',
    category: 'sdg5',
    benchmark: 'Goal: 0% child marriages by 2030.',
    details: 'When young girls are married early, they usually have to drop out of school, missing their chance to get a degree or earn their own income.'
  },
  {
    id: 'sdg5-marriage-under15',
    metric: '3.6%',
    unit: 'Almost 4 in 100 girls',
    title: 'Marriage Before Age 15',
    description: 'Young girls married before turning 15 years old in national survey reports.',
    year: '2026 SDG Assessment',
    source: 'UN Women Data Hub / Pakistan Demographic Tracking 2026',
    sourceUrl: 'https://data.unwomen.org',
    metaphor: 'A severe structural barrier terminating childhood opportunities.',
    category: 'sdg5',
    benchmark: 'Global target under SDG 5.3 is 0% by 2030.',
    details: 'Young girls lose their childhood and face serious health and safety dangers when married so early.'
  },
  {
    id: 'sdg5-violence',
    metric: '16.2%',
    unit: 'About 16 in 100 women',
    title: 'Violence Against Women at Home',
    description: 'Women who reported being beaten or mistreated at home in the past 12 months.',
    year: '2026 Monitoring Baseline',
    source: 'UN Women Data Hub / National Gender Health Survey 2026',
    sourceUrl: 'https://data.unwomen.org',
    metaphor: 'A climate of personal insecurity that extends directly into public and workplace dignity.',
    category: 'sdg5',
    benchmark: 'Goal: 0% violence against women.',
    details: 'When women do not feel safe in their personal lives, it is almost impossible for them to build confidence and go out to work.'
  },
  {
    id: 'sdg5-unpaid-care',
    metric: '19.9% vs 1.8%',
    unit: '11 Times More Housework',
    title: 'Daily Unpaid Housework and Care',
    description: 'Women spend 20% of their day cooking, cleaning, and caring for family, while men spend only 1.8%.',
    year: '2026 National Time-Use Assessment',
    source: 'UN Women / Pakistan Time-Use Statistics 2026',
    sourceUrl: 'https://data.unwomen.org',
    metaphor: 'Two paths of dramatically unequal time commitments that restrict professional mobility.',
    category: 'sdg5',
    benchmark: 'Target: Shared household duties between men and women.',
    details: 'Because women are expected to do almost all cooking, laundry, and care work alone, they have very little time left for college or a paid job.'
  },
  {
    id: 'sdg5-parliament',
    metric: '20.5%',
    unit: '20 out of 100 seats',
    title: 'Women in National Parliament',
    description: 'Only 1 out of 5 seats in Pakistan’s National Assembly are held by women (mostly through reserved quotas).',
    year: '2026 Parliamentary Assembly Update',
    source: 'Inter-Parliamentary Union (IPU) / UN Women Data Hub 2026',
    sourceUrl: 'https://data.unwomen.org',
    metaphor: 'A decision-making forum where 80% of voices represent only one perspective.',
    category: 'sdg5',
    benchmark: 'Goal: 50% equal representation in lawmaking.',
    details: 'When laws are written by mostly men, issues that affect women like childcare, maternal health, and workplace safety are often ignored.'
  },
  {
    id: 'sdg5-labour-force',
    metric: '22.7% vs 68.7%',
    unit: '3 Times More Men Working',
    title: 'People with Paid Jobs (Workforce)',
    description: 'Only 23% of women have a formal job compared to 69% of men in Pakistan.',
    year: '2025–2026 Labour Force Survey',
    source: 'Pakistan Bureau of Statistics (PBS) Labour Survey 2025–2026',
    sourceUrl: 'https://www.pbs.gov.pk',
    metaphor: 'Two parallel pathways of radically different widths representing suppressed economic potential.',
    category: 'sdg5',
    benchmark: 'Goal: Equal job access and fair pay for women.',
    details: 'Women often cannot take jobs because of unsafe public buses, lack of office daycares for babies, and unequal pay.'
  }
];

export const SDG10_TOPICS: SDGTopic[] = [
  {
    id: 'social-inclusion',
    title: 'Universal Social, Economic & Political Inclusion',
    summary: 'Empowering and promoting the social, economic, and political inclusion of all, irrespective of identity or circumstance.',
    expandedDetails: 'Target 10.2 demands dismantling structural exclusion against persons with disabilities, ethnic minorities, religious minorities, and socially marginalized groups.',
    iconName: 'Users'
  },
  {
    id: 'equal-opportunity',
    title: 'Equal Opportunity & Eliminating Discriminatory Laws',
    summary: 'Ensuring equal opportunity and reducing inequalities of outcome by eliminating discriminatory policies.',
    expandedDetails: 'Target 10.3 mandates reforming institutional rules, merit examinations, and hiring criteria that subtly bias outcomes against disadvantaged demographics.',
    iconName: 'Compass'
  },
  {
    id: 'social-protection',
    title: 'Adopting Fiscal, Wage & Social Protection Policies',
    summary: 'Achieving progressively greater equality through fair minimum wages, targeted cash transfers, and universal safety nets.',
    expandedDetails: 'Target 10.4 ensures that economic shocks do not wipe out vulnerable households, strengthening state-level social safety nets.',
    iconName: 'Shield'
  },
  {
    id: 'financial-regulation',
    title: 'Regulation & Monitoring of Global Financial Markets',
    summary: 'Strengthening the regulation and transparency of institutions to prevent predatory financial practices.',
    expandedDetails: 'Target 10.5 focuses on ethical lending, progressive tax enforcement, and curtailing capital flight.',
    iconName: 'TrendingUp'
  },
  {
    id: 'representation',
    title: 'Enhanced Voice for Developing & Marginalized Regions',
    summary: 'Ensuring stronger representation for neglected communities and regional provinces in institutional decisions.',
    expandedDetails: 'Target 10.6 addresses geographic inequality where public capital investment disproportionately favors affluent urban centers.',
    iconName: 'Globe'
  },
  {
    id: 'safe-migration',
    title: 'Facilitating Safe, Orderly & Responsible Migration',
    summary: 'Protecting the fundamental labor rights of migrant and domestic workers through humane labor regulations.',
    expandedDetails: 'Target 10.7 protects internal and international migrant workers from wage theft, confiscation of documents, and dangerous working environments.',
    iconName: 'Send'
  }
];

export const SDG10_STATISTICS: StatisticItem[] = [
  {
    id: 'sdg10-extreme-poverty',
    metric: '22.96%',
    unit: 'Around 23 in 100 people',
    title: 'People Living on Less than $3 a Day',
    description: 'Nearly 23 out of every 100 people in Pakistan live on less than $3.00 (around 850 Rupees) per day.',
    year: '2026 World Bank Release',
    source: 'World Bank Poverty and Inequality Platform (2026 Update)',
    sourceUrl: 'https://pip.worldbank.org',
    metaphor: 'A steep economic divide creating immediate barriers to dignified employment and education.',
    category: 'sdg10',
    benchmark: 'Goal: No one trapped in deep poverty.',
    details: 'Families this poor must spend almost all their money on basic flour and oil, leaving nothing for children’s books, college fees, or medicine.'
  },
  {
    id: 'sdg10-multidimensional-poverty',
    metric: '27.13%',
    unit: 'More than 1 in 4 people',
    title: 'People Lacking Clean Water, Schooling & Health',
    description: 'Over 27% of people face multiple hardships at once: no clean drinking water, no clinic nearby, and no school for their kids.',
    year: '2026 National Assessment',
    source: 'World Bank / Planning Commission of Pakistan (2026 Edition)',
    sourceUrl: 'https://www.worldbank.org',
    metaphor: 'Multiple interlocking layers of exclusion reinforcing one another.',
    category: 'sdg10',
    benchmark: 'Goal: Basic clean water, health, and schools in every village.',
    details: 'In rural villages, poverty is far worse than in big cities because remote areas lack roads, electricity, and qualified doctors.'
  },
  {
    id: 'sdg10-gini-index',
    metric: '33.54',
    unit: 'Income Inequality Score',
    title: 'Gap Between the Rich and the Poor',
    description: 'The richest 20% of people in Pakistan spend nearly half of all money, while the poorest 20% get less than a tenth.',
    year: '2026 Global Index Report',
    source: 'World Bank Development Indicators 2026',
    sourceUrl: 'https://data.worldbank.org',
    metaphor: 'An uneven balance beam concentrating opportunity and capital in upper deciles.',
    category: 'sdg10',
    benchmark: 'Goal: Fair wealth sharing and fair wages for workers.',
    details: 'When wealth is stuck at the very top, ordinary workers and labor families struggle to afford basic rent and food even when working 12 hours a day.'
  },
  {
    id: 'sdg10-child-labour',
    metric: '11%',
    unit: 'About 1 in 9 children',
    title: 'Children Forced to Work Instead of School',
    description: 'Around 11 out of 100 children aged 5 to 17 are working in workshops, brick kilns, or shops instead of studying.',
    year: '2026 UNICEF Progress Report',
    source: 'UNICEF Pakistan / National Child Protection Tracking 2026',
    sourceUrl: 'https://www.unicef.org/pakistan',
    metaphor: 'Childhood truncated by economic necessity, perpetuating intergenerational inequality.',
    category: 'connected',
    benchmark: 'Goal: 0% child labor, all kids in school.',
    details: 'When poor families cannot afford food, children are pulled out of school to do manual labor, trapping them in low-wage cycles forever.'
  },
  {
    id: 'sdg10-accessibility',
    metric: '>60%',
    unit: '6 out of 10 buildings',
    title: 'Buildings Without Wheelchair Ramps or Lifts',
    description: 'More than 60% of office buildings, banks, and schools have only stairs, with no ramps or lifts for people with disabilities.',
    year: '2026 Synthesis',
    source: 'Pakistan National Disability Data & International Labour Organization (ILO) 2026',
    sourceUrl: 'https://www.ilo.org',
    metaphor: 'Physical stairs and digital walls that actively lock qualified citizens out of opportunity.',
    category: 'sdg10',
    benchmark: 'Goal: 100% accessible public and work buildings.',
    details: 'Qualified people in wheelchairs or using crutches are locked out of jobs simply because they cannot physically climb the stairs to enter.'
  }
];

export const WORKPLACE_SPECTRUM: WorkplaceSpectrumLevel[] = [
  {
    level: 1,
    label: 'Professional Interaction',
    indicator: 'Consensual, respectful, work-focused dialogue within clear boundaries.',
    example: 'Constructive feedback on deliverables, mutual greetings, polite professional requests.',
    appropriateAction: 'Standard healthy collaboration. Uphold active listening and shared respect.',
    severity: 'low'
  },
  {
    level: 2,
    label: 'Disrespectful Conduct',
    indicator: 'Micro-aggressions, dismissive remarks based on gender, background, or identity.',
    example: 'Mocking regional accents, patronizing comments about family duties, interrupting certain colleagues routinely.',
    appropriateAction: 'Address clearly and promptly if safe: "Please refrain from remarks of that nature; let us stay focused on the project."',
    severity: 'moderate'
  },
  {
    level: 3,
    label: 'Repeated Inappropriate Conduct',
    indicator: 'Persistent unwanted remarks, intrusive personal questioning, or biased allocation of duties.',
    example: 'Unwelcome comments on physical appearance, systematic exclusion from client meetings, differential pay whispers.',
    appropriateAction: 'Maintain a factual personal contemporaneous record (dates, exact words, witnesses). Consult institutional policy handbook.',
    severity: 'high'
  },
  {
    level: 4,
    label: 'Potential Harassment / Hostile Environment',
    indicator: 'Unwelcome conduct creating an intimidating, hostile, degrading, or offensive environment; quid pro quo demands.',
    example: 'Threatening career consequences for refusing personal advances, overt derogatory slurs, physical intimidation.',
    appropriateAction: 'Exercise formal internal grievance mechanisms or report to an independent workplace inquiry committee / ombudsperson. Seek qualified legal counsel.',
    severity: 'critical'
  }
];

export const ACTION_FRAMEWORK: ActionGuideline[] = [
  {
    step: '01',
    title: 'Recognize the Reality',
    summary: 'Distinguish between standard professional friction and discriminatory or harassing patterns.',
    practicalAction: 'Familiarize yourself with your organization’s code of conduct and relevant national protections (e.g., Protection Against Harassment of Women at the Workplace Act in Pakistan).',
    cautions: 'Trust your objective assessment; do not dismiss repeated patterns as "just how things are."'
  },
  {
    step: '02',
    title: 'Document with Precision',
    summary: 'Create contemporaneous, factual records of incidents as they happen.',
    practicalAction: 'Write down exact dates, times, locations, verbatim words spoken, emails/messages preserved, and names of colleagues who witnessed the event.',
    cautions: 'Store your notes on personal devices or personal notebooks, not exclusively on corporate equipment subject to administrative wipe.'
  },
  {
    step: '03',
    title: 'Consult Formal Policies',
    summary: 'Examine institutional reporting procedures and statutory complaint timelines.',
    practicalAction: 'Check if your workplace has an established Inquiry Committee, an HR Ombudsman, or a formal anonymous reporting hotline.',
    cautions: 'Review organizational confidentiality clauses and anti-retaliation provisions.'
  },
  {
    step: '04',
    title: 'Engage Trusted Support',
    summary: 'Reach out to trusted allies, employee resource groups, or professional mentors.',
    practicalAction: 'Discussing the situation in confidence with a trusted colleague or union representative can provide emotional grounding and objective perspective.',
    cautions: 'Avoid spreading unverified rumors in public team channels that could compromise formal investigation integrity.'
  },
  {
    step: '05',
    title: 'Submit Formal Grievance',
    summary: 'Initiate a structured report through an appropriate recognized grievance channel.',
    practicalAction: 'Provide your factual timeline, documentation, and specific request for corrective workplace remediation.',
    cautions: 'Ensure you retain a timestamped submission receipt or email confirmation of your filing.'
  },
  {
    step: '06',
    title: 'Seek Qualified Legal Counsel',
    summary: 'Consult certified legal advocates when internal channels fail or severe harm occurs.',
    practicalAction: 'In Pakistan, complaints may be escalated to the Provincial or Federal Ombudsman for Protection Against Harassment (FOSPAH) or civil labor courts.',
    cautions: 'Educational materials cannot replace formal legal representation. Always seek licensed legal professionals for case advice.'
  }
];

export const GAME_SECTORS: GameSector[] = [
  {
    id: 'boardroom',
    name: 'The Leadership Boardroom',
    sdgFocus: 'SDG 5',
    initialState: 'Opaque glass chamber with zero women in senior leadership and persistent gender wage gaps.',
    resolvedState: 'Transparent, illuminated collaborative hub with 50/50 balanced representation and transparent pay bands.',
    actionLabel: 'Institute Merit Quota & Pay Equity Audit',
    impactScore: 20,
    solved: false,
    reformTitle: 'Gender Parity in Governance',
    explanation: 'Instituting fair promotion rubrics and auditing wage distributions closes the 3× workforce and leadership divide.'
  },
  {
    id: 'accessibility',
    name: 'Universal Mobility Bridge',
    sdgFocus: 'SDG 10',
    initialState: 'Steep stairways and narrow doorways completely blocking colleagues using wheelchairs or assistive devices.',
    resolvedState: 'Gentle illuminated ramp, automated wide sliding portals, and screen-reader compliant digital workstations.',
    actionLabel: 'Construct Universal Accessibility Ramps',
    impactScore: 20,
    solved: false,
    reformTitle: 'Universal Architecture & Digital Access',
    explanation: 'Removing physical and digital friction enables 100% of employees to access collaborative spaces with equal autonomy.'
  },
  {
    id: 'safety',
    name: 'Whistleblower & Safety Haven',
    sdgFocus: 'SDG 5 × 10',
    initialState: 'Shadowed hallway where colleagues fear retaliation if they report harassment or unfair discrimination.',
    resolvedState: 'Confidential, independent Ombudsman inquiry station protected by enforceable anti-retaliation statutes.',
    actionLabel: 'Deploy Independent Harassment Committee',
    impactScore: 20,
    solved: false,
    reformTitle: 'Safe & Confidential Reporting Protocol',
    explanation: 'Independent inquiry mechanisms protect vulnerable complainants from intimidation and career retribution.'
  },
  {
    id: 'caregiver',
    name: 'Care & Family Workstation',
    sdgFocus: 'SDG 5',
    initialState: 'Rigid inflexible shifts that penalize parents and caregivers bearing the 19.9% unpaid domestic burden.',
    resolvedState: 'On-site collaborative childcare zone, flexible asynchronous core hours, and paid parental leave equity.',
    actionLabel: 'Implement Flexible Hours & On-site Childcare',
    impactScore: 20,
    solved: false,
    reformTitle: 'Recognition of Unpaid Care Responsibilities',
    explanation: 'Providing child-care support and schedule flexibility unlocks sustainable participation for women and working families.'
  },
  {
    id: 'gateway',
    name: 'The Merit Opportunity Gateway',
    sdgFocus: 'SDG 10',
    initialState: 'Closed network recruitment gate where nepotism and socio-economic background dictate job offers.',
    resolvedState: 'Open, transparent blind-recruitment gateway welcoming talent regardless of socioeconomic or regional origin.',
    actionLabel: 'Establish Blind Hiring & Equal Pay Bands',
    impactScore: 20,
    solved: false,
    reformTitle: 'Non-Discriminatory Recruitment Pipeline',
    explanation: 'Eliminates structural socio-economic barriers so talent from all provinces and economic quintiles compete on merit.'
  }
];
