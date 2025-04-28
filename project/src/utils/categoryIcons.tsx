import React from 'react';
import { 
  Cloud, 
  Shield, 
  Terminal, 
  Network, 
  Cpu, 
  Database, 
  BarChart, 
  Cog, 
  Code,
  File
} from 'lucide-react';

export const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'cloud platforms':
      return Cloud;
    case 'security':
      return Shield;
    case 'devops':
      return Terminal;
    case 'networking':
      return Network;
    case 'automation':
      return Cog;
    case 'analytics':
      return BarChart;
    case 'data management':
      return Database;
    case 'infrastructure':
      return Cpu;
    case 'programming':
      return Code;
    default:
      return File;
  }
};