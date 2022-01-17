import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsFillFileBarGraphFill } from 'react-icons/bs';
import { BsFillFileMusicFill } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';

export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
    },
    {
        title: 'Features',
        path: '/features',
        icon: <BsFillFileBarGraphFill />,
    },
    {
        title: 'Genres',
        path: '/genres',
        icon: <BsFillFileMusicFill />,
    },
    {
        title: 'Recommendations',
        path: '/recommendations',
        icon: <AiFillLike />,
    },
];