import { css } from 'styled-components';

export const breakpoints = {
  desktop: 1280,
  mobile: 768,
  tablet: 960,
};
type BreakpointKeys = keyof typeof breakpoints;

export const colors = {
  error: {
    contrastText: '#fff',
    dark: '#d32f2f',
    light: '#e57373',
    main: '#f44336',
  },
  grey: {
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161',
  },
  primary: {
    contrastText: '#fff',
    dark: '#7200ca',
    light: '#e254ff',
    main: '#aa00ff',
  },
  secondary: {
    contrastText: '#000',
    dark: '#99cc60',
    light: '#ffffc2',
    main: '#ccff90',
  },
};
const fonts = {};
const fontWeights = {
  bold: 700,
  light: 300,
  regular: 400,
};
const mq = {
  between: (min: BreakpointKeys, max: BreakpointKeys) => (
    ...args: [TemplateStringsArray, ...any[]]
  ) => css`
    @media (min-width: ${props =>
        props.theme.breakpoints[min]}px) and (max-width: ${props =>
        props.theme.breakpoints[max] - 1}px) {
      ${css(...args)}
    }
  `,
  down: (key: BreakpointKeys) => (
    ...args: [TemplateStringsArray, ...any[]]
  ) => css`
    @media (max-width: ${props => props.theme.breakpoints[key] - 1}px) {
      ${css(...args)}
    }
  `,
  up: (key: BreakpointKeys) => (
    ...args: [TemplateStringsArray, ...any[]]
  ) => css`
    @media (min-width: ${props => props.theme.breakpoints[key]}px) {
      ${css(...args)}
    }
  `,
};
const zIndex = {
  appBar: 1100,
  drawer: 1200,
  mobileStepper: 1000,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

const theme = {
  borderRadius: 4,
  breakpoints,
  colors,
  fontWeights,
  fonts,
  mq,
  spacing: 8,
  zIndex,
};

export default theme;
