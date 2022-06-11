import React from "react";
import { Card, Col, Image } from "antd";

const { Meta } = Card;

const DogCard = ({ url }) => {
  const getBreedAndSubbreedFromUrl = (url) => {
    const splittedUrl = url.split("/");
    const breedWithSubbreed = splittedUrl[splittedUrl.length - 2];

    return breedWithSubbreed.split("-");
  };

  const [breed, subbreed] = getBreedAndSubbreedFromUrl(url);

  return (
    <Col>
      <Card
        hoverable
        style={{ width: 240, margin: "20px 0" }}
        cover={<Image src={url} />}
      >
        <Meta title={breed} description={subbreed} />
      </Card>
    </Col>
  );
};

export default DogCard;
