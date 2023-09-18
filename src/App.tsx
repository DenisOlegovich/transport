import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import defaultTheme from "@chakra-ui/theme";
import { RecoilRoot } from "recoil";
import Main from "./components/Main";

export const theme = extendBaseTheme({
  fonts: {
    heading: `'Moscow Sans,Arial,sans-serif`,
    body: `'Unbounded', sans-serif`,
    size: "17px",
  },

  components: {
    Modal: defaultTheme.components.Modal,
    Select: defaultTheme.components.Select,
    Menu: defaultTheme.components.Menu,
    Alert: defaultTheme.components.Alert,
    // Input: defaultTheme.components.Input,
    Form: defaultTheme.components.Form,
    Radio: defaultTheme.components.Radio,
  },
});

export const App = () => (
  <>
    <RecoilRoot>
      <ChakraBaseProvider theme={theme}>
        <Main />
      </ChakraBaseProvider>
    </RecoilRoot>
  </>
);
