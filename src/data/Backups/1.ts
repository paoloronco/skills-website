import { SkillCategory } from "../types/skill";

export const skillsByCategory: SkillCategory = {
  "Cloud Platforms": [
    {
      name: "Google Cloud Platform (GCP)",
      description: "Google's cloud computing services and infrastructure",
      level: 98
    },
    {
      name: "Amazon Web Services (AWS)",
      description: "Amazon Web Services infrastructure, services, and best practices",
      level: 60
    },
    {
      name: "Microsoft Azure",
      description: "Microsoft's cloud computing platform",
      level: 65
    },
    {
      name: "Oracle Cloud Infrasctructure (OCI)",
      description: "Oracle's cloud services and infrastructure",
      level: 80
    },
    {
      name: "Cloud Architecture",
      description: "Designing scalable and secure cloud solutions",
      level: 90
    },
    {
      name: "Serverless Computing",
      description: "Google Cloud Functions, AWS Lambda, Azure Functions",
      level: 85
    },
    {
      name: "Multi-Cloud Strategy",
      description: "Implementing solutions across multiple cloud providers",
      level: 70
    },
    {
      name: "Cloud Cost Optimization",
      description: "Techniques for optimizing cloud resource costs",
      level: 60
    },
    {
      name: "Cloud Migration",
      description: "Strategies for migrating applications to the cloud",
      level: 80
    },
    {
      name: "Proxmox",
      description: "Proxmox virtualization platform",
      level: 99
    },
    {
      name: "VMware ESXi",
      description: "VMware virtualization platform",
      level: 90
    },
    { name: "Zero Trust (Cloud)", 
       description: "Zero Trust principles applied to identity, network and data in cloud environments" 
      level: 80 },

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
      level: 90
    },
    {
      name: "Penetration Testing",
      description: "Simulated attacks to evaluate system security",
      level: 85
    },
    {
      name: "Security Compliance",
      description: "Ensuring systems meet regulatory requirements",
      level: 60
    },
    {
      name: "Identity & Access Management",
      description: "IAM solutions across cloud platforms",
      level: 80
    },
    {
      name: "Network Security",
      description: "Protecting network infrastructure and data",
      level: 85
    },
    {
      name: "Encryption",
      description: "Data encryption at rest and in transit",
      level: 65
    },
    {
      name: "Security Architecture",
      description: "Designing secure systems and applications",
      level: 95
    },
    {
      name: "Threat Intelligence",
      description: "Analysis of security threats and vulnerabilities",
      level: 90
    },
    {
      name: "Incident Response",
      description: "Handling and mitigating security incidents",
      level: 85
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
      level: 85 
    },
    { 
      name: "EDR/XDR", 
      description: "Endpoint/Extended Detection and Response", 
      level: 80 
    },
    {
      name: "OSINT",
      description: "Open Source Intelligence gathering and analysis",
      level: 80
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
    { name: "TCP/IP Fundamentals", 
      description: "OSI/TCP-IP, subnetting, diagnostics", 
      level: 80 
    },
    { 
      name: "Routing & Switching", 
      description: "Static/dynamic routing, VLAN, STP", 
      level: 75 
    },
    { name: "Firewall Management", 
      description: "Policy management, NAT, UTM/NGFW", 
      level: 80 
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
    {
      name: "n8n Workflows",
      description: "Designing workflows using n8n",
      level: 95
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
      level: 80
    },
    {
      name: "Containers",
      description: "Container technologies beyond Docker",
      level: 85
    },
    {
      name: "Infrastructure Monitoring",
      description: "Tools and techniques for infrastructure visibility",
      level: 85
    },
    {
      name: "Linux",
      description: "Linux OS administration (Ubuntu, Debian, Rhel, Proxmox)",
      level: 90
    },
    {
      name: "PaaS Platforms",
      description: "Various PaaS platforms for web app deployment and hosting(e.g., Heroku, Google App Enginem, Railway, Vercel)",
      level: 90
    },
    {
      name: "Linux",
      description: "Linux OS administration (Ubuntu, Debian, Rhel, Proxmox)",
      level: 90
    },
    
    { 
      name: "Data Migration", 
      description: "Workload/data migrations on-prem ↔ cloud", 
      level: 85 
    },
    { 
      name: "Business Continuity", 
      description: "Impact analysis (BIA), BCP planning and testing", 
      level: 85 
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
      name: "WebDeveloping",
      description: "Web development using HTML, CSS, JavaScript, PHP, MySQL",
      level: 80
    },
    {
      name: "Python",
      description: "General-purpose programming and automation",
      level: 55
    },
    { 
      name: "Node.js", 
      description: "JavaScript runtime environment for backend and full-stack web development", 
      level: 60 },
    {
      name: "Android Development",
      description: "Android app development using Java and Kotlin",
      level: 60
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
    {
      name: "AI Coding",
      description: "AI Coding",
      level: 100
    },
  ]
};