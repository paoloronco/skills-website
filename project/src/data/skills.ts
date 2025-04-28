import { SkillCategory } from "../types/skill";

export const skillsByCategory: SkillCategory = {
  "Cloud Platforms": [
    {
      name: "Amazon Web Services (AWS)",
      description: "Amazon Web Services infrastructure, services, and best practices",
      level: 92
    },
    {
      name: "Google Cloud Platform (GCP)",
      description: "Google's cloud computing services and infrastructure",
      level: 88
    },
    {
      name: "Microsoft Azure",
      description: "Microsoft's cloud computing platform",
      level: 78
    },
    {
      name: "Cloud Architecture",
      description: "Designing scalable and secure cloud solutions",
      level: 90
    },
    {
      name: "Serverless Computing",
      description: "AWS Lambda, Google Cloud Functions",
      level: 40
    },
    {
      name: "Multi-Cloud Strategy",
      description: "Implementing solutions across multiple cloud providers",
      level: 80
    },
    {
      name: "Cloud Cost Optimization",
      description: "Techniques for optimizing cloud resource costs",
      level: 86
    },
    {
      name: "Cloud Migration",
      description: "Strategies for migrating applications to the cloud",
      level: 85
    },
    {
      name: "Proxmox",
      description: "Proxmox virtualization platform",
      level: 90
    },
    {
      name: "VMware ESXi",
      description: "VMware virtualization platform",
      level: 90
    },
    {
      name: "Microsoft Hyper-v",
      description: "Microsoft Hyper-v virtualization platform",
      level: 90
    },
  ],
  "Security": [
    {
      name: "Cloud Security",
      description: "Securing cloud environments and applications",
      level: 95
    },
    {
      name: "Cybersecurity",
      description: "Protection of computer systems from information disclosure",
      level: 90
    },
    {
      name: "Vulnerability Assessment",
      description: "Identifying and analyzing security vulnerabilities",
      level: 92
    },
    {
      name: "Penetration Testing",
      description: "Simulated attacks to evaluate system security",
      level: 88
    },
    {
      name: "Security Compliance",
      description: "Ensuring systems meet regulatory requirements",
      level: 87
    },
    {
      name: "Identity & Access Management",
      description: "IAM solutions across cloud platforms",
      level: 91
    },
    {
      name: "Network Security",
      description: "Protecting network infrastructure and data",
      level: 89
    },
    {
      name: "Encryption",
      description: "Data encryption at rest and in transit",
      level: 60
    },
    {
      name: "Security Architecture",
      description: "Designing secure systems and applications",
      level: 90
    },
    {
      name: "Threat Intelligence",
      description: "Analysis of security threats and vulnerabilities",
      level: 86
    },
    {
      name: "Incident Response",
      description: "Handling and mitigating security incidents",
      level: 88
    },
    {
      name: "SIEM Solutions",
      description: "Security Information and Event Management solutions",
      level: 88
    },
    {
      name: "OSINT",
      description: "Open Source Intelligence gathering and analysis",
      level: 88
    },
  ],
  "Networking": [
    {
      name: "Virtual Private Cloud",
      description: "VPC design and implementation across cloud platforms",
      level: 90
    },
    {
      name: "DNS Management",
      description: "Domain name system architecture and management",
      level: 85
    },
    {
      name: "CDN Implementation",
      description: "Content delivery network configuration and optimization",
      level: 83
    },
    {
      name: "API Gateway",
      description: "API management and security implementation",
      level: 88
    },
    {
      name: "Load Balancing",
      description: "Traffic distribution and high availability solutions",
      level: 91
    },
    {
      name: "Network Protocols",
      description: "HTTP/S, TCP/IP, UDP, and other networking protocols",
      level: 87
    },
    {
      name: "Zero Trust Networking",
      description: "Implementation of zero trust security models",
      level: 85
    },
    {
      name: "VPN Solutions",
      description: "Site-to-site and client VPN implementations",
      level: 82
    },
    {
      name: "PfSense",
      description: "PfSense firewall and routing solutions",
      level: 82
    },
  ],
  "DevOps": [
    {
      name: "CI/CD Pipelines",
      description: "Continuous integration and deployment automation",
      level: 65
    },
    {
      name: "Infrastructure as Code",
      description: "Terraform, CloudFormation, ARM Templates",
      level: 70
    },
    {
      name: "Docker",
      description: "Container technology for application packaging",
      level: 90
    },
    {
      name: "Monitoring & Logging",
      description: "ELK Stack, Prometheus, Grafana implementation",
      level: 86
    },
  ],

  "Automation": [
    {
      name: "Event-Driven Automation",
      description: "Systems responding to triggers and events",
      level: 86
    },
    {
      name: "Make.com Automation [formerly Integromat]",
      description: "Worflows and automations using Make.com",
      level: 86
    },
    {
      name: "n8n Automation",
      description: "Worflows and automations using n8n",
      level: 86
    },
    {
      name: "Process Automation",
      description: "Workflow automation and orchestration",
      level: 84
    },
    {
      name: "Serverless Workflows",
      description: "Designing event-driven serverless processes",
      level: 88
    },
  ],
  "Infrastructure": [
    {
      name: "Scalable Architecture",
      description: "Designing systems that scale efficiently",
      level: 91
    },
    {
      name: "High Availability",
      description: "Implementing redundant, fault-tolerant systems",
      level: 89
    },
    {
      name: "Disaster Recovery",
      description: "Planning and implementing DR strategies",
      level: 90
    },
    {
      name: "Hybrid Cloud",
      description: "Solutions combining on-premise and cloud resources",
      level: 87
    },
    {
      name: "Containers",
      description: "Container technologies beyond Docker",
      level: 85
    },
    {
      name: "Infrastructure Monitoring",
      description: "Tools and techniques for infrastructure visibility",
      level: 88
    },
    {
      name: "Linux",
      description: "Linux OS administration (Ubuntu, Debian, Rhel, Proxmox)",
      level: 88
    },
  ],
  "Analytics": [
    {
      name: "Log Analysis",
      description: "Extracting insights from system and application logs",
      level: 86
    },
    {
      name: "Performance Analysis",
      description: "Evaluating and optimizing system performance",
      level: 85
    },
    {
      name: "Security Analytics",
      description: "Analyzing data for security insights",
      level: 89
    },
    {
      name: "Monitoring Systems",
      description: "Setting up comprehensive monitoring solutions",
      level: 88
    },
  ],
  "Programming": [
    {
      name: "Python",
      description: "General-purpose programming and automation",
      level: 55
    },
    {
      name: "HTML/CSS",
      description: "Web development and design",
      level: 90
    },
    {
      name: "Android Development",
      description: "Android app development using Java and Kotlin",
      level: 90
    },
  ],
  "Other": [
    {
      name: "Hardware",
      description: "Computer hardware assembly and troubleshooting",
      level: 99
    },
    {
      name: "Throubleshooting",
      description: "General troubleshooting skills",
      level: 99
    },
    {
      name: "Problem Solving",
      description: "Problem-solving skills",
      level: 99
    },
    {
      name: "Accounting",
      description: "Accounting and financial",
      level: 60
    },
    {
      name: "Law",
      description: "Law and legal knowledge",
      level: 50
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
      name: "Teamwork",
      description: "Teamwork and collaboration skills",
      level: 70
    },
    {
      name: "Vibe Coding",
      description: "AI Vibe Coding",
      level: 100
    },
  ]
};