import React from 'react'
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome className="icon" />,
  },
  {
    id: 2,
    url: '/#',
    text: 'team',
    icon: <FaUserFriends className="icon" />,
  },
  {
    id: 3,
    url: '/#',
    text: 'projects',
    icon: <FaFolderOpen className="icon" />,
  },
  {
    id: 4,
    url: '/#',
    text: 'calendar',
    icon: <FaCalendarAlt className="icon" />,
  },
  {
    id: 5,
    url: '/#',
    text: 'documents',
    icon: <FaWpforms className="icon" />,
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: <FaSketch />,
  },
]
