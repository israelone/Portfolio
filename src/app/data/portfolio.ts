// Portfolio content and data
// Edit this file to customize your portfolio content

export const portfolioData = {
  // Personal info
  personal: {
    name: "Israel Lopez",
    title: "Full-Stack Developer & Front-End Specialist",
    intro: "I build modern, user-focused web applications with React and full-stack technologies. 4+ years of experience delivering clean code and intuitive interfaces.",
    email: "israel.lopez.dev@gmail.com", // Update with your email
    phone: "+1 (XXX) XXX-XXXX", // Update with your phone
    location: "City, State", // Update with your location
  },

  // Hero section CTA
  hero: {
    heading: "Israel Lopez",
    subheading: "Full-Stack Developer & Front-End Specialist",
    intro: "I build modern, user-focused web applications using React, TypeScript, and Node.js. Currently crafting scalable solutions at Dorger Software Architects.",
    cta: {
      primary: "View My Work",
      primaryLink: "#projects",
      secondary: "Get In Touch",
      secondaryLink: "#contact",
    },
  },

  // About section
  about: {
    title: "About Me",
    intro:
      "I'm a bilingual software developer passionate about creating clean, accessible web experiences. I enjoy solving complex problems and leveraging AI tools to accelerate development workflows.",
    bio: [
      "With 4+ years of professional experience, I've worked across the full stack—from building responsive React frontends to designing scalable Node.js backends.",
      "At Dorger Software Architects, I develop enterprise solutions with TypeScript and modern frameworks. Previously, I worked as a Software Analyst at Sparq and completed the IBM Application Developer Apprenticeship.",
      "I'm particularly focused on front-end development, full-stack applications, and AI-assisted development workflows that improve code quality and team productivity.",
      "Beyond coding, I'm bilingual in Spanish and English, which helps me collaborate with global teams and understand diverse user needs.",
    ],
  },

  // Skills organized by category
  skills: {
    title: "Skills & Technologies",
    categories: [
      {
        name: "Frontend",
        skills: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"],
      },
      {
        name: "Backend",
        skills: ["Node.js", "Express.js", "REST APIs", "API Design", "Server-Side Rendering"],
      },
      {
        name: "Databases",
        skills: ["PostgreSQL", "MySQL", "Database Design", "SQL Optimization"],
      },
      {
        name: "Tools & DevOps",
        skills: ["Git", "GitHub", "Azure DevOps", "Jenkins", "CI/CD Pipelines", "Debugging Tools"],
      },
      {
        name: "AI-Assisted Development",
        skills: ["ChatGPT", "GitHub Copilot", "Warp CLI", "Code Generation", "Debugging & Learning"],
      },
      {
        name: "Languages",
        skills: ["English (Fluent)", "Spanish (Fluent)"],
      },
    ],
  },

  // Experience section
  experience: {
    title: "Professional Experience",
    positions: [
      {
        title: "Software Developer",
        company: "Dorger Software Architects",
        period: "Present",
        description: "Maintain and enhance enterprise web application components and data workflows while delivering accessible, user-centered experiences aligned with business and platform requirements.",
        achievements: [
          "Created intuitive, visually appealing, and accessible UIs tailored to support diverse platform models and use cases",
          "Authored technical documentation including user guides, API documentation, and system workflow references to improve maintainability",
          "Guided and supported junior developers, encouraging knowledge sharing and team growth",
          "Resolved production issues and improved performance in data-driven application modules",
          "Leveraged AI-assisted tools (ChatGPT, Codex, and Warp) to accelerate debugging, code generation, and development workflows",
          "Maintained and enhanced enterprise application components and underlying data workflows",
        ],
      },
      {
        title: "Software Analyst I",
        company: "Sparq",
        period: "2022–2023",
        description: "Analyzed software requirements and developed solutions using JavaScript, React, and Node.js.",
        achievements: [
          "Developed and maintained React-based front-end applications",
          "Collaborated with product and design teams to translate requirements into code",
          "Participated in agile workflows and contributed to sprint planning",
        ],
      },
      {
        title: "IBM Application Developer Apprenticeship",
        company: "IBM",
        period: "2021–2022",
        description: "Completed comprehensive apprenticeship covering full-stack web development, cloud technologies, and software engineering best practices.",
        achievements: [
          "Gained hands-on experience with enterprise technologies and development patterns",
          "Earned industry-recognized certifications in web development",
          "Worked on real-world projects with experienced mentors",
        ],
      },
    ],
  },

  // Projects section
  projects: {
    title: "Featured Projects",
    intro: "Selected projects that reflect my focus on practical internal tools, strong front-end architecture, and business-oriented UX decisions.",
    projects: [
      // {
      //   title: "AI-Powered Internal Task Assistant",
      //   description:
      //     "A React-based internal tool that uses AI to help teams manage tasks more efficiently. Integrated ChatGPT API for intelligent task suggestions and auto-categorization.",
      //   technologies: ["React", "TypeScript", "Node.js", "OpenAI API", "Tailwind CSS"],
      //   link: "#", // Update with your project link
      //   github: "#", // Update with your GitHub repo
      //   featured: true,
      // },
      {
        title: "Construction Project Tracker",
        description:
          "Frontend-only React application simulating an internal project controls dashboard for commercial construction operations. Built for PMs and operations leads to evaluate staffing pressure, financial variance, milestone health, inspections, and active risk before coordination meetings.",
        highlights: [
          "Portfolio dashboard, project detail, risks/issues, schedule look-ahead, and team capacity views shaped around construction workflows",
          "Domain-specific mock data and centralized formatting utilities for currency, dates, labels, and variance language",
          "Internal-tool UX focused on scanability with dense tables, compact metadata, and grounded business-first visual hierarchy",
        ],
        technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
        link: "https://israelone.github.io/ConstructionProjectTracker",
        github: "https://github.com/israelone/ConstructionProjectTracker",
        featured: true,
      },
      // {
      //   title: "Developer Debug Assistant",
      //   description:
      //     "CLI tool that leverages AI to help developers quickly debug errors and generate solutions. Integrated with common debugging workflows.",
      //   technologies: ["TypeScript", "Node.js", "OpenAI", "CLI"],
      //   link: "#",
      //   github: "#",
      //   featured: true,
      // },
    ],
  },

  // AI Workflow section
  aiWorkflow: {
    title: "AI-Assisted Development",
    intro: "I leverage modern AI tools to improve code quality, accelerate learning, and boost productivity while maintaining professionalism and critical thinking.",
    practices: [
      {
        tool: "ChatGPT",
        description:
          "Use for brainstorming architecture decisions, learning new concepts, and debugging complex issues. Great for explaining concepts and exploring solutions.",
      },
      {
        tool: "GitHub Copilot",
        description:
          "Accelerate development with intelligent code suggestions. I use it for boilerplate code, utility functions, and implementation patterns while always reviewing suggestions.",
      },
      {
        tool: "Warp",
        description:
          "Modern terminal with AI-powered commands. Helps me write complex shell commands faster and discover new CLI tricks.",
      },
    ],
    cta: "AI tools enhance my productivity while I maintain code quality and engineering judgment.",
  },

  // Contact section
  contact: {
    title: "Let's Connect",
    intro: "I'm always interested in discussing new projects, opportunities, and ideas. Feel free to reach out!",
    methods: [
      {
        type: "Email",
        value: "israel.lopez.dev@gmail.com", // Update with your email
        link: "mailto:israel.lopez.dev@gmail.com",
        icon: "✉️",
      },
      {
        type: "LinkedIn",
        value: "Israel Lopez",
        link: "https://linkedin.com/in/israel-lopez-dev", // Update with your LinkedIn
        icon: "💼",
      },
      {
        type: "GitHub",
        value: "israelone",
        link: "https://github.com/israelone", // Update with your GitHub
        icon: "🐙",
      },
      {
        type: "Location",
        value: "Semmes, AL, USA",
        icon: "📍",
      },
    ],
  },

  // Footer
  footer: {
    credit: "Built with React, Next.js, and Tailwind CSS",
    year: new Date().getFullYear(),
    links: [
      { label: "Home", href: "#" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
};
