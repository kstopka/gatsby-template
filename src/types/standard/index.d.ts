import { Language } from "../../components/contexted/App/types";

export interface IPage {
  id: string;
  slug: string;
  title: string;
  content: string;
  acfHome: IAcfHome;
}

export interface IAcfHome {
  content: {
    title: string;
    language: Language;
    description: string;
  }[];
}
