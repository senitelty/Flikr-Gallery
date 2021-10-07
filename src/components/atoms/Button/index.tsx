import React, { ButtonHTMLAttributes, FC } from 'react';

import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ $favoured: boolean }>`
  background-color: transparent;
  border-radius: 28px;
  border: 1px solid #ffffff;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 17px;
  padding: 13px 28px;
  text-decoration: none;
  text-shadow: 0 1px 0 #ffffff;
  ${({ $favoured }) =>
    $favoured &&
    css`
      background: rgb(152, 1, 59);
    `}

  &:hover {
    background: rgba(152, 1, 59, 0.56);
    ${({ $favoured }) =>
      $favoured &&
      css`
        background: rgb(152, 1, 59);
      `}
    transition: 0.5s ease;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

export const Button: FC<IButton> = ({ children, active, ...rest }) => (
  <StyledButton $favoured={active} {...rest}>
    {children}
  </StyledButton>
);
