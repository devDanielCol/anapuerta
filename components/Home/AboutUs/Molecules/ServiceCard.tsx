import { SxProps, Typography, IconButton, Paper } from "@mui/material";
import { Box } from "@mui/system";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import { FC, useState } from "react";

const sxCard: SxProps = {
  position: "relative",
  width: "100%",
  minWidth: 155,
  height: {
    xs: 210,
    md: 250,
  },
  border: 0,
  boxShadow: 0,
  backgroundColor: "transparent",
};

const sxFace: SxProps = {
  width: "100%",
  height: "100%",
  position: "absolute",
  left: 0,
  top: 0,
  borderRadius: 3,
  backfaceVisibility: "hidden",
  transition: "all .5s cubic-bezier(0.1, 0.57, 0.45, 0.94)",
  overflow: "hidden",
};

interface ServiceCardProps {
  name: string;
  description: string;
  img: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ name, description, img }) => {
  const [rotate, setRotate] = useState<boolean>(false);
  const rotateFront = rotate ? "180deg" : "0deg";
  const rotateBack = rotate ? "360deg" : "180deg";

  const sxFront: SxProps = {
    transform: `perspective(900px) rotateY(${rotateFront})`,
  };
  const sxBack: SxProps = {
    transform: `perspective(900px) rotateY(${rotateBack})`,
  };

  const handleOver = () => {
    !rotate && setRotate(true);
  };
  const handleLeave = () => {
    rotate && setRotate(false);
  };

  const handleClick = () => {
    setRotate(!rotate);
  };

  return (
    <Box
      type-card="program"
      sx={sxCard}
      onClick={handleClick}
      onMouseOver={handleOver}
      onMouseLeave={handleLeave}
    >
      <Paper
        elevation={3}
        face-type="front"
        component="div"
        sx={{ ...sxFront, ...sxFace }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: `url(${img}) center no-repeat`,
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              backgroundColor: "#00000030",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                  md: "1.8rem",
                },
                textAlign: "center",
                maxWidth: "85%",
                cursor: "pointer",
                color: "#fff",
                fontWeight: 700,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {name}
            </Typography>
            <IconButton
              component="div"
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                zIndex: 2,
                color: "white",
              }}
            >
              <AutorenewRoundedIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>
      <Paper
        elevation={3}
        face-type="back"
        component="div"
        sx={{ ...sxBack, ...sxFace }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <Typography
            fontSize={{
              xs: 10,
              md: 12,
              lineHeight: 1,
            }}
            mb={1}
          >
            Descripcion
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: 12,
                md: 18,
              },
              textAlign: "center",
              maxWidth: "85%",
              lineHeight: 1,
            }}
          >
            {description}
          </Typography>
          <IconButton
            component="div"
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              zIndex: 2,
            }}
          >
            <AutorenewRoundedIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default ServiceCard;
