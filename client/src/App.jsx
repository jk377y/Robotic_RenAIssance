import { GlobalStyles } from './components/styles/Global.styled';
import { ThemeProvider } from 'styled-components';
import React, { useState } from 'react';
import { ArtistProfile } from './components/pages/ArtistProfile';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { SingleArtworkView } from './components/pages/SingleArtworkView';
import { Homepage } from './components/pages/Homepage';
import { Gallery } from './components/pages/Gallery';
import { NavBar } from './components/helpercomponent/NavBar';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggelForm = () => {
    setCurrentForm(formName);
  }
  const theme = {
    colors: {
      mayaBlue: 'rgba(67, 202, 255, 0.57)',
      white: 'rgb(255,255,255)',
      black: 'rgb(0,0,0)',
      blackOpacity: 'rgba(0, 0, 0, 0.562)',
      blackOpacityTwo: 'rgba(0, 0, 0, 0.459)',
      babyBlue: 'rgb(114, 248, 247)',
      yellow: 'rgb(248,247,80)',
      brightBlue: 'rgb(0, 217, 255)',
      lightBrightBlue: 'rgb(67,255,255)',
      yellowTwo: 'rgb(255,255,117)',
      screamingGreen: 'rgb(66,255,151)',
      salmon: 'rgb(255,151,117)',
      green: '#42ff9750',
      darkGreen: '#42ff9725',
      lightYellow: '#faffb3',
      greyGreen: '#faffb375',
      grey: '#faffb350',
      darkGrey: '#faffb325',
      lightGrey: '#ffffff75',
      greyTwo: '#ffffff50',
      darkerGrey: '#ffffff25',
      magenta: '#c45dff',
      purple: '#c45dff75',
      darkPurple: '#c45dff50',
      eggplant: '#c45dff25',
      teal: '#43ffff75',
      darkTeal: '#72f8f750',
    },
    mobile: '768px',
  };

  return (
    <>
      <div className="App">
        {currentForm === 'login' ? <Login onFormSwitch{toggelForm} /> : <Register onFormSwitch{toggelForm} />}
      </div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavBar />
        <Homepage />
        <Login />
        <Register />
        <Gallery />
        <SingleArtworkView />
        <ArtistProfile />
      </ThemeProvider>
    </>
  );
}

export default App;
