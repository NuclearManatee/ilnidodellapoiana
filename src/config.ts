// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { AboutSection, Geo, NavMenuOptions, PhotoList } from "./types";


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
        path: './img/2.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il nido della poiana',
        path: './img/1.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il nido della poiana',
        path: './img/3.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il nido della poiana',
        path: './img/4.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il nido della poiana',
        path: './img/5.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il nido della poiana',
        path: './img/6.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il nido della poiana',
        path: './img/7.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il nido della poiana',
        path: './img/8.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il nido della poiana',
        path: './img/9.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il nido della poiana',
        path: './img/10.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il nido della poiana',
        path: './img/11.jpeg'
    },
    {
        name: 'one',
        alt: 'una foto de il nido della poiana',
        path: './img/12.jpeg'
    }
];

export const GEO : Geo = {
    lon : 9.2094,
    lat : 44.9794
}

export const ABOUT_SECTION : AboutSection = {
    linkList : [
        {
            imgPath : '/img/airbnb.png',
            link : 'https://it.airbnb.ch/rooms/634572383980070682',
            description : 'AirBnB'
        },
        {
            imgPath : '/img/booking.png',
            link : 'https://www.booking.com/hotel/it/il-nido-della-poiana-montalto-pavese.it.html',
            description : 'Booking'
        },
        {
            imgPath : '/img/ilcasaledellapoiana.png',
            link : 'https://www.facebook.com/groups/411349850989553',
            description : 'Il Casale della Poiana'
        }
    ]
}
