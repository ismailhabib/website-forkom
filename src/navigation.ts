import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Beranda',
      href: getPermalink('/'),
    },
    {
      text: 'Tentang Kami',
      href: getPermalink('/about'),
    },
    {
      text: 'Berita',
      href: getBlogPermalink(),
    },
    {
      text: 'Hubungi Kami',
      href: getPermalink('/contact'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Organisasi',
      links: [
        { text: 'Tentang Kami', href: getPermalink('/about') },
        { text: 'Misi Kami', href: getPermalink('/about#mission') },
        { text: 'Tim', href: getPermalink('/about#team') },
      ],
    },
    {
      title: 'Berita & Pembaruan',
      links: [{ text: 'Berita Terbaru', href: getBlogPermalink() }],
    },
    {
      title: 'Dukungan',
      links: [{ text: 'Hubungi Kami', href: getPermalink('/contact') }],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    &copy; 2024 Forum Komunikasi NL. Seluruh hak cipta dilindungi.
  `,
};
