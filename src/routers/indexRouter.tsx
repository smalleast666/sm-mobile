import Home from './content';
import Login from '~/views/Login';
import Register from '~/views/Register';

const indexRoutes = [
    { path: '/register', component: Register, exact: true , key: 1 },
    { path: '/login', component: Login, exact: true , key: 2 },
    { path: '/', component: Home, exact: false , key: 3 },
];

export default indexRoutes;