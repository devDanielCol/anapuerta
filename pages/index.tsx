import dynamic from "next/dynamic";
import { Box, CircularProgress } from "@mui/material";

const HomePage = dynamic(() => import("../components/Home/Home"), {
  loading: () => (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  ),
});

export default function Home() {
  return <HomePage />;
}
