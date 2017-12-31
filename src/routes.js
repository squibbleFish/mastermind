import Home from './components/home';

export const routes = [
    {
        path: '/sign-up',
        component: Home,
    },
    {
    path: '/login',
    component: '',
    },
    {
        path: '/game/:id/create',
        component: ''
    },
    {
        path: '/game/:id',
        component: ''
    },
    {
        path: '/',
        component: '',
        exact: true
    },
];