import { createMuiTheme } from '@material-ui/core';
import yellow from '@material-ui/core/colors/yellow';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: yellow,
        secondary: green,
    }
});

export default theme;
