import React, { Suspense } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme/theme';
import Loader from './components/loader/Loader';
import UserForm from './pages/userForm/Index';

export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Loader initial={false} />
                <MuiThemeProvider theme={theme}>
                    <Suspense fallback={<Loader initial={true} />}>
                        <UserForm />
                    </Suspense>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}

export default App;
