/**
 * data.js — All portfolio content lives here.
 * Update this file to add/remove projects or change content.
 */

// =====================
// FEATURED PROJECTS
// =====================
const featuredProjects = [
  {
    id: 'fruitshop',
    name: 'FruitShop',
    tagline: 'AI-Powered E-Commerce Backend',
    image: 'img/fruitshop.png',
    emoji: '🍊',
    colorFrom: '#2d6a4f',
    colorTo: '#40916c',
    cardBg: 'linear-gradient(135deg, #2d6a4f, #40916c)',
    textColor: '#ffffff',
    github: 'https://github.com/TrungWolford/FruitShop',
    demo: null,
  },
  {
    id: 'placeholder-2',
    name: 'Coming Soon',
    tagline: 'Next Project — In Progress',
    image: null,
    emoji: '⚙️',
    cardBg: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    textColor: 'rgba(248,248,246,0.7)',
    github: null,
    demo: null,
    isPlaceholder: true,
  },
  {
    id: 'placeholder-3',
    name: 'Coming Soon',
    tagline: 'Next Project — In Progress',
    image: null,
    emoji: '🚀',
    cardBg: 'linear-gradient(135deg, #2c3e50, #3d5a80)',
    textColor: 'rgba(248,248,246,0.7)',
    github: null,
    demo: null,
    isPlaceholder: true,
  },
];

// =====================
// ALL PROJECTS (grid)
// =====================
const allProjects = [
  {
    id: 'fruitshop',
    name: 'FruitShop',
    tagline: 'AI-powered e-commerce platform with Gemini function calling',
    emoji: '🍊',
    iconBg: 'linear-gradient(135deg, #2d6a4f, #52b788)',
    technologies: ['Java 17', 'Spring Boot', 'PostgreSQL', 'WebSocket', 'Gemini AI', 'Gatling'],
    github: 'https://github.com/TrungWolford/FruitShop',
    demo: null,
    description: 'Built a robust backend using Java 17, Spring Boot, and PostgreSQL. Integrated Gemini Function Calling to create an AI agent capable of executing business tasks like order tracking and refunds. Ensured system reliability with 140+ integration and E2E tests. Conducted performance testing with Gatling, achieving a 99.5% success rate under 200 concurrent users.',
  },
  {
    id: 'spring-security',
    name: 'Auth System',
    tagline: 'Full-stack JWT authentication with MFA, OTP, and refresh token rotation',
    emoji: '🛡️',
    iconBg: 'linear-gradient(135deg, #1a3a4a, #2980b9)',
    technologies: ['Spring Security', 'JWT', 'Redis', 'BCrypt', 'Spring Boot'],
    github: 'https://github.com/TrungWolford',
    demo: null,
  },
  {
    id: 'ai-guardrails',
    name: 'AI Guardrails',
    tagline: 'Safety layer for LLM responses — validating business rules with structured outputs',
    emoji: '🤖',
    iconBg: 'linear-gradient(135deg, #4a1a4a, #9b59b6)',
    technologies: ['AWS Bedrock', 'Gemini', 'Java', 'Spring Boot', 'Prompt Engineering'],
    github: 'https://github.com/TrungWolford',
    demo: null,
  },
];

// =====================
// TECH STACK
// =====================
const techStack = [
  {
    label: 'Core Languages',
    items: [
      { name: 'Java', emoji: '☕' },
      { name: 'C#', emoji: '🔷' },
      { name: 'SQL', emoji: '🗄️' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Spring Boot', emoji: '🌱' },
      { name: 'Spring Security', emoji: '🔒' },
      { name: 'REST API Design', emoji: '🔗' },
    ],
  },
  {
    label: 'Database',
    items: [
      { name: 'PostgreSQL', emoji: '🐘' },
      { name: 'Redis', emoji: '⚡' },
      { name: 'MongoDB', emoji: '🍃' },
      { name: 'DynamoDB', emoji: '☁️' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    items: [
      { name: 'Docker', emoji: '🐳' },
      { name: 'AWS', emoji: '☁️' },
      { name: 'GitHub Actions', emoji: '⚙️' },
    ],
  },
  {
    label: 'AI / LLM',
    items: [
      { name: 'Gemini (Function Calling)', emoji: '✨' },
      { name: 'AWS Bedrock', emoji: '🤖' },
      { name: 'Prompt Engineering', emoji: '🧠' },
    ],
  },
  {
    label: 'Testing & Quality',
    items: [
      { name: 'Integration Testing', emoji: '🧪' },
      { name: 'E2E Testing', emoji: '🔬' },
      { name: 'Gatling (Performance)', emoji: '📊' },
    ],
  },
];
