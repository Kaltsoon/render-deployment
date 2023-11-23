import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import MessageList from "./components/MessageList";
import AddMessage from "./components/AddMessage";
import AppBar from "./components/AppBar";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <>
          <AppBar />
          <Container sx={{ marginY: 4 }}>
            <Routes>
              <Route path="/" element={<MessageList />} />
              <Route path="/messages/add" element={<AddMessage />} />
            </Routes>
          </Container>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
