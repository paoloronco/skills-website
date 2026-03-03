import {
  Cloud,
  Shield,
  Network,
  Layers,
  Workflow,
  BarChart3,
  Brain,
  Server,
  Code,
  Users,
  FileText
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMatchers: { test: RegExp; icon: LucideIcon }[] = [
  { test: /cloud|architecture/, icon: Cloud },
  { test: /security|zero trust|cnapp|cspm/, icon: Shield },
  { test: /network|edge/, icon: Network },
  { test: /devops|platform engineering/, icon: Layers },
  { test: /automation|orchestration/, icon: Workflow },
  { test: /observability|analytics|monitor/, icon: BarChart3 },
  { test: /\bai\b|machine|rag|vector/, icon: Brain },
  { test: /infrastructure|operations/, icon: Server },
  { test: /software|development|digital/, icon: Code },
  { test: /professional|core|people|skills/, icon: Users }
];

export const getCategoryIcon = (category: string): LucideIcon => {
  const normalized = category.trim().toLowerCase();
  const match = iconMatchers.find(({ test }) => test.test(normalized));
  return match ? match.icon : FileText;
};
