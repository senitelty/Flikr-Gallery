import styled from 'styled-components';

export const StyledGridItem = styled.div`
  padding: 8px;
`;

export const StyledImageContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.6);
  pointer-events: none;
  opacity: 0;
`;

export const StyledText = styled.p`
  max-width: 60%;
  color: white;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
`;

export const StyledButton = styled.button`
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

  &:hover {
    background: rgba(152, 1, 59, 0.56);
    transition: 0.5s ease;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

export const StyledImage = styled.div<{ $url: string }>`
  float: left;
  position: relative;
  width: 100%;
  padding-bottom: 75%;
  margin: 1.66%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ $url }) => $url});
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.5) 3px 3px 5px;
  transition: 0.3s;
  &:hover ${StyledImageContent} {
    opacity: 1;
    pointer-events: initial;
    transition: 0.2s ease;
  }
`;
