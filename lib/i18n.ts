interface ExperienceEntry {
  date: string;
  role: string;
  company: string;
  location?: string;
  description: string;
  tags: string[];
}

export interface Translations {
  nav: { about: string; experience: string };
  header: { title: string; tagline: string };
  about: string[];
  experience: ExperienceEntry[];
  footer: string;
}

export const translations: Record<"en" | "pt", Translations> = {
  en: {
    nav: { about: "About", experience: "Experience" },
    header: {
      title: "Staff Full Stack Engineer",
      tagline:
        "I ship fast, own systems end-to-end, and obsess over developer experience and product quality.",
    },
    about: [
      "Staff-level Full Stack Engineer with 14+ years of experience building and scaling web applications in TypeScript, React, and Node.js. I ship fast, own systems end-to-end, and obsess over developer experience and product quality.",
      "Currently working as a Staff Engineer, leading full-stack development across Node.js, React, TypeScript, PostgreSQL, Redis, and AWS. Alongside that, I'm building a production multi-agent AI orchestration platform that coordinates specialized LLM agents for autonomous task execution, handling intelligent model routing, session lifecycle management, and security hardening across multiple agent roles.",
      "Throughout my career I've consistently taken on technical leadership roles, driving architecture decisions, mentoring engineers, defining standards (ADRs, CI/CD, design systems), and shipping products used by millions. I'm deeply invested in the intersection of software engineering and AI, actively building expertise in LLM orchestration, agent architectures, and AI-powered product features.",
      "I thrive in high-autonomy, high-velocity environments where engineering decisions directly shape the product. My sweet spot is the intersection of full-stack TypeScript, scalable architecture, and intelligent automation.",
    ],
    experience: [
      {
        date: "OCT 2023 — PRESENT",
        role: "Founder",
        company: "Wagner Junior LTDA",
        description:
          "Software engineering consultancy serving multiple global tech companies as a dedicated contractor, operating at Staff and Senior level with full technical autonomy. Full-stack technical leadership across multiple projects using React, TypeScript, Node.js, PostgreSQL, Redis, and AWS. Architecture design, technical standards definition, and code reviews across distributed teams. Operating a production multi-agent AI platform built on OpenClaw, orchestrating specialized LLM agents for marketing automation, content generation, and SaaS operations.",
        tags: [
          "React",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Redis",
          "AWS",
          "AI/LLM",
          "OpenClaw",
        ],
      },
      {
        date: "OCT 2023 — JAN 2026",
        role: "Fullstack Developer",
        company: "D3",
        location: "Las Vegas, NV, USA",
        description:
          "Led full-stack development of decentralized identity and tokenized domain solutions, shipping production features across React, TypeScript, NestJS, Kafka, GraphQL, and PostgreSQL in a fast-paced startup environment. Designed and shipped scalable web applications for blockchain-based digital identity, handling secure authentication flows and tokenized domain management. Built end-to-end features with full ownership from architecture to deployment. Drove technical decisions autonomously, defining API contracts, data models, and system integration patterns across the platform.",
        tags: [
          "React",
          "TypeScript",
          "NestJS",
          "GraphQL",
          "PostgreSQL",
          "Kafka",
          "Blockchain",
        ],
      },
      {
        date: "JUL 2021 — OCT 2023",
        role: "Front End Developer",
        company: "Hotmart",
        description:
          "Tech Lead on the digital education platform serving millions of users globally. Led front-end architecture decisions, mentored engineers, and drove the adoption of modern development practices across multiple product teams. Collaborated on the architecture and implementation of the company's micro front-end platform using Module Federation. Defined and enforced technical standards including ADRs, CI/CD pipelines (Jenkins, Drone), and monitoring strategies (Sentry, New Relic). Drove the evolution of the company-wide design system. Built and shipped features using React, Vue.js, TypeScript, Redux, and integrated AWS services (S3, CloudFront). Delivered internationalization (i18n) support across the platform.",
        tags: [
          "React",
          "Vue.js",
          "TypeScript",
          "Redux",
          "Jest",
          "Cypress",
          "AWS",
          "Module Federation",
          "Jenkins",
        ],
      },
      {
        date: "MAY 2019 — JUN 2021",
        role: "Software Engineer",
        company: "Dito CRM",
        location: "Belo Horizonte, BR",
        description:
          "Full-stack engineer building high-performance CRM web applications with React and serverless backend services on Google Cloud. Developed SPAs with React, TypeScript, Redux, and Styled Components, focused on performance and component reusability. Integrated serverless backend services using Google Cloud Functions, designing event-driven data pipelines. Contributed to the evolution of the company's design system, establishing shared component libraries and documentation standards.",
        tags: [
          "React",
          "TypeScript",
          "Redux",
          "Styled Components",
          "Google Cloud Functions",
        ],
      },
      {
        date: "NOV 2016 — APR 2019",
        role: "Fullstack Developer",
        company: "Infogest Sistemas",
        location: "Belo Horizonte, BR",
        description:
          "Delivered full-stack consulting across multiple clients and industries, leading modernization of legacy systems and building greenfield applications. Built web applications and refactored legacy systems using Node.js, React, Vue.js, Laravel, and GraphQL. Designed REST and SOAP API integrations, microservices architectures, and data processing pipelines. Led architectural transitions from monolithic to modern service-oriented models for enterprise clients.",
        tags: [
          "Node.js",
          "Laravel",
          "Vue.js",
          "React",
          "PHP",
          "GraphQL",
          "REST",
          "Microservices",
        ],
      },
      {
        date: "JAN 2012 — APR 2014",
        role: "Fullstack Developer",
        company: "EVG Sistemas",
        description:
          "Customer service providing technical support and assistance in the use of commercial and accounting automation software. Application development in Delphi, PHP, and Vanilla JS.",
        tags: ["Delphi", "PHP", "JavaScript"],
      },
    ],
    footer: "Built with Next.js and Tailwind CSS, deployed with Vercel.",
  },
  pt: {
    nav: { about: "Sobre", experience: "Experiência" },
    header: {
      title: "Staff Full Stack Engineer",
      tagline:
        "Entrego rápido, sou dono dos sistemas de ponta a ponta e sou obcecado por experiência do desenvolvedor e qualidade do produto.",
    },
    about: [
      "Engenheiro Full Stack nível Staff com mais de 14 anos de experiência construindo e escalando aplicações web em TypeScript, React e Node.js. Entrego rápido, sou dono dos sistemas de ponta a ponta e sou obcecado por experiência do desenvolvedor e qualidade do produto.",
      "Atualmente trabalho como Staff Engineer, liderando desenvolvimento full-stack em Node.js, React, TypeScript, PostgreSQL, Redis e AWS. Paralelamente, estou construindo uma plataforma de orquestração multi-agente de IA em produção que coordena agentes LLM especializados para execução autônoma de tarefas, com roteamento inteligente de modelos, gerenciamento de ciclo de vida de sessões e hardening de segurança.",
      "Ao longo da minha carreira, assumi consistentemente papéis de liderança técnica, conduzindo decisões de arquitetura, mentorando engenheiros, definindo padrões (ADRs, CI/CD, design systems) e entregando produtos usados por milhões. Estou profundamente investido na interseção entre engenharia de software e IA, construindo expertise em orquestração de LLMs, arquiteturas de agentes e funcionalidades de produto potencializadas por IA.",
      "Prospero em ambientes de alta autonomia e alta velocidade, onde decisões de engenharia moldam diretamente o produto. Meu ponto forte é a interseção entre TypeScript full-stack, arquitetura escalável e automação inteligente.",
    ],
    experience: [
      {
        date: "OUT 2023 — PRESENTE",
        role: "Founder",
        company: "Wagner Junior LTDA",
        description:
          "Consultoria de engenharia de software atendendo múltiplas empresas de tecnologia globais como contratado dedicado, operando em nível Staff e Senior com total autonomia técnica. Liderança técnica full-stack em múltiplos projetos usando React, TypeScript, Node.js, PostgreSQL, Redis e AWS. Design de arquitetura, definição de padrões técnicos e code reviews em times distribuídos. Operando uma plataforma multi-agente de IA em produção construída com OpenClaw, orquestrando agentes LLM especializados para automação de marketing, geração de conteúdo e operações SaaS.",
        tags: [
          "React",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Redis",
          "AWS",
          "AI/LLM",
          "OpenClaw",
        ],
      },
      {
        date: "OUT 2023 — JAN 2026",
        role: "Desenvolvedor Fullstack",
        company: "D3",
        location: "Las Vegas, NV, USA",
        description:
          "Liderei o desenvolvimento full-stack de soluções de identidade descentralizada e domínios tokenizados, entregando funcionalidades em produção com React, TypeScript, NestJS, Kafka, GraphQL e PostgreSQL em um ambiente de startup de ritmo acelerado. Projetei e entreguei aplicações web escaláveis para identidade digital baseada em blockchain, gerenciando fluxos de autenticação segura e gerenciamento de domínios tokenizados. Construí funcionalidades de ponta a ponta com total ownership, da arquitetura ao deploy. Conduzi decisões técnicas com autonomia, definindo contratos de API, modelos de dados e padrões de integração de sistemas.",
        tags: [
          "React",
          "TypeScript",
          "NestJS",
          "GraphQL",
          "PostgreSQL",
          "Kafka",
          "Blockchain",
        ],
      },
      {
        date: "JUL 2021 — OUT 2023",
        role: "Desenvolvedor Front End",
        company: "Hotmart",
        description:
          "Tech Lead na plataforma de educação digital atendendo milhões de usuários globalmente. Liderei decisões de arquitetura front-end, mentorei engenheiros e impulsionei a adoção de práticas modernas de desenvolvimento em múltiplos times de produto. Colaborei na arquitetura e implementação da plataforma de micro front-ends da empresa usando Module Federation. Defini e apliquei padrões técnicos incluindo ADRs, pipelines CI/CD (Jenkins, Drone) e estratégias de monitoramento (Sentry, New Relic). Conduzi a evolução do design system da empresa. Construí e entreguei funcionalidades usando React, Vue.js, TypeScript, Redux e serviços AWS integrados (S3, CloudFront). Entreguei suporte a internacionalização (i18n) na plataforma.",
        tags: [
          "React",
          "Vue.js",
          "TypeScript",
          "Redux",
          "Jest",
          "Cypress",
          "AWS",
          "Module Federation",
          "Jenkins",
        ],
      },
      {
        date: "MAI 2019 — JUN 2021",
        role: "Engenheiro de Software",
        company: "Dito CRM",
        location: "Belo Horizonte, BR",
        description:
          "Engenheiro full-stack construindo aplicações web CRM de alta performance com React e serviços backend serverless no Google Cloud. Desenvolvi SPAs com React, TypeScript, Redux e Styled Components, com foco em performance e reusabilidade de componentes. Integrei serviços backend serverless usando Google Cloud Functions, projetando pipelines de dados orientados a eventos. Contribuí para a evolução do design system da empresa, estabelecendo bibliotecas de componentes compartilhados e padrões de documentação.",
        tags: [
          "React",
          "TypeScript",
          "Redux",
          "Styled Components",
          "Google Cloud Functions",
        ],
      },
      {
        date: "NOV 2016 — ABR 2019",
        role: "Desenvolvedor Fullstack",
        company: "Infogest Sistemas",
        location: "Belo Horizonte, BR",
        description:
          "Realizei consultoria full-stack para múltiplos clientes e indústrias, liderando a modernização de sistemas legados e construindo aplicações greenfield. Construí aplicações web e refatorei sistemas legados usando Node.js, React, Vue.js, Laravel e GraphQL. Projetei integrações de APIs REST e SOAP, arquiteturas de microsserviços e pipelines de processamento de dados. Liderei transições arquiteturais de modelos monolíticos para orientados a serviços modernos para clientes enterprise.",
        tags: [
          "Node.js",
          "Laravel",
          "Vue.js",
          "React",
          "PHP",
          "GraphQL",
          "REST",
          "Microservices",
        ],
      },
      {
        date: "JAN 2012 — ABR 2014",
        role: "Desenvolvedor Fullstack",
        company: "EVG Sistemas",
        description:
          "Atendimento ao cliente fornecendo suporte técnico e assistência no uso de software de automação comercial e contábil. Desenvolvimento de aplicações em Delphi, PHP e Vanilla JS.",
        tags: ["Delphi", "PHP", "JavaScript"],
      },
    ],
    footer: "Construído com Next.js e Tailwind CSS, implantado com Vercel.",
  },
};
