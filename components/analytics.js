import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-732B6BF2S5');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
