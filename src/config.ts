// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { NavMenuOptions } from "./components/Header/types";


export const SITE_TITLE : string = 'Il Nido della Poiana';
export const SITE_DESCRIPTION : string = 'Casa Vacanze + Bed&Breakfast';
export const NAV_MENU : NavMenuOptions = [
    {
        name : 'Home',
        icon : 'home',
        path : '/'
    },
    {
        name : 'Photos',
        icon : 'photo_camera',
        path : '/photos'
    },
    {
        name : 'Location',
        icon : 'my_location',
        path : '/location'
    },
    {
        name : 'About',
        icon : 'import_contacts',
        path : '/about'
    }
]
