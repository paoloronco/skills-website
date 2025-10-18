import { SkillCategory } from "../types/skill";

export const skillsByCategory: SkillCategory = {
  "Cloud Platforms": [
    {
      name: "Amazon Web Services (AWS)",
      description: "Amazon Web Services infrastructure, services, and best practices",
      level: 90
    },
    {
      name: "Cloud Architecture",
      description: "Designing scalable and secure cloud solutions",
      level: 90
    },
    {
      name: "Cloud Cost Optimization",
      description: "Techniques for optimizing cloud resource costs",
      level: 85
    },
    {
      name: "Cloud Migration",
      description: "Strategies for migrating applications to the cloud",
      level: 85
    },
    {
      name: "Google Cloud Platform (GCP)",
      description: "Google's cloud computing services and infrastructure",
      level: 90
    },
    {
      name: "Microsoft Azure",
      description: "Microsoft's cloud computing platform",
      level: 80
    },
    {
      name: "Microsoft Hyper-V",
      description: "Microsoft Hyper-V virtualization platform",
      level: 90
    },
    {
      name: "Multi-Cloud Strategy",
      description: "Implementing solutions across multiple cloud providers",
      level: 80
    },
    {
      name: "Proxmox",
      description: "Proxmox virtualization platform",
      level: 90
    },
    {
      name: "Serverless Computing",
      description: "AWS Lambda, Google Cloud Functions",
      level: 40
    },
    {
      name: "VMware ESXi",
      description: "VMware virtualization platform",
      level: 90
    }
  ],
  "Security": [
    {
      name: "Cloud Security",
      description: "Securing cloud environments and applications",
      level: 95
    },
    {
      name: "Cryptography",
      description: "Concepts and practices of applied cryptography",
      level: 70
    },
    {
      name: "CSPM",
      description: "Cloud Security Posture Management",
      level: 80
    },
    {
      name: "Cybersecurity",
      description: "Protection of computer systems from information disclosure",
      level: 90
    },
    {
      name: "EDR/XDR",
      description: "Endpoint/Extended Detection and Response",
      level: 80
    },
    {
      name: "Encryption",
      description: "Data encryption at rest and in transit",
      level: 60
    },
    {
      name: "Ethical Hacking",
      description: "Methodologies and tools for ethical hacking",
      level: 80
    },
    {
      name: "Hardening (OS & Network)",
      description: "System and network hardening baselines and benchmarks",
      level: 80
    },
    {
      name: "Identity & Access Management",
      description: "IAM solutions across cloud platforms",
      level: 90
    },
    {
      name: "Incident Response",
      description: "Handling and mitigating security incidents",
      level: 90
    },
    {
      name: "IR Runbooks",
      description: "Playbooks/Runbooks for Incident Response",
      level: 75
    },
    {
      name: "Network Security",
      description: "Protecting network infrastructure and data",
      level: 90
    },
    {
      name: "OSINT",
      description: "Open Source Intelligence gathering and analysis",
      level: 90
    },
    {
      name: "Penetration Testing",
      description: "Simulated attacks to evaluate system security",
      level: 90
    },
    {
      name: "Risk Management",
      description: "Identification, analysis and treatment of risks",
      level: 75
    },
    {
      name: "Security Architecture",
      description: "Designing secure systems and applications",
      level: 90
    },
    {
      name: "Security Compliance",
      description: "Ensuring systems meet regulatory requirements",
      level: 85
    },
    {
      name: "SIEM Solutions",
      description: "Security Information and Event Management solutions",
      level: 90
    },
    {
      name: "SOAR",
      description: "Security Orchestration, Automation and Response",
      level: 80
    },
    {
      name: "Threat & Vulnerability Management",
      description: "Triage, prioritization and remediation",
      level: 80
    },
    {
      name: "Threat Intelligence",
      description: "Analysis of security threats and vulnerabilities",
      level: 85
    },
    {
      name: "Vulnerability Assessment",
      description: "Identifying and analyzing security vulnerabilities",
      level: 90
    },
    {
      name: "Zero Trust (Cloud)",
      description: "Zero Trust principles applied to identity, network and data in cloud environments",
      level: 80
    }
  ],
  "Networking": [
    {
      name: "API Gateway",
      description: "API management and security implementation",
      level: 90
    },
    {
      name: "CDN Implementation",
      description: "Content delivery network configuration and optimization",
      level: 85
    },
    {
      name: "DNS Management",
      description: "Domain name system architecture and management",
      level: 85
    },
    {
      name: "Firewall Management",
      description: "Policy management, NAT and UTM/NGFW",
      level: 80
    },
    {
      name: "Load Balancing",
      description: "Traffic distribution and high availability solutions",
      level: 90
    },
    {
      name: "Network Protocols",
      description: "HTTP/S, TCP/IP, UDP, and other networking protocols",
      level: 85
    },
    {
      name: "PfSense",
      description: "PfSense firewall and routing solutions",
      level: 80
    },
    {
      name: "Routing & Switching",
      description: "Static/dynamic routing, VLAN and STP",
      level: 80
    },
    {
      name: "TCP/IP Fundamentals",
      description: "OSI/TCP-IP, subnetting and diagnostics",
      level: 80
    },
    {
      name: "Virtual Private Cloud",
      description: "VPC design and implementation across cloud platforms",
      level: 90
    },
    {
      name: "VPN Solutions",
      description: "Site-to-site and client VPN implementations",
      level: 80
    },
    {
      name: "Zero Trust Networking",
      description: "Implementation of zero trust security models",
      level: 85
    }
  ],
  "DevOps": [
    {
      name: "CI/CD Pipelines",
      description: "Continuous integration and deployment automation",
      level: 65
    },
    {
      name: "Docker",
      description: "Container technology for application packaging",
      level: 90
    },
    {
      name: "Infrastructure as Code",
      description: "Terraform, CloudFormation, ARM Templates",
      level: 70
    },
    {
      name: "Monitoring & Logging",
      description: "ELK Stack, Prometheus, Grafana implementation",
      level: 85
    }
  ],
  "Automation": [
    {
      name: "Event-Driven Automation",
      description: "Systems responding to triggers and events",
      level: 85
    },
    {
      name: "Make.com Automation [formerly Integromat]",
      description: "Workflows and automations using Make.com",
      level: 85
    },
    {
      name: "n8n Automation",
      description: "Workflows and automations using n8n",
      level: 85
    },
    {
      name: "Process Automation",
      description: "Workflow automation and orchestration",
      level: 85
    },
    {
      name: "Serverless Workflows",
      description: "Designing event-driven serverless processes",
      level: 90
    }
  ],
  "Infrastructure": [
    {
      name: "Business Continuity",
      description: "Impact analysis (BIA), BCP planning and testing",
      level: 70
    },
    {
      name: "Containers",
      description: "Container technologies beyond Docker",
      level: 85
    },
    {
      name: "Data Migration",
      description: "Workload and data migrations on\u2011prem \u2194 cloud",
      level: 75
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
      name: "Hybrid Cloud",
      description: "Solutions combining on-premise and cloud resources",
      level: 85
    },
    {
      name: "Infrastructure Monitoring",
      description: "Tools and techniques for infrastructure visibility",
      level: 90
    },
    {
      name: "Linux",
      description: "Linux OS administration (Ubuntu, Debian, Rhel, Proxmox)",
      level: 90
    },
    {
      name: "Mail Server Administration",
      description: "Postfix/Exchange; DNS/MX/SPF/DKIM/DMARC",
      level: 75
    },
    {
      name: "Scalable Architecture",
      description: "Designing systems that scale efficiently",
      level: 90
    },
    {
      name: "Windows Server Administration",
      description: "AD DS, Group Policy, file/print services, roles and features",
      level: 80
    }
  ],
  "Analytics": [
    {
      name: "Log Analysis",
      description: "Extracting insights from system and application logs",
      level: 85
    },
    {
      name: "Monitoring Systems",
      description: "Setting up comprehensive monitoring solutions",
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
    }
  ],
  "Programming": [
    {
      name: "Android Development",
      description: "Android app development using Java and Kotlin",
      level: 90
    },
    {
      name: "HTML/CSS",
      description: "Web development and design",
      level: 90
    },
    {
      name: "Node.js",
      description: "JavaScript runtime environment for backend and full\u2011stack web development",
      level: 80
    },
    {
      name: "Python",
      description: "General-purpose programming and automation",
      level: 55
    }
  ],
  "Other": [
    {
      name: "Accounting",
      description: "Accounting and financial",
      level: 60
    },
    {
      name: "Hardware",
      description: "Computer hardware assembly and troubleshooting",
      level: 100
    },
    {
      name: "Law",
      description: "Law and legal knowledge",
      level: 50
    },
    {
      name: "Problem Solving",
      description: "Problem-solving skills",
      level: 100
    },
    {
      name: "Teamwork",
      description: "Teamwork and collaboration skills",
      level: 70
    },
    {
      name: "Throubleshooting",
      description: "General troubleshooting skills",
      level: 100
    },
    {
      name: "Ticketing Systems",
      description: "Ticketing systems and support tools",
      level: 70
    },
    {
      name: "Time Management",
      description: "Time management and prioritization",
      level: 70
    },
    {
      name: "Vibe Coding",
      description: "AI Vibe Coding",
      level: 100
    }
  ]
};
