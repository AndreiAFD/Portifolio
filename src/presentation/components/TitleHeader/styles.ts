import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 200px;
  background: ${({ theme }) => theme.purple_strong}e1;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    left: -20px;
    right: -20px;
    bottom: -90px;
    height: 170px;
    background: #ffffff40;
    animation: "title-header-shaddow" 0.7s forwards;
  }
`;
