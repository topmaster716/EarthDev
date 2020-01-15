import React from "react";
import Footer from "./home/components/Footer";
import ButtonSmall from "../components/ButtonSmall";
import NotFoundImage from "../components/images/NotFoundImage";

import { ContainerNotFound, Title, Text, ContainerImage } from "./styles";

const button = {
  btnId: "not-found-btn",
  btnTitle: "Go back"
};

class NotFoundView extends React.Component {
  render() {
    return (
      <ContainerNotFound>
        <Title>404</Title>
        <Text>
          The page is lost, but you always <br />
          can <strong>go back</strong>
        </Text>
        <ButtonSmall btnTitle={button.btnTitle} btnId={button.btnId} />
        <ContainerImage>
          <NotFoundImage />
        </ContainerImage>
        <Footer />
      </ContainerNotFound>
    );
  }
}

export default NotFoundView;
