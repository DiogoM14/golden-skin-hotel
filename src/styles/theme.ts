import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {

  },
  fonts: {
    heading: 'Poppins',
    body: 'Ubuntu',
  },
  styles: {
    global: {
      body: {
        bg: '#f4f4f5',
        color: '#1c1c1c' 
      }
    }
  }
})