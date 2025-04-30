interface NavItems {
  displayValue: string;
  querySelector: string;
}
export const drawerWidth = 240;
export const navItems: NavItems[] = [
  {
    displayValue: 'About',
    querySelector: '#about-me-anchor',
  },
  {
    displayValue: 'Resume',
    querySelector: '#resume-page-anchor',
  },
  {
    displayValue: 'Contact',
    querySelector: '#contact-page-anchor',
  },
];
