import { GlobalStyles } from './components/styles/Global.styled';
import { ThemeProvider } from 'styled-components';

// import Header from './components/Header';
// Import Pages
import { ArtistProfile } from './components/pages/ArtistProfile';
import { Gallery } from './components/pages/gallery';
import { Homepage } from './components/pages/homepage';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { SingleArtworkView } from './components/pages/SingleArtworkView';

const App = () => {

  const theme = {
    colors: {
      mayaBlue: "rgba(67, 202, 255, 0.57)",
      white: "rgb(255,255,255)",
      black: "rgb(0,0,0)",

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
    <Homepage />
    <Login />
    <Register />
    <Gallery />
    <SingleArtworkView />
    <ArtistProfile />
    {/* <div className="">
      <Header/>
    </div> */}
    </ThemeProvider>
    </>
  );
}

export default App;
