import { css } from 'styled-components';

const breakpoints = {
  desktop: 1280,
  mobile: 768,
  tablet: 960,
};
type BreakpointKeys = keyof typeof breakpoints;

const colors = {};
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

const theme = {
  breakpoints,
  colors,
  fontWeights,
  fonts,
  mq,
};

export default theme;
