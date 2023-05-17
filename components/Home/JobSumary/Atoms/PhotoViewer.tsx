import PhotoAlgth, { INodeData } from "../algthms/PhotoAlgth";
import { Container, Box } from "@mui/material";
import { useState } from "react";
import stringToColor from "../../../../util/helpers/stringToColor";

const photoList = [
  "image/acabados.jpg",
  "image/construccion.jpg",
  "image/experts-1.jpg",
  "image/remodelacion.jpg",
  "image/home3.jpg",
];

const PhotoViewer = () => {
  const photos = new PhotoAlgth();
  for (let i = 0; i < photoList.length; i++) {
    photos.insert(null, photoList[i], i);
  }
  const [images, setImages] = useState<INodeData[]>(photos.traverse());

  const selectPhoto = (photoId: string) => () => {
    photos.selectNode(photoId);
    setImages(photos.traverse());
  };

  return (
    <Container
      sx={{
        position: "relative",
        height: { xs: "300px", md: "400px", lg: "500px" },
        width: "100%",
        backgroundColor: "background.paper",
      }}
    >
      {images?.map((img, key) => (
        <Box
          sx={{
            position: "absolute",
            transition: "all .4s linear",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${img.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundOrigin: "border-box",
            ...img.styles,
            backgroundColor: stringToColor(String(Math.random())),
          }}
          key={key}
          onClick={selectPhoto(img.id)}
        ></Box>
      ))}
    </Container>
  );
};

export default PhotoViewer;
