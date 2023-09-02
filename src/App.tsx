import { Routes, Route } from "react-router-dom";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
import defaultTheme from "@chakra-ui/theme";
import { RecoilRoot } from "recoil";
import Main from "./components/Main";
// import Footer from "./components/Footer";

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
    Input: defaultTheme.components.Input,
  },
});

export const App = () => (
  <>
    <RecoilRoot>
      <ChakraBaseProvider theme={theme}>
        <Main />
        {/* <Header />
      <Navbar /> */}
        {/* <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/metro" element={<MM2010 />} />
        <Route path="/groundtransport" element={<NT2010 />} />
        <Route path="/suburbanrailway" element={<PGD2010 />} />
        <Route path="/roads" element={<DD2010 />} />
        <Route path="/sharing" element={<SHS2010 />} />
        <Route path="/taxi" element={<TAXI2010 />} />
        <Route path="/station" element={<AV2010 />} />
        <Route path="*" element={<Main />} />
      </Routes> */}
        {/* <Footer /> */}
      </ChakraBaseProvider>
    </RecoilRoot>
  </>
);
