import React from "react";
import { IPage } from "../../types/standard";
import useContentByLanguage from "../../hooks/useContentByLanguage";
import { Layout, Loading } from "../../components/Layout";
import Button from "../../components/atoms/Button";

interface HomeProps {
  pageContext: {
    page: IPage;
  };
}

const HomePage: React.FC<HomeProps> = ({ pageContext }) => {
  const { page } = pageContext;
  const { acfHome } = page;
  const selectedContent = useContentByLanguage(acfHome.homecontent);

  if (!selectedContent) return <Loading />;

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: selectedContent.title }} />
      <div dangerouslySetInnerHTML={{ __html: selectedContent.description }} />
      <Button
        onClick={() => console.log("test")}
        label="Test"
        type="submit"
      ></Button>
    </Layout>
  );
};
export default HomePage;
