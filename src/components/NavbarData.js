import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Genres',
        path: '/genres',
        icon: <FaIcons.FaCartPlus />,
    },
    {
        title: 'Recommendations',
        path: '/recommendations',
        icon: <FaIcons.FaCartPlus />,
    },
]