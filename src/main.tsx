import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@mantine/core/styles.css';
import './index.css'


import {createTheme, MantineProvider, MantineThemeOverride, rem} from '@mantine/core';
import {QueryClient, QueryClientProvider} from "react-query";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes.tsx";
const theme: MantineThemeOverride = createTheme({

    primaryColor: 'brand',
    fontFamily: 'satoshi',
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

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <MantineProvider theme={theme}>
                <RouterProvider router={router}/>
            </MantineProvider>
        </QueryClientProvider>
    </StrictMode>,
)
