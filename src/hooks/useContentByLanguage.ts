import { useEffect, useState } from "react";
import { AppCtx, useContextState } from "../components/contexted";
import { IAppState } from "../components/contexted/App/types";

interface ContentItem {
  language: string;
  [key: string]: any;
}

const useContentByLanguage = <T extends ContentItem>(
  content: T[]
): T | null => {
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);
  const [selectedContent, setSelectedContent] = useState<T | null>(null);

  useEffect(() => {
    const result = content.find((item) => item.language === language) || null;
    setSelectedContent(result);
  }, [language, content]);

  return selectedContent;
};

export default useContentByLanguage;
