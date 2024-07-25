import React from "react";

import { IPage } from "../../types/standard";

interface HomeProps {
  pageContext: {
    page: IPage;
  };
}

const HomePage: React.FC<HomeProps> = ({ pageContext }) => {
  const { page } = pageContext;
  const { title, content } = page;

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};
export default HomePage;
