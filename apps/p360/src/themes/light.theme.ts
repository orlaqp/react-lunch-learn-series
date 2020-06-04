import { createMuiTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: blue,
        secondary: pink,
    }
});

export default theme;
