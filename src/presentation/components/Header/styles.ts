import styled from "styled-components";

export const Container = styled.div`
  /* position: fixed; */

  height: 5em;
  background: white;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  padding: 0 73px;
  display: flex;
  justify-content: space-between;
  width: 100;

  @media (max-width: 414px) {
    padding: 0 10px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3px;
  /* border-bottom: 2px solid ${({ theme }) => theme.blue}; */
  &::after {
    content: "";
    height: 3px;
    width: 0;
    border-radius: 20px;
    background: ${({ theme }) => theme.blue};
    transition: width 0.4s;
  }

  &.active {
    &::after {
      width: 80%;
    }
  }

  @keyframes animateActive {
    to {
      width: 80%;
    }
  }

  @keyframes animateInactive {
    to {
      width: 0%;
    }
  }
`;
