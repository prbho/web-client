import { Option } from "@/components/ui/multiselect";
import { Code, Monitor, Palette, Smartphone } from "lucide-react";

export const projectTypes: Option[] = [
  {
    value: "brandStrategy",
    label: "Brand Strategy",
  },
  {
    value: "visualIdentity",
    label: "Visual Identity",
  },
  {
    value: "websiteDesign",
    label: "Website Design",
  },
  {
    value: "webAppDevelopment",
    label: "Web App Development",
  },
  {
    value: "mobileAppDesign",
    label: "Mobile App Design",
  },
  {
    value: "uXResearch",
    label: "UX Research",
  },
  {
    value: "designSystem",
    label: "Design System",
  },
  {
    value: "maintainance",
    label: "Maintainance",
  },
  {
    value: "seo",
    label: "SEO",
  },
  {
    value: "others",
    label: "Others",
  },
];

export const serviceCategories = [
  {
    icon: Palette,
    title: "Brand Identity",
    color: "from-cyan-600 to-blue-600",
    bgColor: "bg-cyan-50",
    projects: ["branding"],
  },
  {
    icon: Monitor,
    title: "Web Design",
    color: "from-emerald-600 to-teal-600",
    bgColor: "bg-emerald-50",
    projects: ["web design"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    color: "from-purple-600 to-indigo-600",
    bgColor: "bg-purple-50",
    projects: ["mobile"],
  },
  {
    icon: Code,
    title: "Development",
    color: "from-orange-600 to-red-600",
    bgColor: "bg-orange-50",
    projects: ["saas", "ecommerce"],
  },
];

export const navigationLinks = [
  {
    title: "Explore",
    links: [
      { href: "/services", label: "Services" },
      { href: "/work", label: "Work" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];
