// External Libraries
import { useEffect } from "react";

export function useTitle(title: string) {
  const documentEx = typeof document !== "undefined";

  useEffect(() => {
    if (!documentEx) return;
    if (document.title !== title) document.title = title;
  }, [documentEx, title]);
}
