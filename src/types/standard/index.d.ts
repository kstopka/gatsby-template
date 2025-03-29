import { Language } from "../../components/contexted/App/types";

export interface IPage {
  id: string;
  slug: string;
  title: string;
  content: string;
  acfHome: IAcfHome;
  acfContact: IAcfContact;
}

export interface IAcfHome {
  homecontent: {
    title: string;
    language: Language;
    description: string;
  }[];
}
export interface IAcfContact {
  contactContent: {
    language: Language;
    city: string;
    country: string;
    email: string;
    github: string;
    linkedin: string;
  }[];
}
