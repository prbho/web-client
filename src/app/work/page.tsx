import WorkPageClient from "@/components/WorkPageClient";
import { getAllCaseStudies } from "@/lib/caseStudies";

export default async function WorkPage() {
  const projects = await getAllCaseStudies();

  return (
    <main className="text-slate-900">
      <WorkPageClient projects={projects} />
    </main>
  );
}
