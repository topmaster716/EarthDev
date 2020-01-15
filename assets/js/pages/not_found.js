import React from "react";
import Footer from "./home/components/Footer";
import ButtonSmall from "../components/buttons/ButtonSmall";
import NotFoundImage from "../components/images/NotFoundImage";

import { ContainerNotFound, Title, Text, ContainerImage } from "./styles";

function NotFoundView(props) {
  return (
    <ContainerNotFound>
      <Title>404</Title>
      <Text>
        The page is lost, but you always <br />
        can <strong>go back</strong>
      </Text>
      <ButtonSmall btnTitle="Go back" />
      <ContainerImage>
        <NotFoundImage />
      </ContainerImage>
      <Footer />
    </ContainerNotFound>
  );
}

export default NotFoundView;
