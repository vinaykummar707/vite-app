import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import './index.css'


import {createTheme, MantineProvider, MantineTheme, rem} from '@mantine/core';
const theme: MantineTheme = createTheme({

    primaryColor: 'brand',
    fontFamily: 'DM Sans',
    fontSizes: {
        xxl: rem(22)
    },
    radius:{
        none: rem(0)
    },

    colors: {
        'brand': ['#fcfafc', '#faf5fa', '#800080', '#730073', '#660066', '#5a005a', '#4d004d', '#400040', '#330033', '#260026','#1a001a', '#0d000d','#000000'],
        'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
    },
})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider theme={theme}>
            <App/>
        </MantineProvider>
    </StrictMode>,
)
