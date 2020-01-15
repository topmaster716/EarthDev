import React from "react";
import Footer from "./home/components/Footer";
import ButtonSmall from "../components/buttons/ButtonSmall";
import NotFoundImage from "../components/images/NotFoundImage";

import {
  ContainerNotFound,
  ContainerContent,
  Title,
  Text,
  ContainerImage
} from "./styles";

function NotFoundView(props) {
  return (
    <ContainerNotFound>
      <ContainerContent>
        <Title>404</Title>
        <Text>
          The page is lost, but you always <br />
          can <strong>go back</strong>
        </Text>
        <ButtonSmall btnTitle="Go back" />
      </ContainerContent>
      <ContainerImage>
        <NotFoundImage />
      </ContainerImage>
      <Footer />
    </ContainerNotFound>
  );
}

export default NotFoundView;
