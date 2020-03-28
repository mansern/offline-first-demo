import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  flex: 1;
`;

const Header = styled.div`
  width: 350px;
  background: #051e34;
  margin: 0 auto;
  text-align: center;
  padding: 20px 0px 0px;

  img {
    max-height: 30px;
    margin-bottom: 20px;
  }
`;

const Title = styled.div`
  width: 350px;
  background: #051e34;
  background-color: rgba(71, 98, 130, 0.2);
  color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
`;

const Content = styled.div`
  .form {
    width: 350px;
    background: #fff;
    border: 1px solid #051e34;
    padding: 25px;
    margin: 0 auto;
    text-align: center;
  }

  .form-field {
    margin-bottom: 15px;
    text-align: left;
  }

  .form-field input.form-control {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
  }

  .form-heading {
    margin-bottom: 15px;
    font-size: 1.5rem;
  }

  .form-action {
    background-color: #009;
    width: 100%;
  }

  .form-link {
    margin-top: 15px;
    font-size: 0.85rem;
    text-align: left;

    a {
      display: inline-block;
      margin-bottom: 5px;
    }
  }

  .btn {
    background-color: #007bff;
    border-color: #007bff;
  }
`;

const Container = ({ children, heading }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Header>
          {/* <img src={require('../../images/logo_white.png')} className="logo" /> */}
          <Title>{heading}</Title>
        </Header>
        <Content>{children}</Content>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Container;
