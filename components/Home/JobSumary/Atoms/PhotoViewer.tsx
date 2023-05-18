import PhotoAlgth, { INodeData } from "../algthms/PhotoAlgth";
import { Container, Box, IconButton } from "@mui/material";
import { useState } from "react";

const photoList = [
  "image/photo_viewer/photo5.jpg",
  "image/photo_viewer/photo2.jpg",
  "image/photo_viewer/photo3.jpg",
  "image/photo_viewer/photo4.jpg",
  "image/photo_viewer/photo1.jpg",
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
            transition: "all 0.6s linear",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${img.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundOrigin: "border-box",
            borderRadius: "8px",
          }}
          key={key}
          onClick={selectPhoto(img.id)}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              borderRadius: "8px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                transition: "all 0.3s linear",
                fontWeight: 600,
                borderRadius: "8px",
                display: "flex",
                justifyContent: "end",
                alignItems: "end",
              }}
            >
              <Box
                component="div"
                sx={{
                  backgroundColor: "black",
                  fontSize: "0.9rem",
                  p: 0.5,
                  color: "white",
                  m: 0.5,
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                {img.id}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default PhotoViewer;
