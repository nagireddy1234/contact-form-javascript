import ContactUsForm from '../../pages/contactUsForm';
import Home from '../../pages/home';
import pageNotFound from '../../pages/pageNotFound';

export const rootRoutes = [
    { path: '/', component: Home },
    { path: '/contact-us', component: ContactUsForm },
    { path: '/not-found', component: pageNotFound },
];
