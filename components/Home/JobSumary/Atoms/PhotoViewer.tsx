import PhotoAlgth, { INodeData } from "../algthms/PhotoAlgth";
import { Container, Box } from "@mui/material";
import { useState } from "react";

const photoList = [
  "image/photo_viewer/photo1.jpg",
  "image/photo_viewer/photo2.jpg",
  "image/photo_viewer/photo3.jpg",
  "image/photo_viewer/photo4.jpg",
  "image/photo_viewer/photo5.jpg",
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
            ...img.styles,
            position: "absolute",
            transition: "all 1s linear",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${img.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundOrigin: "border-box",
          }}
          key={key}
          onClick={selectPhoto(img.id)}
        ></Box>
      ))}
    </Container>
  );
};

export default PhotoViewer;
