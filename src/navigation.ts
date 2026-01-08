import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'News',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Donate', href: '#', target: '_blank', variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Organization',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Our Mission', href: getPermalink('/about#mission') },
        { text: 'Team', href: getPermalink('/about#team') },
      ],
    },
    {
      title: 'News & Updates',
      links: [
        { text: 'Latest News', href: getBlogPermalink() },
        { text: 'Stories', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Contact Us', href: getPermalink('/contact') },
        { text: 'Donate', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    &copy; 2024 Non-Profit Organization. All rights reserved.
  `,
};
