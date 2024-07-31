import React, { useEffect, useState } from "react";

import { IPage } from "../../types/standard";
import {
  AppCtx,
  useActions,
  useContextState,
} from "../../components/contexted";
import { IAppActions, IAppState } from "../../components/contexted/App/types";

interface HomeProps {
  pageContext: {
    page: IPage;
  };
}

const HomePage: React.FC<HomeProps> = ({ pageContext }) => {
  const { page } = pageContext;
  const { acfHome } = page;
  const { language } = useContextState<IAppState>(AppCtx, ["language"]);
  const { toggleLanguage } = useActions<IAppActions>(AppCtx, [
    "toggleLanguage",
  ]);
  const [{ title, description }, setContent] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const result = acfHome.content.find(
      (content) => content.language === language
    );
    if (result) {
      setContent({
        title: result.title,
        description: result.description,
      });
    }
  }, [language, acfHome.content]);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <button onClick={toggleLanguage}>{language}</button>
    </>
  );
};
export default HomePage;
