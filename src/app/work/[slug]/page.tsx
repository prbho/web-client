import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/caseStudies";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { marked } from "marked";
import CaseStudyClient from "@/components/CaseStudyClient";

// Configure marked to use synchronous parsing
marked.setOptions({
  async: false, // This ensures parse() returns a string, not a promise
});

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getCaseStudyBySlug(params.slug);
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

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getCaseStudyBySlug(params.slug);
  if (!post) return notFound();

  // Parse markdown content synchronously and assert it's a string
  const htmlContent = marked.parse(post.content) as string;

  return (
    <CaseStudyClient
      post={{
        ...post,
        htmlContent, // Now TypeScript knows this is a string
      }}
    />
  );
}
