const ROUTES = [

    {
        name: 'home',
        path: '/',
    },
    {
        name: 'CompositionOfTheCommittee',
        path: '/slozeni-vyboru'
    },
    {
        name: 'CompositionOfTheUnits',
        path: '/slozeni-jednotek'
    }

];

const NavBarLinks = [
   /* {
        name: 'Conferences',
        path: '/',
    },
    {
        name: 'Profile',
        path: '/profile',
    },*/
];

const getAllRoutes = () => {
    return ROUTES;
};

const getAllNavLinks = () => {
    return NavBarLinks;
};

const getRoute = (name, params) => {
    let route = ROUTES.filter((route) => route.name === name)[0];
    if (params) {
        for (const [key, value] of Object.entries(params)) {
            route = { ...route, path: route.path.replace(`:${key}`, value) };
        }
    }
    return route;
};

export { getAllRoutes, getRoute, getAllNavLinks };