import { SkillCategory } from "../types/skill";

const baseSkills: SkillCategory = {
  "Cloud Platforms & Architecture": [
    {
      name: "Google Cloud Platform",
      description: "Google's cloud computing services and infrastructure",
      handsOn: true,
      level: 85
    },
    {
      name: "Amazon Web Services",
      description: "Amazon Web Services infrastructure, services, and best practices",
      handsOn: true,
      level: 75
    },
    {
      name: "Microsoft Azure",
      description: "Microsoft's cloud computing platform",
      level: 65
    },
    {
      name: "Oracle Cloud Infrastructure",
      description: "Compute, networking, storage, and database services on Oracle Cloud",
      handsOn: true,
      level: 85
    },
    {
      name: "Cloud Architecture",
      description: "Designing scalable and secure cloud solutions",
      level: 85
    },
    {
      name: "Multi-Cloud Strategy",
      description: "Implementing solutions across multiple cloud providers",
      level: 75
    },
    {
      name: "Cloud Migration",
      description: "Strategies for migrating applications to the cloud",
      level: 85
    },
    {
      name: "Cloud Cost Optimization",
      description: "Techniques for optimizing cloud resource costs",
      level: 85
    },
    {
      name: "Serverless Computing",
      description: "AWS Lambda, Google Cloud Functions",
      level: 85
    },
    {
      name: "Infrastructure as a Service",
      description: "Provisioning and managing cloud-hosted compute, storage, and networking (Compute Engine, AWS EC2, Azure VMs)",
      level: 90
    },
    {
      name: "Platform as a Service",
      description: "PaaS solutions on major cloud platforms (App Engine, Cloud Run, Vercel, Heroku, Railway, Render)",
      level: 90
    },
    {
      name: "Software as a Service",
      description: "Delivering and integrating ready-to-use applications via the cloud (Microsoft 365, Google Workspace, Slack, Zoom)",
      level: 90
    },
    {
      name: "Hybrid Cloud",
      description: "Solutions combining on-premise and cloud resources",
      level: 85
    },
    {
      name: "Proxmox Virtual Environment",
      description: "Proxmox virtualization platform",
      handsOn: true,
      level: 99
    },
    {
      name: "VMware ESXi",
      description: "VMware virtualization platform",
      level: 65
    }
  ],
  "Security & Zero Trust": [
    {
      name: "Cybersecurity",
      description: "Protection of computer systems from information disclosure",
      level: 99
    },
    {
      name: "Security Architecture",
      description: "Designing secure systems and applications",
      level: 90
    },
    {
      name: "Cloud Security",
      description: "Securing cloud environments and applications",
      level: 90
    },
    {
      name: "Zero Trust Security",
      description: "Identity, network, and data controls aligned to Zero Trust principles",
      handsOn: true,
      handsOn: true,
      level: 86,
      subSkills: ["Cloudflare Zero Trust", "Cloudflare Tunnels & Access"]
    },
    {
      name: "Identity & Access Management (IAM)",
      description: "IAM solutions across cloud platforms",
      handsOn: true,
      level: 80,
      subSkills: ["AWS IAM", "Azure AD", "Google Cloud IAM", "Domain Controller (AD DS)","SSO", "FreeIPA"]
    },
    {
      name: "CSPM",
      description: "Cloud Security Posture Management",
      handsOn: true,
      level: 90,
      subSkills: ["Wiz", "SentinelOne"]
    },
    {
      name: "CNAPP Platforms",
      description: "Combining CNAPP blueprints with Wiz to secure build pipelines, cloud runtime, and compliance.",
      level: 90,
      handsOn: true,
      subSkills: ["CNAPP Strategy", "Wiz (CNAPP)"]
    },
    {
      name: "SIEM Platforms",
      description: "Design, onboarding and detection engineering on Splunk Enterprise Security and Wazuh SIEM/XDR.",
      level: 70,
      handsOn: true,
      subSkills: ["Splunk (SIEM)", "Wazuh (SIEM/XDR)"]
    },
    {
      name: "SOAR",
      description: "Security Orchestration, Automation and Response",
      level: 60
    },
    {
      name: "EDR/XDR",
      description: "Endpoint/Extended Detection and Response",
      level: 70,
      subSkills: ["CrowdStrike Falcon"]
    },
    {
      name: "Threat & Vulnerability Management",
      description: "Triage, prioritization and remediation",
      level: 80
    },
    {
      name: "Vulnerability Assessment",
      description: "Identifying and analyzing security vulnerabilities",
      level: 65
    },
    {
      name: "Penetration Testing",
      description: "Simulated attacks to evaluate system security",
      level: 65
    },
    {
      name: "Threat Intelligence",
      description: "Analysis of security threats and vulnerabilities",
      level: 85
    },
    {
      name: "Incident Response",
      description: "Handling and mitigating security incidents",
      level: 80
    },
    {
      name: "Risk Management",
      description: "Identification, analysis and treatment of risks",
      level: 60
    },
    {
      name: "Security Compliance",
      description: "Ensuring systems meet regulatory requirements",
      level: 60
    },
    {
      name: "OSINT",
      description: "Open Source Intelligence gathering and analysis",
      level: 65
    },
    {
      name: "Hardening",
      description: "System and network hardening baselines and benchmarks",
      level: 70
    },
    {
      name: "Cryptography",
      description: "Concepts and practices of applied cryptography",
      level: 60
    }
  ],
  "Networking & Edge": [
    {
      name: "Network Protocols",
      description: "HTTP/S, TCP/IP, UDP, and other networking protocols",
      level: 80
    },
    {
      name: "TCP/IP Fundamentals",
      description: "OSI/TCP-IP, subnetting and diagnostics",
      level: 80
    },
    {
      name: "Routing & Switching",
      description: "Static/dynamic routing, VLAN and STP",
      level: 80,
      subSkills: ["PfSense", "Ubiquiti Networks"]
    },
    {
      name: "Firewall",
      description: "Policy management, NAT and UTM/NGFW",
      handsOn: true,
      level: 90,
      subSkills: ["PfSense", "Ubiquiti Networks","Cloudflare Firewall", "Cloudflare WAF", "FortiGate Firewall"]
    },
    {
      name: "Virtual Private Cloud",
      description: "VPC design and implementation across cloud platforms",
      level: 90
    },
    {
      name: "Zero Trust Networking",
      description: "Identity-aware network segmentation leveraging Cloudflare One services",
      level: 85,
      subSkills: ["Cloudflare Zero Trust", "Cloudflare Tunnels & Access", "Cloudflare Workers & Pages"]
    },
    {
      name: "VPN Solutions",
      description: "Site-to-site and client VPN implementations",
      level: 80
    },
    {
      name: "Load Balancing",
      description: "Traffic distribution and high availability solutions",
      level: 90
    },
    {
      name: "API Gateway",
      description: "API management and security implementation",
      level: 85
    },
    {
      name: "CDN Implementation",
      description: "Content delivery network configuration and optimization",
      level: 80,
      subSkills: ["Cloudflare CDN", "Cache Rules", "Workers Sites"]
    },
    {
      name: "DNS Management",
      description: "Domain name system architecture and management",
      level: 85,
      subSkills: ["Cloudflare DNS", "Registrar"]
    },
  ],
  "DevOps & Platform Engineering": [
    {
      name: "Docker",
      description: "Container technology for application packaging",
      handsOn: true,
      level: 95
    },
    {
      name: "Git",
      description: "Version control with Git",
      handsOn: true,
      level: 90
    },
    {
      name: "GitHub",
      description: "Collaboration, workflow automation, and CI/CD with GitHub",
      handsOn: true,
      level: 90
    },
    {
      name: "Infrastructure as Code",
      description: "Terraform, CloudFormation, ARM Templates",
      level: 70
    },
    {
      name: "CI/CD Pipelines",
      description: "Continuous integration and deployment automation",
      handsOn: true,
      level: 70
    },
    {
      name: "Monitoring & Logging",
      description: "Prometheus and Grafana implementation",
      handsOn: true,
      level: 65
    },
    {
      name: "Vercel",
      description: "Vercel deployment and automation",
      handsOn: true,
      level: 70
    }
  ],
  "Automation & Orchestration": [
    {
      name: "Event-Driven Automation",
      description: "Systems responding to triggers and events",
      level: 90
    },
    {
      name: "Process Automation",
      description: "Workflow automation and orchestration",
      level: 90
    },
    {
      name: "Serverless Workflows",
      description: "Designing event-driven serverless processes",
      level: 90
    },
    {
      name: "Low-Code Automation",
      description: "Designing composable automations on Make.com and n8n with API integrations and human-in-the-loop steps.",
      handsOn: true,
      level: 90,
      subSkills: ["Make.com", "n8n"]
    },
    {
      name: "Home Assistant",
      description: "Home automation platform for IoT and smart devices",
      handsOn: true,
      level: 90
    }
  ],
  "Observability & Analytics": [
    {
      name: "Log Analysis",
      description: "Extracting insights from system and application logs",
      handsOn: true,
      level: 85,
      subSkills: ["Google Cloud Logging", "SigNoz", "Graylog"]
    },
    {
      name: "Monitoring Systems",
      description: "Setting up comprehensive monitoring solutions",
      handsOn: true,
      level: 90
    },
    {
      name: "Performance Analysis",
      description: "Evaluating and optimizing system performance",
      level: 85
    },
    {
      name: "Security Analytics",
      description: "Analyzing data for security insights",
      level: 90
    },
    {
      name: "Observability Tooling",
      description: "Hands-on administration of Zabbix, Elastic Stack, Netdata, and Glances for metrics, logs, and real-time alerting.",
      handsOn: true,
      level: 75,
      subSkills: ["Zabbix", "Elastic Stack", "Netdata", "Glances"]
    }
  ],
  "AI & Machine Intelligence": [
    {
      name: "Vector Databases",
      description: "Designing schemas and search flows on Pinecone, Weaviate, and similar vector stores",
      handsOn: true,
      level: 80,
      subSkills: ["Qdrant", "MongoDB Atlas Vector Store"]
    },
    {
      name: "Retrieval-Augmented Generation",
      description: "Knowledge-grounded pipelines for AI assistants",
      handsOn: true,
      level: 85
    },
    {
      name: "MCP",
      description: "Implement and operate MCP servers/clients and tool providers",
      level: 90
    },
    {
      name: "Chatbot Development",
      description: "Design and delivery of conversational AI across channels",
      handsOn: true,
      level: 80
    },
    {
      name: "AI Agent Orchestration",
      description: "Building autonomous AI agents with tools, memory, and guardrails",
      level: 80
    },
    {
      name: "Hugging Face Ecosystem",
      description: "Using Hugging Face models, datasets, Inference Endpoints, and Spaces",
      handsOn: true,
      level: 80
    }
  ],
  "Infrastructure & Operations": [
    {
      name: "Containers",
      description: "Container technologies beyond Docker",
      handsOn: true,
      level: 95,
      subSkills: ["Proxmox LXC", "Cloudflare Containers", "Docker", "Amazon ECS", "Portainer"]
    },
    {
      name: "Linux",
      description: "Linux OS administration (Ubuntu, Debian, Rhel, Proxmox)",
      handsOn: true,
      level: 95,
      subSkills: ["Ubuntu", "Debian", "Red Hat Enterprise Linux"]
    },
    {
      name: "Windows Server Administration",
      description: "AD DS, Group Policy, file/print services, roles and features",
      level: 80,
      subSkills: [
        "GUI Shell & PowerShell",
        "Active Directory (AD)",
        "Remote Desktop Services (RDS)",
        "RAID",
        "Storage Volumes",
        "SMB Services",
        "Print Server",
        "VPN Replication",
        "NTFS",
        "Hyper-V",
        "Disaster Recovery & Business Continuity (DR/BC)"
      ]
    },
    {
      name: "Data Migration",
      description: "Workload and data migrations from onprem to on cloud",
      level: 75
    },
    {
      name: "Infrastructure Monitoring",
      description: "Tools and techniques for infrastructure visibility",
      level: 90
    },
    {
      name: "Business Continuity",
      description: "Impact analysis (BIA), BCP planning and testing",
      level: 70
    },
    {
      name: "Disaster Recovery",
      description: "Planning and implementing DR strategies",
      level: 90
    },
    {
      name: "High Availability",
      description: "Implementing redundant, fault-tolerant systems",
      level: 90
    },
    {
      name: "Scalable Architecture",
      description: "Designing systems that scale efficiently",
      level: 90
    },
    {
      name: "Mail Server Administration",
      description: "Postfix/Exchange; DNS/MX/SPF/DKIM/DMARC",
      level: 75
    }
  ],
  "Software Development & Digital Platforms": [
    {
      name: "HTML/CSS",
      description: "Web development and design",
      level: 90
    },
    {
      name: "Node.js",
      description: "JavaScript runtime environment for backend and full-stack web development",
      level: 40
    },
    {
      name: "Python",
      description: "General-purpose programming and automation",
      level: 40
    },
    {
      name: "Android Development",
      description: "Android app development using Java and Kotlin",
      level: 50
    },
    {
      name: "WordPress",
      description: "Development and customization of WordPress websites and plugins",
      handsOn: true,
      level: 90
    },
    {
      name: "Chrome Extensions Development",
      description: "Design and development of custom Chrome browser extensions",
      handsOn: true,
      level: 80
    },
    {
      name: "Vibe Coding",
      description: "AI Vibe Coding",
      level: 100
    }
  ],
  "Professional & Core Skills": [
    {
      name: "Hardware",
      description: "Computer hardware assembly and troubleshooting",
      level: 100
    },
    {
      name: "Ticketing Systems",
      description: "Ticketing systems and support tools",
      level: 100
    },
    {
      name: "Problem Solving",
      description: "Problem-solving skills",
      level: 100
    },
    {
      name: "Troubleshooting",
      description: "General troubleshooting skills",
      level: 100
    },
    {
      name: "Time Management",
      description: "Time management and prioritization",
      level: 100
    },
    {
      name: "Teamwork",
      description: "Teamwork and collaboration skills",
      level: 100 
    },
    {
      name: "Accounting",
      description: "Accounting and financial",
      level: 30
    },
    {
      name: "Law",
      description: "Law and legal knowledge",
      level: 30
    }
  ]
};

interface SkillTranslation {
  description: string;
  subSkills?: string[];
}

type SkillTranslationEntry = SkillTranslation | string;

const skillTranslationsIt: Record<string, SkillTranslationEntry> = {
  "Google Cloud Platform": "Servizi e infrastrutture cloud di Google per calcolo, storage e AI gestite end-to-end.",
  "Amazon Web Services": "Piattaforma AWS che copre compute, rete, storage e best practice Well-Architected.",
  "Microsoft Azure": "Servizi cloud Microsoft Azure per ambienti ibridi e modernizzazione applicativa.",
  "Oracle Cloud Infrastructure": "Compute, rete, storage e database ottimizzati erogati su Oracle Cloud Infrastructure.",
  "Cloud Architecture": "Progettazione di architetture cloud scalabili, affidabili e sicure.",
  "Multi-Cloud Strategy": "Strategie per orchestrare servizi e dati tra piÃ¹ provider cloud.",
  "Cloud Migration": "Pianificazione e migrazione di workload applicativi verso ambienti cloud.",
  "Cloud Cost Optimization": "Metodologie FinOps per ottimizzare costi e utilizzo delle risorse cloud.",
  "Serverless Computing": "Progettazione di funzioni serverless con AWS Lambda e Google Cloud Functions.",
  "Infrastructure as a Service": "Provisioning di compute, storage e rete su piattaforme IaaS come Compute Engine, EC2 e Azure VM.",
  "Platform as a Service": "Erogazione di applicazioni su PaaS come App Engine, Cloud Run, Vercel, Heroku, Railway e Render.",
  "Software as a Service": "Integrazione e gestione di suite SaaS quali Microsoft 365, Google Workspace, Slack e Zoom.",
  "Hybrid Cloud": "Soluzioni ibride che federano risorse on-premise e cloud pubblico.",
  "Proxmox Virtual Environment": "Virtualizzazione e clustering con Proxmox VE per ambienti self-hosted.",
  "VMware ESXi": "Gestione dell'hypervisor VMware ESXi per infrastrutture virtuali enterprise.",
  "Cybersecurity": "Protezione completa dei sistemi informativi da attacchi e perdita di dati.",
  "Security Architecture": "Progettazione di architetture applicative e infrastrutturali sicure.",
  "Cloud Security": "Implementazione di controlli di sicurezza specifici per ambienti cloud.",
  "Zero Trust Security": "Applicazione dei principi Zero Trust a identitÃ , rete e dati.",
  "Identity & Access Management": "Gestione di accessi, SSO e provisioning su piattaforme IAM multipiattaforma.",
  "CSPM": {
    description: "Cloud Security Posture Management per visibilitÃ  e remediation delle configurazioni.",
    subSkills: ["Wiz", "SentinelOne"]
  },
  "CNAPP Platforms": {
    description: "Strategia CNAPP end-to-end con implementazione di Wiz per copertura agentless, compliance e protezione del runtime.",
    subSkills: ["CNAPP Strategy", "Wiz (CNAPP)"]
  },
  "SIEM Solutions": {
    description: "Implementazione di piattaforme SIEM per raccogliere e correlare eventi di sicurezza."
  },
  "SIEM Platforms": {
    description: "Ingegneria e gestione di Splunk Enterprise Security e Wazuh per onboarding dati, correlazioni e incident response.",
    subSkills: ["Splunk (SIEM)", "Wazuh (SIEM/XDR)"]
  },
  "SOAR": "Orchestrazione e automazione della risposta agli incidenti di sicurezza.",
  "EDR/XDR": {
    description: "Difesa endpoint e detection avanzata tramite soluzioni EDR/XDR.",
    subSkills: ["CrowdStrike Falcon"]
  },
  "Threat & Vulnerability Management": "Triage, prioritizzazione e remediation di vulnerabilitÃ  e minacce.",
  "Vulnerability Assessment": "Assessment continui per individuare e analizzare vulnerabilitÃ .",
  "Penetration Testing": "Test di intrusione controllati per valutare la postura di sicurezza.",
  "Threat Intelligence": "Raccolta e analisi di intelligence sulle minacce emergenti.",
  "Incident Response": "Gestione completa del ciclo di vita degli incidenti di sicurezza.",
  "Risk Management": "Identificazione, analisi e trattamento dei rischi cyber e IT.",
  "Security Compliance": "Allineamento a requisiti normativi e standard di sicurezza.",
  "OSINT": "Raccolta e analisi OSINT per investigazioni e monitoraggio.",
  "Hardening": "Definizione di baseline e hardening per sistemi e reti.",
  "Cryptography": "Applicazione di concetti e pratiche di crittografia applicata.",
  "Network Protocols": "Gestione di protocolli HTTP/S, TCP/IP, UDP e stack di rete correlati.",
  "TCP/IP Fundamentals": "Fondamenti OSI/TCP-IP, subnetting e tecniche di diagnostica.",
  "Routing & Switching": {
    description: "Configurazione di routing statico/dinamico, VLAN e spanning tree.",
    subSkills: ["PfSense", "Ubiquiti Networks"]
  },
  "Firewall": {
    description: "Gestione di policy, NAT, UTM e firewall di nuova generazione.",
    subSkills: ["PfSense", "Ubiquiti Networks"]
  },
  "Virtual Private Cloud": "Design e implementazione di VPC multi-cloud.",
  "Zero Trust Networking": {
    description: "Adozione di modelli Zero Trust con Cloudflare One, tunnel applicativi e servizi edge.",
    subSkills: [
      "Cloudflare Zero Trust",
      "Cloudflare Tunnels & Access",
      "Cloudflare Workers & Pages"
    ]
  },
  "VPN Solutions": "Implementazione di VPN site-to-site e client per accessi sicuri.",
  "Load Balancing": "Distribuzione del traffico e soluzioni di alta disponibilitÃ .",
  "API Gateway": "Gestione e sicurezza delle API tramite gateway dedicati.",
  "CDN Implementation": {
    description: "Configurazione e ottimizzazione delle CDN per contenuti globali.",
    subSkills: ["Cloudflare CDN", "Cache Rules", "Workers Sites"]
  },
  "DNS Management": {
    description: "Gestione di architetture DNS e record mission-critical.",
    subSkills: ["Cloudflare DNS", "Registrar"]
  },
  "PfSense": "Firewalling e routing professionale con pfSense.",
  "Ubiquiti Networks": "Progettazione e gestione di reti UniFi cablate e wireless.",
  "Docker": "Containerizzazione di applicazioni con Docker e best practice sulle immagini.",
  "Git": "Versionamento collaborativo e workflow basati su Git.",
  "GitHub": "Automazione, collaborazione e CI/CD orchestrati su GitHub.",
  "Infrastructure as Code": "Provisioning con Terraform, CloudFormation e template ARM.",
  "CI/CD Pipelines": "Automazione di build, test e deploy tramite pipeline CI/CD.",
  "Monitoring & Logging": "Stack Prometheus e Grafana per metriche e osservabilitÃ .",
  "Vercel": "Deployment e automazione edge di applicazioni su Vercel.",
  "Event-Driven Automation": "Automazioni guidate da eventi e trigger in tempo reale.",
  "Process Automation": "Orchestrazione di workflow e processi digitali.",
  "Serverless Workflows": "Progettazione di workflow serverless orchestrati.",
  "Low-Code Automation": {
    description: "Automazioni low-code evolute su Make.com e n8n con orchestrazione di API e workflow human-in-the-loop.",
    subSkills: ["Make.com", "n8n"]
  },
  "Home Assistant": "Automazione domestica e IoT con Home Assistant.",
  "Log Analysis": {
    description: "Analisi di log applicativi e di sistema per insight operativi.",
    subSkills: ["Google Cloud Logging", "SigNoz", "Graylog"]
  },
  "Monitoring Systems": "Implementazione di soluzioni di monitoraggio end-to-end.",
  "Performance Analysis": "Valutazione e ottimizzazione delle prestazioni di sistemi e app.",
  "Security Analytics": "Analisi dei dati per individuare pattern e segnali di minaccia.",
  "Observability Tooling": {
    description: "Gestione di Zabbix, Elastic Stack, Netdata e Glances per metriche, log e alerting real-time.",
    subSkills: ["Zabbix", "Elastic Stack", "Netdata", "Glances"]
  },
  "Vector Databases": {
    description: "Progettazione di schemi e ricerche su Pinecone, Weaviate e database vettoriali affini.",
    subSkills: ["Qdrant", "MongoDB Atlas Vector Store"]
  },
  "Retrieval-Augmented Generation": "Pipeline RAG per assistenti AI contestualizzati.",
  "MCP": "Implementazione di server/client MCP e provider di strumenti.",
  "Chatbot Development": "Design e delivery di chatbot multicanale.",
  "AI Agent Orchestration": "Costruzione di agenti autonomi con strumenti, memoria e guardrail.",
  "Hugging Face Ecosystem": "Uso di modelli, dataset, Inference Endpoints e Spaces di Hugging Face.",
  "Containers": {
    description: "Tecnologie container oltre Docker per ambienti enterprise.",
    subSkills: ["Proxmox LXC", "Cloudflare Containers", "Docker", "Amazon ECS", "Portainer"]
  },
  "Linux": {
    description: "Amministrazione Linux (Ubuntu, Debian, RHEL, Proxmox).",
    subSkills: ["Ubuntu", "Debian", "Red Hat Enterprise Linux"]
  },
  "Windows Server Administration": {
    description: "Gestione di AD DS, Group Policy e ruoli server Windows.",
    subSkills: [
      "GUI Shell & PowerShell",
      "Active Directory (AD)",
      "Remote Desktop Services (RDS)",
      "RAID",
      "Storage Volumes",
      "SMB Services",
      "Print Server",
      "VPN Replication",
      "NTFS",
      "Hyper-V",
      "Disaster Recovery & Business Continuity (DR/BC)"
    ]
  },
  "Data Migration": "Migrazione di workload e dati dall'on-premise al cloud.",
  "Infrastructure Monitoring": "Strumenti e tecniche per l'osservabilitÃ  dell'infrastruttura.",
  "Business Continuity": "Business Impact Analysis e piani BCP con relativi test.",
  "Disaster Recovery": "Strategie e runbook di Disaster Recovery.",
  "High Availability": "Architetture ridondanti e tolleranti ai guasti.",
  "Scalable Architecture": "Progettazione di sistemi che scalano efficacemente.",
  "Mail Server Administration": "Gestione di Postfix/Exchange e record DNS/MX/SPF/DKIM/DMARC.",
  "HTML/CSS": "Sviluppo e design di interfacce web con HTML e CSS moderni.",
  "Node.js": "Backend e full-stack development su runtime Node.js.",
  "Python": "Scripting e automazioni general-purpose in Python.",
  "Android Development": "Sviluppo di app Android in Java e Kotlin.",
  "WordPress": "Sviluppo e personalizzazione di siti e plugin WordPress.",
  "Chrome Extensions": "Progettazione di estensioni personalizzate per Chrome.",
  "Vibe Coding": "Sperimentazione creativa guidata dall'AI con Vibe Coding.",
  "Hardware": "Assemblaggio e troubleshooting hardware di PC e server.",
  "Ticketing Systems": "Gestione di ticket e strumenti di supporto tecnico.",
  "Problem Solving": "Problem solving strutturato per scenari tecnologici complessi.",
  "Troubleshooting": "Diagnostica trasversale su sistemi, reti e applicazioni.",
  "Time Management": "Gestione del tempo e delle prioritÃ .",
  "Teamwork": "Collaborazione efficace in team multidisciplinari.",
  "Accounting": "Competenze base di contabilitÃ  e processi finanziari.",
  "Law": {
    description: "Conoscenze di base legali inerenti al settore IT."
  }
};

Object.values(baseSkills).forEach(skillList => {
  skillList.forEach(skill => {
    const translationEntry = skillTranslationsIt[skill.name];
    if (translationEntry) {
      const translation = typeof translationEntry === 'string'
        ? { description: translationEntry }
        : translationEntry;
      skill.translations = {
        ...(skill.translations ?? {}),
        it: {
          ...(skill.translations?.it ?? {}),
          description: translation.description,
          ...(translation.subSkills ? { subSkills: translation.subSkills } : {})
        }
      };
    }
  });
});

const orderedCategories = [
  "Security & Zero Trust",
  "Cloud Platforms & Architecture",
  "Networking & Edge",
  "DevOps & Platform Engineering",
  "Automation & Orchestration",
  "Observability & Analytics",
  "AI & Machine Intelligence",
  "Infrastructure & Operations",
  "Software Development & Digital Platforms",
  "Professional & Core Skills"
] as const;

export const skillsByCategory: SkillCategory = orderedCategories.reduce((acc, key) => {
  acc[key] = baseSkills[key];
  return acc;
}, {} as SkillCategory);

