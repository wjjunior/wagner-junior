interface ExperienceEntry {
  date: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  description: string;
  tags: string[];
}

export interface Translations {
  nav: { about: string; experience: string };
  header: {
    title: string;
    subtitle: string;
    tagline: string;
    cta: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  experience: ExperienceEntry[];
  footer: {
    cta: string;
    email: string;
    built: string;
  };
}

export const translations: Record<"en" | "pt", Translations> = {
  en: {
    nav: { about: "About", experience: "Experience" },
    header: {
      title: "Wagner Junior",
      subtitle: "Staff Full Stack Engineer",
      tagline: "I architect and ship scalable systems end-to-end — from high-traffic platforms serving millions to AI-powered products that push what's possible.",
      cta: "Get in touch",
    },
    about: {
      title: "About",
      paragraphs: [
        "I'm a Staff-level Full Stack Engineer with 14+ years of experience building and scaling web applications. I specialize in TypeScript, React, and Node.js — and I ship fast, own systems end-to-end, and obsess over developer experience and product quality.",
        "I've led full-stack development across diverse domains — from digital identity platforms and event-driven architectures to edtech products serving millions of users globally. I drive architecture decisions, mentor engineers, define technical standards, and ship features with full ownership from design to deployment.",
        "Currently, I operate my own engineering consultancy serving global tech companies at Staff and Senior level. Alongside client work, I'm building a production multi-agent AI orchestration platform — coordinating specialized LLM agents for autonomous task execution, intelligent model routing, and security hardening.",
        "I thrive in high-autonomy, high-velocity environments where engineering decisions directly shape the product. My sweet spot is the intersection of scalable architecture, full-stack TypeScript, and intelligent automation.",
      ],
    },
    experience: [
      {
        date: "OCT 2023 — PRESENT",
        role: "Founder & Staff Engineer",
        company: "Wagner Junior LTDA",
        companyUrl: "https://wagner-junior.dev",
        description:
          "Software engineering consultancy serving multiple global tech companies as a dedicated contractor, operating at Staff and Senior level with full technical autonomy. Leading full-stack architecture across React, TypeScript, Node.js, PostgreSQL, Redis, and AWS. Building and operating a production multi-agent AI platform on OpenClaw, orchestrating specialized LLM agents for marketing automation, content generation, and SaaS operations.",
        tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "AI/LLM", "OpenClaw"],
      },
      {
        date: "OCT 2023 — JAN 2026",
        role: "Full Stack Engineer",
        company: "D3",
        companyUrl: "https://d3.com/",
        location: "Las Vegas, NV, USA",
        description:
          "Led full-stack development of a digital identity platform, designing and shipping scalable applications with complex authentication flows, event-driven processing, and distributed data management. Built end-to-end features across React, TypeScript, NestJS, Kafka, GraphQL, and PostgreSQL with full ownership from architecture to deployment. Drove technical decisions autonomously, defining API contracts, data models, and system integration patterns.",
        tags: ["React", "TypeScript", "NestJS", "GraphQL", "PostgreSQL", "Kafka", "Event-Driven"],
      },
      {
        date: "JUL 2021 — OCT 2023",
        role: "Front End Engineer · Tech Lead",
        company: "Hotmart",
        companyUrl: "https://hotmart.com/",
        description:
          "Tech Lead on the digital education platform serving millions of users globally. Led front-end architecture decisions, mentored engineers, and drove modern development practices across multiple product teams. Architected the company's micro front-end platform using Module Federation. Defined technical standards including ADRs, CI/CD pipelines, and monitoring strategies. Drove the evolution of the company-wide design system.",
        tags: ["React", "Vue.js", "TypeScript", "Redux", "AWS", "Module Federation", "Design Systems"],
      },
      {
        date: "MAY 2019 — JUN 2021",
        role: "Software Engineer",
        company: "Dito CRM",
        companyUrl: "https://dito.com.br/",
        location: "Belo Horizonte, BR",
        description:
          "Full-stack engineer building high-performance CRM web applications with React and serverless backend services on Google Cloud. Developed SPAs focused on performance and component reusability. Integrated serverless backend services using Google Cloud Functions, designing event-driven data pipelines.",
        tags: ["React", "TypeScript", "Redux", "Styled Components", "Google Cloud"],
      },
      {
        date: "NOV 2016 — APR 2019",
        role: "Full Stack Developer",
        company: "Infogest Sistemas",
        companyUrl: "https://www.infogest.com.br/",
        location: "Belo Horizonte, BR",
        description:
          "Delivered full-stack consulting across multiple clients and industries, leading modernization of legacy systems and building greenfield applications. Designed REST and SOAP API integrations, microservices architectures, and data processing pipelines. Led architectural transitions from monolithic to modern service-oriented models.",
        tags: ["Node.js", "Laravel", "Vue.js", "React", "GraphQL", "REST", "Microservices"],
      },
      {
        date: "JAN 2012 — APR 2014",
        role: "Full Stack Developer",
        company: "EVG Sistemas",
        companyUrl: "http://sistemasevg.com.br/",
        description:
          "Application development and technical support for commercial and accounting automation software. Built solutions in Delphi, PHP, and JavaScript.",
        tags: ["Delphi", "PHP", "JavaScript"],
      },
    ],
    footer: {
      cta: "Let's build something extraordinary.",
      email: "wagner.junior30@gmail.com",
      built: "Designed and engineered by Wagner Junior. Built with Next.js and Tailwind CSS.",
    },
  },
  pt: {
    nav: { about: "Sobre", experience: "Experiência" },
    header: {
      title: "Wagner Junior",
      subtitle: "Staff Full Stack Engineer",
      tagline: "Arquiteto e entrego sistemas escaláveis de ponta a ponta — de plataformas de alto tráfego servindo milhões a produtos potencializados por IA que expandem o que é possível.",
      cta: "Entre em contato",
    },
    about: {
      title: "Sobre",
      paragraphs: [
        "Sou Engenheiro Full Stack nível Staff com mais de 14 anos de experiência construindo e escalando aplicações web. Minha especialidade é TypeScript, React e Node.js — entrego rápido, sou dono dos sistemas de ponta a ponta e sou obcecado por experiência do desenvolvedor e qualidade do produto.",
        "Liderei o desenvolvimento full-stack em domínios diversos — de plataformas de identidade digital e arquiteturas orientadas a eventos a produtos edtech servindo milhões de usuários globalmente. Conduzo decisões de arquitetura, mentoro engenheiros, defino padrões técnicos e entrego funcionalidades com total ownership do design ao deploy.",
        "Atualmente, opero minha própria consultoria de engenharia atendendo empresas de tecnologia globais em nível Staff e Senior. Paralelamente, estou construindo uma plataforma de orquestração multi-agente de IA em produção — coordenando agentes LLM especializados para execução autônoma de tarefas, roteamento inteligente de modelos e hardening de segurança.",
        "Prospero em ambientes de alta autonomia e alta velocidade, onde decisões de engenharia moldam diretamente o produto. Meu ponto forte é a interseção entre arquitetura escalável, TypeScript full-stack e automação inteligente.",
      ],
    },
    experience: [
      {
        date: "OUT 2023 — PRESENTE",
        role: "Founder & Staff Engineer",
        company: "Wagner Junior LTDA",
        companyUrl: "https://wagner-junior.dev",
        description:
          "Consultoria de engenharia de software atendendo múltiplas empresas de tecnologia globais como contratado dedicado, operando em nível Staff e Senior com total autonomia técnica. Liderança técnica full-stack em React, TypeScript, Node.js, PostgreSQL, Redis e AWS. Construindo e operando uma plataforma multi-agente de IA em produção com OpenClaw, orquestrando agentes LLM especializados para automação de marketing, geração de conteúdo e operações SaaS.",
        tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "AI/LLM", "OpenClaw"],
      },
      {
        date: "OUT 2023 — JAN 2026",
        role: "Engenheiro Full Stack",
        company: "D3",
        companyUrl: "https://d3.com/",
        location: "Las Vegas, NV, USA",
        description:
          "Liderei o desenvolvimento full-stack de uma plataforma de identidade digital, projetando e entregando aplicações escaláveis com fluxos complexos de autenticação, processamento orientado a eventos e gerenciamento de dados distribuídos. Construí funcionalidades de ponta a ponta com React, TypeScript, NestJS, Kafka, GraphQL e PostgreSQL com total ownership da arquitetura ao deploy. Conduzi decisões técnicas com autonomia, definindo contratos de API, modelos de dados e padrões de integração.",
        tags: ["React", "TypeScript", "NestJS", "GraphQL", "PostgreSQL", "Kafka", "Event-Driven"],
      },
      {
        date: "JUL 2021 — OUT 2023",
        role: "Engenheiro Front End · Tech Lead",
        company: "Hotmart",
        companyUrl: "https://hotmart.com/",
        description:
          "Tech Lead na plataforma de educação digital atendendo milhões de usuários globalmente. Liderei decisões de arquitetura front-end, mentorei engenheiros e impulsionei práticas modernas de desenvolvimento em múltiplos times de produto. Arquitetei a plataforma de micro front-ends da empresa usando Module Federation. Defini padrões técnicos incluindo ADRs, pipelines CI/CD e estratégias de monitoramento. Conduzi a evolução do design system da empresa.",
        tags: ["React", "Vue.js", "TypeScript", "Redux", "AWS", "Module Federation", "Design Systems"],
      },
      {
        date: "MAI 2019 — JUN 2021",
        role: "Engenheiro de Software",
        company: "Dito CRM",
        companyUrl: "https://dito.com.br/",
        location: "Belo Horizonte, BR",
        description:
          "Engenheiro full-stack construindo aplicações web CRM de alta performance com React e serviços backend serverless no Google Cloud. Desenvolvi SPAs com foco em performance e reusabilidade de componentes. Integrei serviços backend serverless usando Google Cloud Functions, projetando pipelines de dados orientados a eventos.",
        tags: ["React", "TypeScript", "Redux", "Styled Components", "Google Cloud"],
      },
      {
        date: "NOV 2016 — ABR 2019",
        role: "Desenvolvedor Full Stack",
        company: "Infogest Sistemas",
        companyUrl: "https://www.infogest.com.br/",
        location: "Belo Horizonte, BR",
        description:
          "Realizei consultoria full-stack para múltiplos clientes e indústrias, liderando modernização de sistemas legados e construindo aplicações greenfield. Projetei integrações de APIs REST e SOAP, arquiteturas de microsserviços e pipelines de processamento de dados. Liderei transições arquiteturais de modelos monolíticos para orientados a serviços modernos.",
        tags: ["Node.js", "Laravel", "Vue.js", "React", "GraphQL", "REST", "Microservices"],
      },
      {
        date: "JAN 2012 — ABR 2014",
        role: "Desenvolvedor Full Stack",
        company: "EVG Sistemas",
        companyUrl: "http://sistemasevg.com.br/",
        description:
          "Desenvolvimento de aplicações e suporte técnico para software de automação comercial e contábil. Construção de soluções em Delphi, PHP e JavaScript.",
        tags: ["Delphi", "PHP", "JavaScript"],
      },
    ],
    footer: {
      cta: "Vamos construir algo extraordinário.",
      email: "wagner.junior30@gmail.com",
      built: "Projetado e desenvolvido por Wagner Junior. Construído com Next.js e Tailwind CSS.",
    },
  },
};
