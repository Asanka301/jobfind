import { usePathname } from 'next/navigation';

import { Bell, Briefcase, Home, Settings, User } from 'lucide-react';

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: 'Home',
      href: '/',
      icon: <Home size={20} />,
      active: pathname === '/',
      position: 'top',
    },
    // {
    //   name: 'Profile',
    //   href: '/profile',
    //   icon: <User size={20} />,
    //   active: isNavItemActive(pathname, '/profile'),
    //   position: 'top',
    // },
    // {
    //   name: 'Notifications',
    //   href: '/notifications',
    //   icon: <Bell size={20} />,
    //   active: isNavItemActive(pathname, '/notifications'),
    //   position: 'top',
    // },
    // {
    //   name: 'Projects',
    //   href: '/projects',
    //   icon: <Briefcase size={20} />,
    //   active: isNavItemActive(pathname, '/projects'),
    //   position: 'top',
    // },
    {
      name: 'Banking',
      href: '/banking',
      icon: <Briefcase size={20} />,
      active: isNavItemActive(pathname, '/banking'),
      position: 'top',
    },
    {
      name: 'Government',
      href: '/government',
      icon: <Briefcase size={20} />,
      active: isNavItemActive(pathname, '/government'),
      position: 'top',
    },

    {
      name: 'Health',
      href: '/health',
      icon: <Briefcase size={20} />,
      active: isNavItemActive(pathname, '/health'),
      position: 'top',
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: <Settings size={20} />,
      active: isNavItemActive(pathname, '/settings'),
      position: 'bottom',
    },
  ];
};


export const NavItems2 = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: 'Contact',
      href: '/',
      icon: <Home size={20} />,
      active: pathname === '/',
      position: 'top',
    },
    // {
    //   name: 'Profile',
    //   href: '/profile',
    //   icon: <User size={20} />,
    //   active: isNavItemActive(pathname, '/profile'),
    //   position: 'top',
    // },
    // {
    //   name: 'Notifications',
    //   href: '/notifications',
    //   icon: <Bell size={20} />,
    //   active: isNavItemActive(pathname, '/notifications'),
    //   position: 'top',
    // },
    // {
    //   name: 'Projects',
    //   href: '/projects',
    //   icon: <Briefcase size={20} />,
    //   active: isNavItemActive(pathname, '/projects'),
    //   position: 'top',
    // },
    {
      name: 'About',
      href: '/banking',
      icon: <Briefcase size={20} />,
      active: isNavItemActive(pathname, '/banking'),
      position: 'top',
    },
    {
      name: 'GGGG',
      href: '/government',
      icon: <Briefcase size={20} />,
      active: isNavItemActive(pathname, '/government'),
      position: 'top',
    },
    {
      name: 'JJJ',
      href: '/settings',
      icon: <Settings size={20} />,
      active: isNavItemActive(pathname, '/settings'),
      position: 'bottom',
    },
  ];
};