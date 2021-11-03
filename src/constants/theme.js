import { createTheme } from '@material-ui/core/styles';
import { primaryColor, neutralColor } from './colors';


export const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: neutralColor
        },
        text: {
            primary: neutralColor,
            secondary: '#000000'
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    }
})
