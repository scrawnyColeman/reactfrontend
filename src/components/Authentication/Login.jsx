import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Button from '../Button/component';

const StyledWrapper = styled.div`
    display: grid;
    grid-template-rows: max-content max-content;
    grid-gap: 30px;
    margin: 20vh auto;
`;
const StyledLogoContainer = styled.div`
    margin: 0 auto;
`;
const StyledFormContainer = styled.div`
    margin: auto;
`;
const StyledName = styled.div`
    display: block;
    font-size: 3rem;
`;

const Login = () => {
    const [hasAccount, setHasAccount] = useState(false);

    return (
        <StyledWrapper>
            <StyledLogoContainer>
                <StyledName>NJOY LEARNING</StyledName>
            </StyledLogoContainer>
            <StyledFormContainer>
                {hasAccount ? <LoginForm /> : <RegisterForm />}
                {hasAccount && (
                    <span>
                        Don't have an account?
                        <Button onClick={() => setHasAccount(false)} text="Register" size="large" variant="text" />
                    </span>
                )}
                {!hasAccount && (
                    <span>
                        Already have an account?
                        <Button onClick={() => setHasAccount(true)} text="Log in" size="small" variant="text" />
                    </span>
                )}
            </StyledFormContainer>
        </StyledWrapper>
    );
};
export default Login;
