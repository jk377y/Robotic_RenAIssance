import { GlobalStyles } from './components/styles/Global.styled';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
const App = () => {

  const theme = {
    colors: {
      red: "rgba(255, 23, 0)",
      orange: "rgba(255, 142, 0)",
      yellow: "rgba(255, 288, 0)",
      neonGreen: "rgba(6, 255, 0)"
    },
    mobile: "768px",
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div className="">
      <Header/>
    </div>
    </ThemeProvider>
    </>
  );
}

export default App;
