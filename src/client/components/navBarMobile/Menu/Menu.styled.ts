//@ts-nocheck
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  width: 40vh;
  text-align: right;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
 
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 50%;
  }

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: left;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }

    a {
      color: ${({ theme }) => theme.primaryDark};
    }

    a:hover {
      color: #bd6658;
    }
  }
`;