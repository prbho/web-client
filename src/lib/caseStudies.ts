// lib/caseStudies.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface CaseStudyMetadata {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  client?: string;
  year?: string;
  role?: string;
}

interface CaseStudy {
  slug: string;
  metadata: CaseStudyMetadata;
  content: string;
}

const caseStudyDir = path.join(process.cwd(), "content/case-studies");

export function getCaseStudySlugs(): string[] {
  return fs.readdirSync(caseStudyDir).map((file) => file.replace(/\.md$/, ""));
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  try {
    const fullPath = path.join(caseStudyDir, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Validate required fields
    if (!data.title || !data.description) {
      console.warn(`Case study ${slug} is missing required metadata fields`);
      return null;
    }

    return {
      slug,
      metadata: data as CaseStudyMetadata,
      content,
    };
  } catch (error) {
    console.error(`Error loading case study ${slug}:`, error);
    return null;
  }
}

export function getAllCaseStudies(): CaseStudy[] {
  return getCaseStudySlugs()
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((study): study is CaseStudy => study !== null);
}
