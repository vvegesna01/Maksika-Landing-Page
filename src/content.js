// All site copy lives here so it can be edited without touching components.

export const nav = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  {
    label: 'Solutions',
    to: '/solutions',
    children: [
      { label: 'Exploration Geology', to: '/solutions/exploration-geology' },
      { label: 'Mine Life Cycle Engineering', to: '/solutions/mine-life-cycle-engineering' },
      { label: 'Surveying & Geo-informatics', to: '/solutions/surveying-geo-informatics' },
      { label: 'Spatial Analytics', to: '/solutions/spatial-analytics' },
    ],
  },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
];

export const partners = [
  'ISRO',
  'APSAC',
  'Geological Survey of India',
  'Partner 4',
];

export const stats = [
  { value: '2018', label: 'Year established' },
  { value: '11', label: 'Projects delivered' },
  { value: '15+', label: 'Countries of experience' },
  { value: '37 yrs', label: 'Leadership experience' },
];

export const services = [
  {
    title: 'Subsurface Exploration & Energy',
    text: 'Integrated hydrocarbon and mineral exploration using advanced seismic and geophysical methods.',
    points: ['Micro-seismic monitoring', 'Gravity / magnetics', 'Borehole geophysics'],
    outcome: 'Accurate resource zonation, reduced drilling risk',
  },
  {
    title: 'Mine Engineering & Resource Management',
    text: 'Specializt disciplines across the mine lifecycle, from beneficiation plans to closure.',
    points: ['Geostatistical analysis', '3D block modeling', 'Ore beneficiation processes'],
    outcome: 'Transparent reporting for investment support',
  },
  {
    title: 'Sustainable Infrastructure & Environment',
    text: 'Environmental Impact Assessments and land-water resource development built for long-term viability.',
    points: ['9-stage EIA process support', 'Compliance management', 'Strategic resource auditing'],
    outcome: 'Impact mitigation and regulatory compliance',
  },
];

export const solutions = [
  {
    slug: 'exploration-geology',
    title: 'Exploration Geology',
    text: 'Cost-effective exploration and development services, feasibility studies, due diligence and geological mapping for base and precious metals, industrial minerals and REE.',
  },
  {
    slug: 'mine-life-cycle-engineering',
    title: 'Mine Life Cycle Engineering',
    text: 'Resource modeling, reserve estimation, mineral beneficiation planning and JORC / CIM / PERC compliance auditing.',
  },
  {
    slug: 'surveying-geo-informatics',
    title: 'Surveying & Geo-informatics',
    text: 'High-precision terrestrial surveying, drone mapping, DGPS capture and satellite radar interferometry (InSAR).',
  },
  {
    slug: 'spatial-analytics',
    title: 'Spatial Analytics',
    text: 'GIS architecture, 3D LiDAR modeling, digital twins, cloud migration and enterprise application development.',
  },
];

export const standards = [
  { name: 'JORC', text: 'Australasian Code for Reporting of Exploration Results, Mineral Resources and Ore Reserves.' },
  { name: 'PERC', text: 'Pan-European Standard for public reporting of Exploration Results, Mineral Resources and Reserves.' },
  { name: 'CIM', text: 'Canadian Institute of Mining, Metallurgy and Petroleum standards for mineral resource statements.' },
];

export const countries = ['India', 'D.R. Congo', 'Oman', 'Turkey', 'Madagascar'];

export const about = {
  lead: 'Maksika is Sanskrit for honeybee: collective intelligence for Earth resources.',
  text: 'We bridge space-age remote sensing and ground-level engineering. Our team of GIS architects, geophysicists and mining engineers works with geometric precision to deliver structural perfection in extraction and data architecture.',
  pillars: [
    { title: 'Our mission', text: 'Enable sustainable development through precise data and scientific excellence.' },
    { title: 'How we work', text: 'Multidisciplinary collaboration and advanced spatial technologies turn complex exploration into actionable insight.' },
    { title: 'What we stand for', text: 'Scientific rigor, operational transparency and long-term partnerships built on trust.' },
  ],
  ceo: {
    name: 'Dr. Trinadha Raju Rudraraju',
    role: 'CEO',
    text: '37 years in R&D, precision mapping and mineral exploration. Has led projects across DR Congo, Kenya, Mali, Madagascar, Morocco, Turkey, Oman, UAE and Iran, including work in direct affiliation with ISRO. Ph.D., Kyushu University (Japan).',
  },
};

export const posts = [
  {
    slug: 'full-wave-location-fwl-technology',
    title: 'Full-Wave Location (FWL) Technology',
    text: 'Passive microseismic monitoring for better reservoir management and improved hydrocarbon recovery.',
  },
  {
    slug: 'common-scattered-point-dip-cspd',
    title: 'Common Scattered Point Dip (CSPD)',
    text: 'Why diffraction energy, often treated as noise, can sharpen seismic interpretation workflows.',
  },
  {
    slug: 'engineering-grade-drone-data-for-modern-geoscience-applications',
    title: 'Engineering Grade Drone Data for Modern Geoscience',
    text: 'On-demand, ultra-high-resolution data acquisition tailored to specific project needs.',
  },
];

export const contact = {
  email: 'contact@maksika.in',
  address: ['Plot 195, 3 - Sreenilayam,', 'Kavuri Hills, Hyderabad - 500081', 'Telangana, India'],
};
