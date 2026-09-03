import type { IconType } from 'react-icons';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiGraphql,
  SiRedis,
  SiGit,
  SiDocker,
  SiVercel,
  SiFigma,
  SiGithub,
  SiDribbble,
} from 'react-icons/si';
import { FaAws, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import {
  LuLayoutGrid,
  LuServer,
  LuWrench,
  LuCode,
  LuPalette,
  LuSmartphone,
  LuCompass,
} from 'react-icons/lu';

export const techIconMap: Record<string, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  /*framer: SiFramer,*/
  nodejs: SiNodedotjs,
  postgres: SiPostgresql,
  supabase: SiSupabase,
  /*graphql: SiGraphql,*/
  /*redis: SiRedis,*/
  git: SiGit,
  docker: SiDocker,
  /*aws: FaAws,*/
  vercel: SiVercel,
  /*figma: SiFigma,*/
};

export const categoryIconMap: Record<string, IconType> = {
  layout: LuLayoutGrid,
  server: LuServer,
  wrench: LuWrench,
};

export const serviceIconMap: Record<string, IconType> = {
  code: LuCode,
  palette: LuPalette,
  smartphone: LuSmartphone,
  compass: LuCompass,
};

export const socialIconMap: Record<string, IconType> = {
  github: SiGithub,
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  dribbble: SiDribbble,
  email: HiOutlineEnvelope,
};

export function getTechIcon(name: string): IconType {
  return techIconMap[name] ?? LuCode;
}

export function getCategoryIcon(name: string): IconType {
  return categoryIconMap[name] ?? LuCode;
}

export function getServiceIcon(name: string): IconType {
  return serviceIconMap[name] ?? LuCode;
}

export function getSocialIcon(name: string): IconType {
  return socialIconMap[name] ?? HiOutlineEnvelope;
}
