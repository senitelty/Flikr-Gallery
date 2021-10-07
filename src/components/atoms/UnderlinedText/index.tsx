import React, { FC } from 'react';

import styled from 'styled-components';

const StyledTextContainer = styled.div`
  max-width: 60%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
`;

const StyledTitle = styled.p`
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  font-weight: bold;
  max-width: 100%;
  margin-bottom: 8px;
  margin-top: 8px;
`;

const Divider = styled.div`
  border-bottom: white solid 2px;
  width: 70%;
`;

export const UnderlinedText: FC<{ title: string }> = ({ title, ...rest }) => (
  <StyledTextContainer {...rest}>
    <StyledTitle>{title}</StyledTitle>
    <Divider />
  </StyledTextContainer>
);
