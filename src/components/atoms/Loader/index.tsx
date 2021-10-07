import React, { FC } from 'react';

import styled, { css, keyframes } from 'styled-components';

const bounce = keyframes`
  to {
    opacity: 0.3;
    transform: translate3d(0, -1rem, 0);
  }
`;

const StyledLoader = styled.div<{ $bubbles: number }>`
  margin: 48px;
  display: flex;
  justify-content: center;

  div {
    width: 1rem;
    height: 1rem;
    margin: 2rem 0.3rem;
    background: #98013b8e;
    border-radius: 50%;
    animation: 0.9s ${bounce} infinite alternate;

    ${({ $bubbles }) =>
      [...Array($bubbles)].map(
        (_value, index) => css`
          &:nth-child(${index + 1}) {
            animation-delay: ${0.3 * (index + 1)}s;
          }
        `
      )}
  }
`;

const BUBBLE_COUNT = 5;

export const Loader: FC = () => (
  <StyledLoader $bubbles={BUBBLE_COUNT}>
    {[...Array(BUBBLE_COUNT)].map((_value, index) => (
      <div key={index} />
    ))}
  </StyledLoader>
);
