import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import defaultTheme from "@chakra-ui/theme";
import { RecoilRoot } from "recoil";
import Main from "./components/Main";

export const theme = extendBaseTheme({
  styles: {
    global: {
      "html, body": {
        fontSize: {
          xl: "20px",
          lg: "17px",
          md: "17px",
          sm: "20px",
          base: "20px",
        },
        fontFamily: "Moscow Sans,Arial,sans-serif",
        lineHeight: "1.2",
      },
    },
  },
  components: {
    Modal: defaultTheme.components.Modal,
    Select: defaultTheme.components.Select,
    Menu: defaultTheme.components.Menu,
    Alert: defaultTheme.components.Alert,
    // Input: defaultTheme.components.Input,
    // Form: defaultTheme.components.Form,
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
