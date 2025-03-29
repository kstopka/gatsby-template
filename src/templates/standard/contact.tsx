import React from "react";
import { IPage } from "../../types/standard";
import useContentByLanguage from "../../hooks/useContentByLanguage";
import { Layout, Loading } from "../../components/Layout";

interface ContactProps {
  pageContext: {
    page: IPage;
  };
}

const ContactPage: React.FC<ContactProps> = ({ pageContext }) => {
  const { page } = pageContext;
  const { acfContact } = page;
  const selectedContent = useContentByLanguage(acfContact.contactContent);

  if (!selectedContent) return <Loading />;

  return (
    <Layout>
      <p>{selectedContent.country}</p>
      <p>{selectedContent.city}</p>
    </Layout>
  );
};
export default ContactPage;
