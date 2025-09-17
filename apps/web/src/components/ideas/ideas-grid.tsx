import IdeaCard from "./card";
import type { IdeaType } from "@/types";

export function IdeasGrid({
  title,
  ideas,
}: {
  title?: string;
  ideas: IdeaType[];
}) {
  return (
    <div className="mt-6">
      {title && <h2 className="text-lg font-semibold mb-3">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mb-10">
        {ideas.map((idea, index) => (
          <IdeaCard idea={idea} key={index} />
        ))}
      </div>
    </div>
  );
}
