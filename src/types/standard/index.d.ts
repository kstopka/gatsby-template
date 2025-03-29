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
  content: {
    title: string;
    language: Language;
    description: string;
  }[];
}
export interface IAcfContact {
  content: {
    language: Language;
    city: string;
    country: string;
    email: string;
    github: string;
    linkedin: string;
  }[];
}
