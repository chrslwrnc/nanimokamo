import { css } from 'styled-components';
import { BREAKPOINTS } from './breakpoints';

export const media = (minBreakpoint, maxBreakpoint, orientation) => (
  ...args
) => css`
  @media (min-width: ${BREAKPOINTS[minBreakpoint][0]}px)
    ${maxBreakpoint &&
      `and (max-width: ${BREAKPOINTS[maxBreakpoint][0] - 1}px)`}
    ${orientation && `and (orientation: ${orientation})`} {
    ${css(...args)}
  }
`;
