import React from "react";
import { IPage } from "../../types/standard";
import useContentByLanguage from "../../hooks/useContentByLanguage";
import { Layout, Loading } from "../../components/Layout";

interface HomeProps {
  pageContext: {
    page: IPage;
  };
}

const HomePage: React.FC<HomeProps> = ({ pageContext }) => {
  const { page } = pageContext;
  const { acfHome } = page;
  const selectedContent = useContentByLanguage(acfHome.content);

  if (!selectedContent) return <Loading />;

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: selectedContent.title }} />
      <div dangerouslySetInnerHTML={{ __html: selectedContent.description }} />
    </Layout>
  );
};
export default HomePage;
