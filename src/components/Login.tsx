import React from 'react'
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import { useRedirect } from 'util/hooks';
import * as api from 'api/api';
import { namedFormSubmit } from 'util/form';

const Container = styled.div`
  text-align: center;
  
  .login-header {
    font-weight: 200;
    text-transform: uppercase;
    line-height: 1;

    .name-company {
      color: #0096DC;
      font-size: 2.8rem;
    }

    .name-app {
      font-size: 4.1rem;
      color: #79797d;
    }
  }
`

const StyledTextField = styled(TextField)`
  display: block;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`

const LoginForm = () => {
  const [Redirecter, redirect] = useRedirect("/editor");

  async function submit(formValues: any) {
    await api.login(formValues);
    redirect();
  }

  return (
    <form onSubmit={namedFormSubmit(submit)}>
      <Redirecter />
      <StyledTextField name="username" autoFocus label="Username" />
      <StyledTextField type="password" name="password" label="Password" />
      <Button type="submit" variant="contained" color="primary">Log In</Button>
    </form>
  )
};

export default function Login() {
  return (
    <Container>
      <div className="login-header">
        <div className="name-company">Gentics</div>
        <div className="name-app">Mesh</div>
      </div>

      <LoginForm />
    </Container>
  )
}
