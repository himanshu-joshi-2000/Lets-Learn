// import logo from "./logo.svg";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Navigation from "./Routes/Navigation";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navigation />
      </ChakraProvider>
    </div>
  );
}

export default App;
