import type { Translations } from "./types";

export type { Translations } from "./types";
export type { ExperienceEntry } from "./types";

export const translations: Record<"en" | "pt", Translations> = {
  en: {
    nav: { about: "About", experience: "Experience", menu: "Open menu", closeMenu: "Close menu", skipToContent: "Skip to content" },
    header: {
      title: "Wagner Junior",
      subtitle: "Staff Full Stack Engineer",
      tagline: "I architect and ship scalable systems end-to-end — from high-traffic platforms serving millions to AI-powered products that push what's possible.",
      cta: "Get in touch",
    },
    about: {
      title: "About",
      paragraphs: [
        "Staff-level Full Stack Engineer with 14+ years of experience building and scaling web applications in TypeScript, React, and Node.js. I ship fast, own systems end-to-end, and care deeply about developer experience and product quality.",
        "Currently working as a Staff Engineer leading full-stack development across Node.js, React, TypeScript, PostgreSQL, Redis, Kafka, and AWS. I also build and operate production multi-agent AI systems that coordinate specialized LLM agents for autonomous task execution, with intelligent model routing and session lifecycle management across multiple agent roles.",
        "Throughout my career I've consistently taken on technical leadership roles — driving architecture decisions, mentoring engineers, defining standards (ADRs, CI/CD, design systems), and shipping products used by millions. I'm actively building expertise at the intersection of software engineering and AI, focusing on LLM orchestration, agent architectures, and AI-powered product features as a natural extension of my full-stack background.",
        "I work best in high-autonomy, high-velocity environments where engineering decisions directly shape the product. I bring together deep full-stack TypeScript experience, scalable architecture thinking, and hands-on AI/automation skills. Core stack: TypeScript · React · Node.js/Express/NestJS · PostgreSQL · Redis · AWS · Next.js · GraphQL · AI/LLM Integration.",
      ],
    },
    experience: [
      {
        date: "OCT 2023 — PRESENT",
        role: "Staff Full Stack Engineer",
        company: "Stealth Startup",
        description:
          "Staff-level engineer leading full-stack development for a US-based company, owning end-to-end product delivery from architecture through deployment in a fast-paced, high-autonomy, distributed environment. Architecting and shipping product features with React, TypeScript, Node.js/Express/NestJS, PostgreSQL, Redis, SQS, Kafka, and AWS. Leading technical decision-making on API design, data modeling, and system integration patterns. Defining engineering standards including CI/CD pipelines, monitoring strategies, and ADRs. Building production multi-agent orchestration systems that coordinate specialized LLM agents for autonomous task execution, intelligent model routing, and session lifecycle management.",
        tags: ["React", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis", "SQS", "Kafka", "AWS", "AI/LLM"],
      },
      {
        date: "OCT 2023 — JAN 2026",
        role: "Full Stack Developer",
        company: "D3",
        companyUrl: "https://d3.com/",
        location: "Las Vegas, NV",
        description:
          "Led full-stack development of decentralized identity and tokenized domain solutions, shipping production features across React, TypeScript, NestJS, Kafka, GraphQL, and PostgreSQL in a fast-paced startup environment. Designed and shipped scalable web applications for blockchain-based digital identity, handling secure authentication flows and tokenized domain management. Built end-to-end features with full ownership from architecture to deployment. Drove technical decisions autonomously, defining API contracts, data models, and system integration patterns across the platform.",
        tags: ["React", "TypeScript", "NestJS", "GraphQL", "PostgreSQL", "Kafka", "Blockchain", "Web3"],
      },
      {
        date: "JUL 2021 — OCT 2023",
        role: "Front End Developer",
        company: "Hotmart",
        companyUrl: "https://hotmart.com/",
        description:
          "Tech Lead on the digital education platform serving millions of users globally. Led front-end architecture decisions, mentored engineers, and drove the adoption of modern development practices across multiple product teams. Collaborated on the architecture and implementation of the company's micro front-end platform using Module Federation, enabling independent team deployments and reducing release cycle time. Defined and enforced technical standards including ADRs, CI/CD pipelines (Jenkins, Drone), and monitoring strategies (Sentry, New Relic). Drove the evolution of the company-wide design system. Built and shipped features using React, Vue.js, TypeScript, Redux, and integrated AWS services (S3, CloudFront). Delivered internationalization (i18n) support across the platform.",
        tags: ["React", "Vue.js", "TypeScript", "Redux", "AWS", "Module Federation", "Design Systems"],
      },
      {
        date: "MAY 2019 — JUN 2021",
        role: "Software Engineer",
        company: "Dito CRM",
        companyUrl: "https://dito.com.br/",
        location: "Belo Horizonte, BR",
        description:
          "Full-stack engineer building high-performance CRM web applications with React and serverless backend services on Google Cloud. Developed SPAs with React, TypeScript, Redux, and Styled Components, focused on performance and component reusability. Integrated serverless backend services using Google Cloud Functions, designing event-driven data pipelines. Contributed to the evolution of the company's design system, establishing shared component libraries and documentation standards.",
        tags: ["React", "TypeScript", "Redux", "Styled Components", "Google Cloud"],
      },
      {
        date: "NOV 2016 — APR 2019",
        role: "Full Stack Developer",
        company: "Infogest Sistemas",
        companyUrl: "https://www.infogest.com.br/",
        location: "Belo Horizonte, BR",
        description:
          "Delivered full-stack consulting across multiple clients and industries, leading modernization of legacy systems and building greenfield applications. Built web applications and refactored legacy systems using Node.js, React, Vue.js, Laravel, and GraphQL. Designed REST and SOAP API integrations, microservices architectures, and data processing pipelines. Led architectural transitions from monolithic to modern service-oriented models for enterprise clients.",
        tags: ["Node.js", "Laravel", "Vue.js", "React", "GraphQL", "REST", "Microservices"],
      },
      {
        date: "JAN 2012 — APR 2014",
        role: "Full Stack Developer",
        company: "EVG Sistemas",
        companyUrl: "http://sistemasevg.com.br/",
        description:
          "Customer service providing technical support and assistance in the use of commercial and accounting automation software through online chat and telephone. Application development in Delphi, PHP, and Vanilla JS.",
        tags: ["Delphi", "PHP", "Vanilla JS"],
      },
    ],
    footer: {
      cta: "Let's build something extraordinary.",
      email: "wagner.junior30@gmail.com",
      built: "Designed and engineered by Wagner Junior. Built with Next.js and Tailwind CSS.",
    },
    theme: {
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
      switchedToLight: "Switched to light mode",
      switchedToDark: "Switched to dark mode",
    },
    a11y: {
      opensInNewTab: "(opens in new tab)",
      switchedToLanguage: "Switched to English",
    },
  },
  pt: {
    nav: { about: "Sobre", experience: "Experiência", menu: "Abrir menu", closeMenu: "Fechar menu", skipToContent: "Pular para o conteúdo" },
    header: {
      title: "Wagner Junior",
      subtitle: "Staff Full Stack Engineer",
      tagline: "Arquiteto e entrego sistemas escaláveis de ponta a ponta — de plataformas de alto tráfego servindo milhões a produtos potencializados por IA que expandem o que é possível.",
      cta: "Entre em contato",
    },
    about: {
      title: "Sobre",
      paragraphs: [
        "Engenheiro Full Stack nível Staff com mais de 14 anos de experiência construindo e escalando aplicações web em TypeScript, React e Node.js. Entrego rápido, sou dono dos sistemas de ponta a ponta e me importo profundamente com experiência do desenvolvedor e qualidade do produto.",
        "Atualmente atuo como Staff Engineer liderando desenvolvimento full-stack em Node.js, React, TypeScript, PostgreSQL, Redis, Kafka e AWS. Também construo e opero sistemas multi-agente de IA em produção que coordenam agentes LLM especializados para execução autônoma de tarefas, com roteamento inteligente de modelos e gerenciamento do ciclo de vida de sessões entre múltiplos papéis de agente.",
        "Ao longo da minha carreira, assumi consistentemente papéis de liderança técnica — conduzindo decisões de arquitetura, mentorando engenheiros, definindo padrões (ADRs, CI/CD, design systems) e entregando produtos usados por milhões. Estou ativamente construindo expertise na interseção entre engenharia de software e IA, com foco em orquestração de LLMs, arquiteturas de agentes e funcionalidades de produto potencializadas por IA como uma extensão natural do meu background full-stack.",
        "Prospero em ambientes de alta autonomia e alta velocidade, onde decisões de engenharia moldam diretamente o produto. Combino experiência profunda em TypeScript full-stack, pensamento de arquitetura escalável e habilidades práticas em IA/automação. Stack principal: TypeScript · React · Node.js/Express/NestJS · PostgreSQL · Redis · AWS · Next.js · GraphQL · AI/LLM Integration.",
      ],
    },
    experience: [
      {
        date: "OUT 2023 — PRESENTE",
        role: "Staff Full Stack Engineer",
        company: "Stealth Startup",
        description:
          "Engenheiro nível Staff liderando desenvolvimento full-stack para uma empresa americana, assumindo entrega de ponta a ponta do produto, da arquitetura ao deploy, em um ambiente distribuído de alta velocidade e autonomia. Arquitetando e entregando funcionalidades com React, TypeScript, Node.js/Express/NestJS, PostgreSQL, Redis, SQS, Kafka e AWS. Conduzindo decisões técnicas sobre design de APIs, modelagem de dados e padrões de integração de sistemas. Definindo padrões de engenharia incluindo pipelines CI/CD, estratégias de monitoramento e ADRs. Construindo sistemas de orquestração multi-agente em produção que coordenam agentes LLM especializados para execução autônoma de tarefas, roteamento inteligente de modelos e gerenciamento do ciclo de vida de sessões.",
        tags: ["React", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis", "SQS", "Kafka", "AWS", "AI/LLM"],
      },
      {
        date: "OUT 2023 — JAN 2026",
        role: "Desenvolvedor Full Stack",
        company: "D3",
        companyUrl: "https://d3.com/",
        location: "Las Vegas, NV",
        description:
          "Liderei o desenvolvimento full-stack de soluções de identidade descentralizada e domínios tokenizados, entregando funcionalidades em produção com React, TypeScript, NestJS, Kafka, GraphQL e PostgreSQL em um ambiente de startup de alta velocidade. Projetei e entreguei aplicações web escaláveis para identidade digital baseada em blockchain, lidando com fluxos seguros de autenticação e gerenciamento de domínios tokenizados. Construí funcionalidades de ponta a ponta com total ownership da arquitetura ao deploy. Conduzi decisões técnicas com autonomia, definindo contratos de API, modelos de dados e padrões de integração de sistemas em toda a plataforma.",
        tags: ["React", "TypeScript", "NestJS", "GraphQL", "PostgreSQL", "Kafka", "Blockchain", "Web3"],
      },
      {
        date: "JUL 2021 — OUT 2023",
        role: "Desenvolvedor Front End",
        company: "Hotmart",
        companyUrl: "https://hotmart.com/",
        description:
          "Tech Lead na plataforma de educação digital atendendo milhões de usuários globalmente. Liderei decisões de arquitetura front-end, mentorei engenheiros e impulsionei a adoção de práticas modernas de desenvolvimento em múltiplos times de produto. Colaborei na arquitetura e implementação da plataforma de micro front-ends da empresa usando Module Federation, permitindo deploys independentes e reduzindo o ciclo de release. Defini e apliquei padrões técnicos incluindo ADRs, pipelines CI/CD (Jenkins, Drone) e estratégias de monitoramento (Sentry, New Relic). Conduzi a evolução do design system da empresa. Construí e entreguei funcionalidades com React, Vue.js, TypeScript, Redux e serviços AWS integrados (S3, CloudFront). Entreguei suporte a internacionalização (i18n) em toda a plataforma.",
        tags: ["React", "Vue.js", "TypeScript", "Redux", "AWS", "Module Federation", "Design Systems"],
      },
      {
        date: "MAI 2019 — JUN 2021",
        role: "Engenheiro de Software",
        company: "Dito CRM",
        companyUrl: "https://dito.com.br/",
        location: "Belo Horizonte, BR",
        description:
          "Engenheiro full-stack construindo aplicações web CRM de alta performance com React e serviços backend serverless no Google Cloud. Desenvolvi SPAs com React, TypeScript, Redux e Styled Components, com foco em performance e reusabilidade de componentes. Integrei serviços backend serverless usando Google Cloud Functions, projetando pipelines de dados orientados a eventos. Contribuí para a evolução do design system da empresa, estabelecendo bibliotecas de componentes compartilhados e padrões de documentação.",
        tags: ["React", "TypeScript", "Redux", "Styled Components", "Google Cloud"],
      },
      {
        date: "NOV 2016 — ABR 2019",
        role: "Desenvolvedor Full Stack",
        company: "Infogest Sistemas",
        companyUrl: "https://www.infogest.com.br/",
        location: "Belo Horizonte, BR",
        description:
          "Realizei consultoria full-stack para múltiplos clientes e indústrias, liderando modernização de sistemas legados e construindo aplicações greenfield. Construí aplicações web e refatorei sistemas legados usando Node.js, React, Vue.js, Laravel e GraphQL. Projetei integrações de APIs REST e SOAP, arquiteturas de microsserviços e pipelines de processamento de dados. Liderei transições arquiteturais de modelos monolíticos para orientados a serviços modernos para clientes enterprise.",
        tags: ["Node.js", "Laravel", "Vue.js", "React", "GraphQL", "REST", "Microservices"],
      },
      {
        date: "JAN 2012 — ABR 2014",
        role: "Desenvolvedor Full Stack",
        company: "EVG Sistemas",
        companyUrl: "http://sistemasevg.com.br/",
        description:
          "Atendimento ao cliente prestando suporte técnico e assistência no uso de softwares de automação comercial e contábil via chat online e telefone. Desenvolvimento de aplicações em Delphi, PHP e Vanilla JS.",
        tags: ["Delphi", "PHP", "Vanilla JS"],
      },
    ],
    footer: {
      cta: "Vamos construir algo extraordinário.",
      email: "wagner.junior30@gmail.com",
      built: "Projetado e desenvolvido por Wagner Junior. Construído com Next.js e Tailwind CSS.",
    },
    theme: {
      switchToLight: "Mudar para modo claro",
      switchToDark: "Mudar para modo escuro",
      switchedToLight: "Mudou para modo claro",
      switchedToDark: "Mudou para modo escuro",
    },
    a11y: {
      opensInNewTab: "(abre em nova aba)",
      switchedToLanguage: "Idioma alterado para Português",
    },
  },
};
