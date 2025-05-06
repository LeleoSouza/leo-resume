export interface HandleMenuClick {
  event: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>;
  querySelector: string;
}
export interface Props {
  window?: () => Window;
  children?: React.ReactElement<unknown>;
  handleMenuClick: (props: HandleMenuClick) => void;
}

export const linkedIn = 'https://www.linkedin.com/in/leonardo-elias-490188ba/';
export const gitHub = 'https://github.com/LeleoSouza';
