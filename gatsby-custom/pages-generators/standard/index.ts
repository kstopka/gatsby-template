import { Actions } from "gatsby";

import * as path from "path";
import { slash } from "gatsby-core-utils";
import { IPage } from "../../../src/types/standard";

class StandardPagesGeneratorClass {
  simplePage = (
    createPage: Actions["createPage"],
    pages: IPage[],
    slug: string
  ) => {
    const Page = path.resolve(`./src/templates/standard/${slug}.tsx`);
    const Data = pages.find((el) => el.slug === `${slug}`);

    createPage({
      path: slug === `home` ? "/" : `/${slug}`,
      component: slash(Page),
      context: {
        page: Data,
      },
    });
  };
}

const StandardPagesGenerator = new StandardPagesGeneratorClass();

export default StandardPagesGenerator;
