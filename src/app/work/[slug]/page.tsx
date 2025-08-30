// app/work/[slug]/page.tsx

import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/caseStudies";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { marked } from "marked";
import CaseStudyClient from "@/components/CaseStudyClient";

// Configure marked to use synchronous parsing
marked.setOptions({
  async: false, // Ensures parse() returns a string, not a promise
});

// Generate static params for SSG
export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

// Generate metadata for SEO/OG
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params; // ✅ Await params
  const post = getCaseStudyBySlug(slug);
  if (!post) return { title: "Case Study Not Found" };

  return {
    title: `${post.metadata.title} – Cofellow`,
    description: post.metadata.description,
    openGraph: {
      title: `${post.metadata.title} – Cofellow`,
      description: post.metadata.description,
      images: post.metadata.image ? [post.metadata.image] : [],
    },
  };
}

// Page component
export default async function CaseStudyPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params; // ✅ Await params
  const post = getCaseStudyBySlug(slug);

  if (!post) return notFound();

  const htmlContent = marked.parse(post.content) as string;

  return (
    <CaseStudyClient
      post={{
        ...post,
        htmlContent,
      }}
    />
  );
}
