import { ButtonGroup, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialMediaGroup = () => {
  return (
    <ButtonGroup sx={{ mt: 2, fontSize: "0.9rem" }}>
      <IconButton
        href="https://wa.me/573203379213"
        target="__blank"
        sx={{
          bgcolor: "#24d366",
          color: "white",
          p: 0.5,
          mr: 1,
          "&:hover": {
            background: "#24d366",
            color: "white",
          },
        }}
      >
        <WhatsAppIcon sx={{ width: "20px", height: "20px" }} />
      </IconButton>
      <IconButton
        onClick={() => {
          self.open(
            "https://www.facebook.com/profile.php?id=100075904522414&mibextid=ZbWKwL",
            "__blank"
          );
        }}
        sx={{
          bgcolor: "#1a77f2",
          color: "white",
          p: 0.5,
          mr: 1,
          "&:hover": {
            background: "#1a77f2",
            color: "white",
          },
        }}
      >
        <FacebookOutlinedIcon sx={{ width: "20px", height: "20px" }} />
      </IconButton>
      <IconButton
        onClick={() => {
          self.open(
            "https://instagram.com/construccionespeniel?igshid=YmMyMTA2M2Y=",
            "__blank"
          );
        }}
        sx={{
          backgroundColor: "yellow",
          backgroundImage:
            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
          color: "white",
          p: 0.5,
          mr: 1,
          "&:hover": {
            color: "white",
            backgroundImage:
              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
            backgroundColor:
              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
          },
        }}
      >
        <InstagramIcon sx={{ width: "20px", height: "20px" }} />
      </IconButton>
    </ButtonGroup>
  );
};

export default SocialMediaGroup;
