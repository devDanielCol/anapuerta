import { Box, Card, Container, Typography } from "@mui/material";
import GradientText from "../components/GradientText/GradientText";
import gradients from "../styles/colors/gradients";
import ParticleBasic from "../components/Particles/ParticleBasic";

export default function Home() {
  return (
    <>
      <Container>
        <Container
          component={Card}
          maxWidth="sm"
          elevation={5}
          sx={{ background: "white", my: 10 }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                minHeight: "150px",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <GradientText
                gradient={"linear-gradient(#bba8eb, #bba8eb)"}
                fontSize={"3rem"}
                sx={{
                  my: 4,
                  transition: "all .4s linear",
                  display: "flex",
                  lineBreak: "normal",
                  textAlign: "left",
                }}
              >
                Hola Ana,
              </GradientText>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  padding: 0,
                  m: 0,
                  lineHeight: 1,
                  color: "#ff74d3",
                  fontWeight: 200,
                  fontFamily: "'Pacifico', cursive",
                  py: 2,
                }}
              >
                Diseñe esto especialmente para ti 💗
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  padding: 0,
                  m: 0,
                  lineHeight: 1,
                  color: "black",
                  fontFamily: "'Indie Flower', cursive",
                  py: 2,
                }}
              >
                Ya que no tengo el valor para escribirte, decidi diseñar este
                sitio para todos los días, o cada vez que tu quieras, puedas
                entrar aquí, y ver las cosas que me gustaría decirte.
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  padding: 0,
                  m: 0,
                  lineHeight: 1,
                  color: "black",
                  fontFamily: "'Indie Flower', cursive",
                  py: 2,
                }}
              >
                Primero que todo quiero decirte que <b>Te Amo</b>, que no he
                dejado de amarte, y que te amaré por siempre.
                <br></br>
                <br></br>
                Por si al caso, <b>abre este link en el computador</b> solo si
                no alcanzas a leer bien JIJI.
                <br></br>
                <br></br>
                Estos días han sido muy dificles para mi, y se que no van a
                terminar pronto, estos días siento que pasa el tiempo mas lento,
                siento que las horas son más largas, me he sentido debil, me he
                sentido vulnerable, pero justo cuando estuve a punto de
                renunciar y de apartarme de todo,{" "}
                <b>la luz de Dios apareció.</b>
                <br></br>
                <br></br>
                {<b>24 de noviembre del 2023</b>}
                <br></br>
                <br></br>
                Se que &quot;termino&quot; o por lo menos eso parece, pero para
                mi solamente es el inicio del orden de Dios. Amarte es pensar en
                tí y no querer a nadie más en mi vida, amarte es renuncar a mi
                mismo. Se que tal vez no quieres oir estas palabras, y
                posiblemente estes confundida por ver todo esto que hago, pero
                solamente lee esto, todos los días trataré de escribirte cosas
                nuevas aquí, para que aun a la distancia, puedas oir mis
                palabras.
                <br></br>
                <br></br>
                Solamente quería decirte: No dejes de pensar en mí, yo no
                buscaré a nadie más, oraré por el amor de mi vida, orare por
                aquella mujer a aquien le he entregado mi vida y corazon.
                <br></br>
                <br></br>
                <b>Ana Puerta & Daniel Cubillos</b>
                <br></br>
                <br></br>
                Si te haz preguntado si he pensado en tí, te diré que si, te
                diré que quiero que te llenes de Dios y que me des ejemplo a mí,
                por que estuve apunto de renunciar a lo más valioso. Estuve
                apunto de hundirme en el fango y dejarme llevar por mi tristeza,
                pero en aquellos momentos dificiles el amor de Dios me dió
                aliento, y el amor que siento por ti me dió cordura y me
                sustentó.
                <br></br>
                <br></br>
                Por favor no te rindas, no te detengas, avanza, con tu ejemplo
                dame el ánmio, avanza, sigue adelante, por favor, crece y
                derriba gigantes, recuerda que el enemigo eres tu misma, que tu
                eres tu limite, y que si te superas, serás invencible en todo,
                yo no romperé ninguna promesa de las que te he hecho. Aun a la
                distancia, aun con las dificultades, aun con adversidades que
                vengan, debes saber que yo tambien estoy pasando por lo mismo, y
                que si tu eres fuerte, yo tambien lo seré, que si tu avanzas, yo
                tambien avanzaré, que si tu quieres acercarte a mí, yo tambien
                lo haré, cuando llegue el tiempo de Dios.
                <br></br>
                <br></br>
                <b>¿Sabes por que decidí escribirte esto?</b>
                <br></br>
                Por que leí la pequeña nota que me escribiste en las cosas que
                enviaste, eso me dió el valor de escribirte, y me da el valor de
                decirte:
                <b>
                  Te amo un poco más que el Sol, y mucho más que el aire mi
                  respiración, ya no es tán importante, cuando escribo esto, se
                  me olvida que respiro.
                </b>
                <br></br>
                <br></br>Y si pudiera pedir una cosa más a Dios, sería que algun
                día pueda estár contigo y envejecer junto a tí.
              </Typography>
            </Box>
          </Box>
        </Container>

        <Box
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "50%" },
              height: "min-height",
              paddingTop: "80.0000%",
              paddingBottom: 0,
              boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
              marginTop: "1.6em",
              marginBottom: " 0.9em",
              overflow: "hidden",
              borderRadius: "8px",
              willChange: "transform",
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                border: "none",
                padding: 0,
                margin: 0,
              }}
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFtKMJFV3g&#x2F;view?embed"
              allowFullScreen={true}
              allow="fullscreen"
            ></iframe>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          height: "100vh",
          zIndex: -1,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <ParticleBasic />
      </Box>
    </>
  );
}
