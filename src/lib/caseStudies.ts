import fs from "fs";
import path from "path";
import matter from "gray-matter";

const caseStudyDir = path.join(process.cwd(), "content/case-studies");

export function getCaseStudySlugs() {
  return fs.readdirSync(caseStudyDir).map((file) => file.replace(/\.md$/, ""));
}

export function getCaseStudyBySlug(slug: string) {
  const fullPath = path.join(caseStudyDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    metadata: data,
    content,
  };
}

export function getAllCaseStudies() {
  return getCaseStudySlugs().map(getCaseStudyBySlug);
}
