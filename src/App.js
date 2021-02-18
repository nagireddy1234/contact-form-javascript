import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme/theme';
import Loader from './components/loader/Loader';
import { rootRoutes } from './routes/rootRoutes/rootRoutes';
import { ToastContainer } from 'react-toastify';
import { Close } from '@material-ui/icons';
import 'react-toastify/dist/ReactToastify.css';


const  App = ()=> {
    const CloseButton = ({ closeToast }) => <Close onClick={closeToast} />;
        return (
            <React.Fragment>
                <ToastContainer closeButton={CloseButton} />
                <MuiThemeProvider theme={theme}>
                    <Router>
                        <Suspense fallback={<Loader initial={true} />}>
                            <Switch>
                                {rootRoutes.map((item, i) => (
                                    <Route key={i} exact path={item.path} component={item.component} />
                                ))}
                            </Switch>
                        </Suspense>
                    </Router>
                </MuiThemeProvider>
            </React.Fragment>
        );
}

export default App;
