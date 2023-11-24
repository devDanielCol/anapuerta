import { Box, Typography } from "@mui/material";
import { Component, ReactNode } from "react";
import GradientText from "../../GradientText/GradientText";
import gradients from "../../../styles/colors/gradients";
import Animate from "../../Global/Animation/Animation";

interface BannerPrincipalProps {
  children: ReactNode;
}
class BannerPrincipal extends Component {
  public already: boolean | undefined;

  constructor(props: Readonly<BannerPrincipalProps>) {
    super(props);
    this.already = false;
  }

  render(): ReactNode {
    return (
      <>
        <Box
          sx={{
            height: { xs: "70vh", md: "90vh" },
            zIndex: "unset",
          }}
        >
          <Box
            sx={{
              top: 0,
              left: 0,
              position: "relative",
              height: { xs: "70vh", md: "90vh" },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                top: 0,
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 2,
                px: 2,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* aqui */}
                <Animate animationNameIn="fade-in">
                  <Box
                    sx={{
                      transition: "all .4s linear",
                      textAlign: { xs: "center", md: "center" },
                    }}
                    component={"h1"}
                  >
                    <GradientText
                      fontSize={{
                        xs: "50px",
                        sm: "60px",
                        md: "70px",
                        lg: "80px",
                      }}
                      textAlign={{ xs: "center", md: "center" }}
                      letterSpacing={{ xs: "-2px", sm: "-3px" }}
                      gradient={gradients.whiteLight}
                      sx={{ ml: 0 }}
                    >
                      Construcciones y acabados
                    </GradientText>
                    <Box
                      sx={{
                        fontSize: { xs: "60px", sm: "80px", lg: "100px" },
                        fontWeight: 700,
                        color: "white",
                        lineHeight: 1,
                        letterSpacing: { xs: "0px", md: "-2px" },
                        mt: 3,
                        textTransform: "uppercase",
                      }}
                    >
                      Peniel
                      <Typography
                        component={"span"}
                        sx={{
                          fontSize: "1.5rem",
                          fontWeight: 900,
                          ml: 2,
                        }}
                      >
                        SAS
                      </Typography>
                    </Box>
                  </Box>
                </Animate>
              </Box>
            </Box>

            <Box
              sx={{
                position: "fixed",
                objectFit: "cover",
                objectPosition: "center",
                pointerEvents: "none",
                zIndex: -1,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: { xs: "100vh", md: "100vh" },
                }}
              >
                <Box
                  sx={{
                    top: 0,
                    position: "absolute",
                    width: "100vw",
                    height: "100%",
                    backgroundImage: "url(/image/bgt1.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    zIndex: 1,
                    opacity: 0.3,
                  }}
                ></Box>
                {this.already && (
                  <Box
                    sx={{
                      top: 0,
                      position: "absolute",
                      width: "100vw",
                      height: "100%",
                      backgroundColor: "transparent",
                      backgroundImage:
                        "url(https://cdn.pixabay.com/photo/2016/12/08/21/21/skyscrapers-1893201_1280.jpg)",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      filter: "brightness(0.5)",
                    }}
                  ></Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  }

  componentDidMount(): void {
    this.already = true;
    this.forceUpdate();
  }
}

export default BannerPrincipal;
