import { createMuiTheme } from '@material-ui/core';
import { colors } from '../theme/colors';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'CircularXXWeb',
    },
    overrides: {
        MuiCircularProgress: {
            colorPrimary: {
                color: colors.black,
            },
        },
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
});

export default theme;
