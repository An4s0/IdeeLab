import IdeaCard from "./card";
import type { IdeaType } from "@/types";

export function IdeasGrid({
  title,
  ideas,
  subtitle,
}: {
  title?: string;
  ideas: IdeaType[];
  subtitle?: string;
}) {
  return (
    <div className="mt-3">
      {title && (
        <div className="mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            {title}
          </h2>
          {subtitle && <p className="text-subtle max-w-2xl">{subtitle}</p>}
          <div className="mt-2 h-px bg-primary/30 w-16"></div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 mb-12">
        {ideas.map((idea) => (
          <IdeaCard idea={idea} key={Math.random()} />
        ))}
      </div>
    </div>
  );
}
