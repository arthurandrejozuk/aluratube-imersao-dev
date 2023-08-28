
import { ThemeProvider }  from 'styled-components';
import { Reset } from '../styles/Reset';
import { ColorModeProvider , ColorModeContext } from '../app/components/ColorMode';
import React from 'react';

  const theme = {
    light: {
      backgroundBase: "#f9f9f9",
      backgroundLevel1: "#ffffff",
      backgroundLevel2: "#f0f0f0",
      borderBase: "#e5e5e5",
      textColorBase: "#222222",
    },
    dark: {
      backgroundBase: "#181818",
      backgroundLevel1: "#202020",
      backgroundLevel2: "#313131",
      borderBase: "#383838",
      textColorBase: "#FFFFFF",
    }
  };

function ProviderWrapper(props) {
  return(
    <ColorModeProvider initialMode={"dark"}>
        {props.children}
    </ColorModeProvider>
  )
}

function App({ Component, pageProps }) {

    const contexto = React.useContext(ColorModeContext)


    return (
      
        <ThemeProvider theme={theme[contexto.mode]}>
          <Reset/>
          <Component {...pageProps} />
        </ThemeProvider>
     
    )
  }
 

  export default function _App(props){
    return(
      <ProviderWrapper>
          <App {...props}/>
      </ProviderWrapper>
    )
  }