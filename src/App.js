import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme/theme';
import Loader from './components/loader/Loader';
import { rootRoutes } from './routes/rootRoutes/rootRoutes';
import { ToastContainer } from 'react-toastify';
import { Close } from '@material-ui/icons';
import 'react-toastify/dist/ReactToastify.css';
const Notfound = React.lazy(() => import('./pages/pageNotFound'));

const App = () => {
    const CloseButton = ({ closeToast }) => <Close onClick={closeToast} />;
    return (
        <React.Fragment>
            <ToastContainer closeButton={CloseButton} hideProgressBar={true} />
            <MuiThemeProvider theme={theme}>
                <Router>
                    <Suspense fallback={<Loader />}>
                        <Switch>
                            {rootRoutes.map((item, i) => (
                                <Route exact key={i} path={item.path} component={item.component} />
                            ))}
                            <Route path="*" component={Notfound} />
                        </Switch>
                    </Suspense>
                </Router>
            </MuiThemeProvider>
        </React.Fragment>
    );
};

export default App;
