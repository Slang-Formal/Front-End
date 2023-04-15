import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react';


function MyApp({ Component, pageProps }) {

  const theme = extendTheme({ 
    fonts: {
      heading: `'Open Sans', sans-serif`,
      body: `'Raleway', sans-serif`,
    }
  })

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode='dark'></ColorModeScript>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp