import styled, { css } from 'styled-components';

interface IGridSizes {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const SM = '576px';
const MD = '768px';
const LG = '992px';
const XL = '1200px';

export const GridItem = styled.div<IGridSizes>`
  display: block;
  flex-grow: 0;
  ${({ xs }) => css`
    max-width: ${8.3 * (xs ?? 12)}%;
    flex-basis: ${8.3 * (xs ?? 12)}%;
  `}
  ${({ sm }) =>
    sm &&
    css`
      @media (min-width: ${SM}) {
        max-width: ${8.3 * sm}%;
        flex-basis: ${8.3 * sm}%;
      }
    `}
  ${({ md }) =>
    md &&
    css`
      @media (min-width: ${MD}) {
        max-width: ${8.3 * md}%;
        flex-basis: ${8.3 * md}%;
      }
    `}
  ${({ lg }) =>
    lg &&
    css`
      @media (min-width: ${LG}) {
        max-width: ${8.3 * lg}%;
        flex-basis: ${8.3 * lg}%;
      }
    `}
  ${({ xl }) =>
    xl &&
    css`
      @media (min-width: ${XL}) {
        max-width: ${8.3 * xl}%;
        flex-basis: ${8.3 * xl}%;
      }
    `}
`;

export const Grid = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
`;
