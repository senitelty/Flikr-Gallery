import React, { FC } from 'react';

import styled from 'styled-components';

const StyledImageContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.6);
  pointer-events: none;
  opacity: 0;
  border-radius: 6px;
`;

const StyledImage = styled.div<{ $url: string }>`
  float: left;
  position: relative;
  width: 100%;
  padding-bottom: 73%;
  margin: 1.66%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ $url }) => $url});
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.4) 3px 3px 5px;
  transition: 0.3s;
  &:hover ${StyledImageContent} {
    opacity: 1;
    pointer-events: initial;
    transition: 0.2s ease;
  }
`;

export const ImageCard: FC<{ url: string }> = ({ children, url }) => (
  <StyledImage $url={url}>
    <StyledImageContent>{children}</StyledImageContent>
  </StyledImage>
);
