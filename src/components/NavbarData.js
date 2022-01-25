import React from 'react';
import { AiFillHome, AiFillClockCircle } from 'react-icons/ai';
import { BsFillVinylFill, BsFillFileMusicFill } from 'react-icons/bs';
import { ImArrowUp } from 'react-icons/im';

export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
    },
    {
        title: 'Recently Played',
        path: '/recently-played',
        icon: <AiFillClockCircle />,
    },
    {
        title: 'Playlists',
        path: '/playlists',
        icon: <BsFillVinylFill />,
    },
    {
        title: 'Top Songs/Artists',
        path: '/top-songs-artists',
        icon: <ImArrowUp />,
    },
    // {
    //     title: 'Genres',
    //     path: '/genres',
    //     icon: <BsFillFileMusicFill />,
    // },
];