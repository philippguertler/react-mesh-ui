import React from 'react'
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import { useRedirect } from 'util/hooks';
import * as api from 'api/api';
import { namedFormSubmit } from 'util/form';

const Container = styled.div`
  text-align: center;
`

const LoginHeader = styled.div`
  font-weight: 200;
  text-transform: uppercase;
  line-height: 1;
`

const NameCompany = styled.div`
  color: #0096DC;
  font-size: 2.8rem;
`

const NameApp = styled.div`
  font-size: 4.1rem;
  color: #79797d;
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
      <TextField name="username" autoFocus label="Username" />
      <TextField name="password" label="Password" />
      <Button type="submit" variant="contained" color="primary">Log In</Button>
    </form>
  )
};

export default function Login() {
  return (
    <Container>
      <LoginHeader>
        <NameCompany>Gentics</NameCompany>
        <NameApp>Mesh</NameApp>
      </LoginHeader>

      <LoginForm />
    </Container>
  )
}
