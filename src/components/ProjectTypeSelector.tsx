// components/ProjectTypeSelector.tsx

"use client";

type Props = {
  selectedTypes: string[];
  onTypeChange: (types: string[]) => void;
};

const projectTypes = [
  "Brand Strategy",
  "Visual Identity",
  "Website Design",
  "Web App Development",
  "Mobile App Design",
  "UX Research",
  "Design System",
];

export default function ProjectTypeSelector({
  selectedTypes,
  onTypeChange,
}: Props) {
  const handleToggle = (type: string) => {
    if (selectedTypes.includes(type)) {
      onTypeChange(selectedTypes.filter((t) => t !== type));
    } else {
      onTypeChange([...selectedTypes, type]);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-3 text-slate-700">
        What kind of project is this?
      </label>
      <div className="flex flex-wrap gap-2">
        {projectTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => handleToggle(type)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              selectedTypes.includes(type)
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
            }`}>
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
