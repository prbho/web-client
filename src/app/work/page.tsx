// app/work/page.tsx

import WorkPageClient from "@/components/WorkPageClient";
import { getAllCaseStudies } from "@/lib/caseStudies";

export default async function WorkPage() {
  const caseStudies = await getAllCaseStudies();

  const projects = caseStudies.map((cs) => ({
    slug: cs.slug,
    metadata: {
      ...cs.metadata,
      image: cs.metadata.image ?? "/default-project.png",
    },
  }));

  return (
    <main className="text-slate-900">
      <WorkPageClient projects={projects} />
    </main>
  );
}
