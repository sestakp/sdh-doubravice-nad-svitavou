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
    },    
    {
        name: 'YoungFirefighters',
        path: '/mladi-hasici'
    },
    {
        name: 'YoungFirefightersQuiz',
        path: '/mladi-hasici-kviz'
    },
    {
        name: 'Contact',
        path: '/kontakt'
    },
    {
        name: 'Login',
        path: '/prihlaseni'
    },
    {
        name: 'News',
        path: '/novinky'
    },    
    {
        name: 'Cas20t815',
        path: '/equipment/cas20t815'
    },    
    {
        name: 'Cas25',
        path: '/equipment/cas25'
    },    
    {
        name: 'Pps8',
        path: '/equipment/pps8'
    },    
    {
        name: 'Pps12',
        path: '/equipment/pps12'
    },
    {
        name: 'GuestBook',
        path: '/kniha-navstev'
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