import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Features', href: getPermalink('/#features') },
    { text: 'How It Works', href: getPermalink('/#howitworks') },
    { text: 'The Story', href: getPermalink('/about') },
    { text: 'Grab Your Vanity URL', href: getPermalink('/pricing') },
  ],
  actions: [
    { text: 'Get Started - $99', variant: 'primary', href: '/pricing' }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Winning Plumber — Professional Booking for Local Pros',
      links: [
        { text: "Claim Your Spot – $99", href: getPermalink('/pricing') },
        { text: 'Why We Love Service Businesses', href: getPermalink('/about') },
        { text: 'Support', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms of Service', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: '🔧 Winning Plumber — Fill Your Dispatch on Autopilot. | © ' + new Date().getFullYear() + ' Winning Plumber',
};
