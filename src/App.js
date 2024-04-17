import SignUpForm from "../src/pages/sign_up/SignUpPage";
import "./index.css";
import HomePage from "./pages/home/HomePage";
import { ChakraProvider } from "@chakra-ui/react";
import LoginForm from "./pages/log_in/LogInPage";

function App() {
  return (
    <>
      <SignUpForm />
    </>
  );
}

export default App;
