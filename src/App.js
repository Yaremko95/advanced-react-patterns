import Container from "@mui/material/Container";
import { Usage } from "./components/felxibleCompaund";
function App() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Usage />
    </Container>
  );
}

export default App;
