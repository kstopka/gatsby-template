import React from "react";
import Layout from "../Layout";
import * as S from "./styles";

interface ILoading {}

const Loading: React.FC<ILoading> = () => {
  return (
    <Layout>
      <S.Loading>Loading</S.Loading>
    </Layout>
  );
};
export default Loading;
