import { SkillCategory } from "../types/skill";

export const skillsByCategory: SkillCategory = {
  "Cloud Platforms": [
    {
      name: "Google Cloud Platform (GCP)",
      description: "Google's cloud computing services and infrastructure",
      level: 95
    },
    {
      name: "Amazon Web Services (AWS)",
      description: "Amazon Web Services infrastructure, services, and best practices",
      level: 85
    },
    {
      name: "Microsoft Azure",
      description: "Microsoft's cloud computing platform",
      level: 65
    },
    {
      name: "Cloud Architecture",
      description: "Designing scalable and secure cloud solutions",
      level: 90
    },
    {
      name: "Serverless Computing",
      description: "AWS Lambda, Google Cloud Functions",
      level: 90
    },
    {
      name: "Cloud Cost Optimization",
      description: "Techniques for optimizing cloud resource costs",
      level: 80
    },
    {
      name: "Cloud Migration",
      description: "Strategies for migrating applications to the cloud",
      level: 80
    },
    {
      name: "Multi-Cloud Strategy",
      description: "Implementing solutions across multiple cloud providers",
      level: 80
    },
    {
      name: "Proxmox Virtual Environment",
      description: "Proxmox virtualization platform",
      level: 95
    },
    {
      name: "VMware ESXi",
      description: "VMware virtualization platform",
      level: 70
    },
    {
      name: "Zero Trust",
      description: "Zero Trust principles applied to identity, network and data in cloud environments",
      level: 86
    }    
  ],
    "Security": [
    {
      name: "Cybersecurity",
      description: "Protection of computer systems from information disclosure",
      level: 99
    },
    {
      name: "Cloud Security",
      description: "Securing cloud environments and applications",
      level: 95
    },
    {
      name: "CSPM",
      description: "Cloud Security Posture Management",
      level: 90
    },
   {
      name: "SIEM Solutions",
      description: "Security Information and Event Management solutions",
      level: 85
    },
    {
      name: "SOAR",
      description: "Security Orchestration, Automation and Response",
      level: 80
    },
    {
      name: "EDR/XDR",
      description: "Endpoint/Extended Detection and Response",
      level: 75
    },
    {
      name: "Threat & Vulnerability Management",
      description: "Triage, prioritization and remediation",
      level: 85
    },
    {
      name: "Threat Intelligence",
      description: "Analysis of security threats and vulnerabilities",
      level: 85
    },
    {
      name: "Identity & Access Management",
      description: "IAM solutions across cloud platforms",
      level: 85
    },
    {
      name: "Incident Response",
      description: "Handling and mitigating security incidents",
      level: 85
    },
    {
      name: "Network Security",
      description: "Protecting network infrastructure and data",
      level: 85
    },
    {
      name: "Security Architecture",
      description: "Designing secure systems and applications",
      level: 90
    },
    {
      name: "OSINT",
      description: "Open Source Intelligence gathering and analysis",
      level: 70
    },
    {
      name: "Penetration Testing",
      description: "Simulated attacks to evaluate system security",
      level: 65
    },
    {
      name: "Vulnerability Assessment",
      description: "Identifying and analyzing security vulnerabilities",
      level: 65
    },
    {
      name: "Hardening (OS & Network)",
      description: "System and network hardening baselines and benchmarks",
      level: 65
    },
    {
      name: "Cryptography",
      description: "Concepts and practices of applied cryptography",
      level: 60
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
  ],
  "Networking": [
    {
      name: "Network Protocols",
      description: "HTTP/S, TCP/IP, UDP, and other networking protocols",
      level: 85
    },
    {
      name: "TCP/IP Fundamentals",
      description: "OSI/TCP-IP, subnetting and diagnostics",
      level: 85
    },
    {
      name: "Firewall",
      description: "Policy management, NAT and UTM/NGFW",
      level: 90
    },
    {
      name: "Routing & Switching",
      description: "Static/dynamic routing, VLAN and STP",
      level: 80
    },
    {
      name: "Zero Trust Networking",
      description: "Implementation of zero trust security models",
      level: 85
    },
    {
      name: "Virtual Private Cloud",
      description: "VPC design and implementation across cloud platforms",
      level: 90
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
      level: 80
    },
    {
      name: "DNS Management",
      description: "Domain name system architecture and management",
      level: 85
    },
    {
      name: "PfSense",
      description: "PfSense firewall and routing solutions",
      level: 85
    },
    {
      name: "VPN Solutions",
      description: "Site-to-site and client VPN implementations",
      level: 80
    },
    {
      name: "Cloudflare",
      description: "Cloudflare's content delivery network (CDN), DDoS protection, DNS management, and cybersecurity services.",
      level: 90
    },
  ],
  "DevOps": [
    {
      name: "Docker",
      description: "Container technology for application packaging",
      level: 90
    },
    { 
      name: "Git", 
      description: "Version control with Git", 
      level: 90 
    },
    { 
      name: "GitHub", 
      description: "Collaboration, workflow automation, and CI/CD with GitHub", 
      level: 90 
    },
    { 
      name: "Infrastructure as a Service (IaaS)", 
      description: "Provisioning and managing cloud-hosted compute, storage, and networking. (Google Compute Engine, AWS EC2, Azure Virtual Machines", 
      level: 90 
    },
    {
      name: "Platform as a Service (PaaS)",
      description: "PaaS solutions on major cloud platforms (Google App Engine, Google Cloud Run, Vercel, Heroku, Railway, Render, etc",
      level: 90
    },
    { 
      name: "Software as a Service (SaaS)", 
      description: "Delivering and integrating ready-to-use applications via the cloud. Examples: Microsoft 365, Google Workspace, Slack, Zoom.", 
      level: 90 
    },
    {
      name: "Infrastructure as Code",
      description: "Terraform, CloudFormation, ARM Templates",
      level: 60
    },
    {
      name: "Monitoring & Logging",
      description: "Prometheus, Grafana implementation",
      level: 65
    },
    {
      name: "CI/CD Pipelines",
      description: "Continuous integration and deployment automation",
      level: 65
    },
  ],
  "Automation": [
    {
      name: "Event-Driven Automation",
      description: "Systems responding to triggers and events",
      level: 90
    },
    {
      name: "Make.com Automation [formerly Integromat]",
      description: "Workflows and automations using Make.com",
      level: 90
    },
    {
      name: "n8n Automation",
      description: "Workflows and automations using n8n",
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
    }
  ],
  "Infrastructure": [
    {
      name: "Containers",
      description: "Container technologies beyond Docker",
      level: 95
    },
    {
      name: "Linux",
      description: "Linux OS administration (Ubuntu, Debian, Rhel, Proxmox)",
      level: 95
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
      name: "Hybrid Cloud",
      description: "Solutions combining on-premise and cloud resources",
      level: 85
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
  "AI ML": [
   { 
      name: "AI RAG", 
      description: "Retrieval-Augmented Generation for knowledge-grounded AI applications", 
      level: 70 
    },
    { 
      name: "MCP (Model Context Protocol)", 
      description: "Implement and operate MCP servers/clients and tool providers", 
      level: 90
    },
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
    },
    { 
      name: "Zabbix", 
      description: "Enterprise monitoring for networks and servers", 
      level: 75 

    },
    { 
      name: "Wazuh", 
      description: "Security monitoring, threat detection and incident response", 
      level: 80 

    },
    { 
      name: "NetData", 
      description: "Real-time performance monitoring", 
      level: 70 
    },
    { 
      name: "Glances", 
      description: "Cross-platform monitoring tool for system performance", 
      level: 65 

    },
  ],
  "Programming": [
    {
      name: "HTML/CSS",
      description: "Web development and design",
      level: 90
    },
    {
      name: "Android Development",
      description: "Android app development using Java and Kotlin",
      level: 60
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
    },
  ],
  "Other": [
    {
      name: "Hardware",
      description: "Computer hardware assembly and troubleshooting",
      level: 100
    },
    {
      name: "Ticketing Systems",
      description: "Ticketing systems and support tools",
      level: 85
    },
    { 
      name: "Home Assistant", 
      description: "Home automation platform for IoT and smart devices", 
      level: 90 
    },
    { 
      name: "Chrome Extensions", 
      description: "Design and development of custom Chrome browser extensions", 
      level: 90 
    },
    { 
      name: "WordPress", 
      description: "Development and customization of WordPress websites and plugins", 
      level: 90 
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
      name: "Problem Solving",
      description: "Problem-solving skills",
      level: 100
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
      name: "Throubleshooting",
      description: "General troubleshooting skills",
      level: 100
    },
    {
      name: "Vibe Coding",
      description: "AI Vibe Coding",
      level: 100
    }
  ]
};
