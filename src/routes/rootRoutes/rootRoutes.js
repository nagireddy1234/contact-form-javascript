import React from 'react';
const ContactUsForm = React.lazy(() => import('../../pages/contactUsForm'));
const Home = React.lazy(() => import('../../pages/home'));

export const rootRoutes = [
    { path: '/', component: Home },
    { path: '/contact-us', component: ContactUsForm },
];
