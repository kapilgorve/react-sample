import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
background-color: #1cbbb4;
padding: 4rem;
text-align: center;
`;

const HeaderTitle = styled.h2`
font-size: 40px;
color: white;
font-weight: lighter;
margin: 0;
`;

const Sub = styled.h4`
font-size: 20px;
color: #ffffffc7;
font-weight: lighter;
margin: 0;
`;


class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderTitle>EMI Calculator</HeaderTitle>
        <Sub>Calculate your Loan EMI & Total Interest Due</Sub>
      </HeaderContainer>
    );
  }
}

export default Header;
