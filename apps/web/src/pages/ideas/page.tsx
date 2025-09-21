import { useState } from "react";
import {
  ChevronDown,
  ArrowUpNarrowWide,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { Header } from "@/components/header";
import { IdeasGrid } from "@/components/ideas/ideas-grid";
import { useTitle } from "@/hooks";
import type { IdeaType } from "@/types";
import ideasSample from "./ideas";

type SelectedFilters = {
  Sort: string[];
  Difficulty: string[];
};

export default function IdeasPage() {
  useTitle("IdeeLab | Explore and share your ideas");
  const [ideas] = useState<IdeaType[]>(ideasSample);
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [selected, setSelected] = useState<SelectedFilters>({
    Sort: [],
    Difficulty: [],
  });

  const filterOptions = [
    {
      label: "Sort",
      Icon: ArrowUpNarrowWide,
      options: ["newest", "oldest", "most views", "most upvotes", "hot"],
    },
    {
      label: "Difficulty",
      Icon: SlidersHorizontal,
      options: ["all", "beginner", "intermediate", "advanced"],
    },
  ];

  const toggleOption = (label: string, option: string) => {
    setSelected((prev) => {
      const current = prev[label as keyof SelectedFilters];
      if (current.includes(option)) {
        return { ...prev, [label]: current.filter((o) => o !== option) };
      } else {
        return { ...prev, [label]: [...current, option] };
      }
    });
    setOpenFilter(null);
  };

  const clearAll = () => {
    setSelected({ Sort: [], Difficulty: [] });
  };

  const filteredIdeas = ideas;

  const totalSelected = selected.Sort.length + selected.Difficulty.length;

  return (
    <>
      <Header />
      <main className="p-3 mt-16">
        {/* Filter Buttons */}
        <div className="flex items-center gap-2 py-2 overflow-visible">
          {filterOptions.map(({ label, Icon, options }) => (
            <div key={label} className="relative">
              <div
                onClick={() =>
                  setOpenFilter(openFilter === label ? null : label)
                }
                className="flex gap-2 border border-br px-4 py-2 rounded-lg cursor-pointer items-center select-none"
              >
                <Icon size={20} />
                {label}
                <ChevronDown
                  className={`transition-transform ${
                    openFilter === label ? "rotate-180" : ""
                  }`}
                />
              </div>

              {openFilter === label && (
                <ul className="absolute top-full left-0 mt-1 w-max bg-bg shadow-lg border border-subtle/20 rounded-lg z-50">
                  {options.map((opt) => (
                    <li
                      key={opt}
                      className="px-4 py-2 cursor-pointer hover:bg-bgltr flex justify-between items-center"
                      onClick={() => toggleOption(label, opt)}
                    >
                      <span>{opt}</span>
                      {selected[label as keyof SelectedFilters].includes(
                        opt,
                      ) && <X size={12} />}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Selected Filters */}
        {totalSelected > 0 && (
          <div className="flex flex-wrap gap-2 my-3 items-center">
            {Object.entries(selected).map(([label, options]) =>
              options.map((opt) => (
                <div
                  key={label + opt}
                  className="flex items-center gap-1 bg-subtle/10 px-3 py-1 rounded-full text-sm"
                >
                  {opt}
                  <X
                    size={12}
                    className="cursor-pointer"
                    onClick={() => toggleOption(label, opt)}
                  />
                </div>
              )),
            )}
            <button
              className="ml-2 px-3 py-1 bg-red/10 text-red border-red/5 rounded-full text-sm hover:bg-red/15"
              onClick={clearAll}
            >
              Clear All
            </button>
          </div>
        )}

        {/* Ideas Grid */}
        <IdeasGrid ideas={filteredIdeas} />

        <br />
      </main>
    </>
  );
}
