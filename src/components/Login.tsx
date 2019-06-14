import React, { FormEvent } from 'react'
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';

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

  function submit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    
  }

  return (
    <form onSubmit={submit}>
      <TextField autoFocus label="Username" />
      <TextField label="Password" />
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
