// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Geo, NavMenuOptions, PhotoList } from "./types";


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
];

export const PHOTO_LIST : PhotoList = [
    {
        name: 'one',
        alt: 'una foto de il nido della poiana',
        path: 'https://http.cat/200.jpg'
    },
    {
        name: 'one',
        alt: 'una foto de il nido della poiana',
        path: 'https://http.cat/201.jpg'
    },
    {
        name: 'one',
        alt: 'una foto de il nido della poiana',
        path: 'https://http.cat/202.jpg'
    },
    {
        name: 'one',
        alt: 'una foto de il nido della poiana',
        path: 'https://http.cat/203.jpg'
    },
];

export const GEO : Geo = {
    lon : 0,
    lat : 0
}
