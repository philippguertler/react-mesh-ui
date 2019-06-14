import React from 'react'
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Top = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.2);
  margin-bottom: 1.5rem;
  padding: 5px 0;

  .content {
    width: 95%;
    margin: auto;
    max-width: 5000px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .top-bar-left {
      flex: 1 1 auto;
    }
  }

  .logo-container {
    display: flex;
    text-decoration: none;
    color: #0096DC;
    img {
      width: auto;
      height: 1.7rem;
      border-style: none;
    }

    span {
      display: flex;
      align-items: center;
      margin-left: 0.7rem;
      text-transform: uppercase;
    }

    .color-dark {
      margin-left: 0.2rem;
      color: #3d3d42;
    }
  }
`

export default function TopBar() {
  return (
    <Top>
      <div className="content">
        <div className="top-bar-left">
          <Link className="logo-container" to="/">
            <img alt="" src={logo} />
            <span>Gentics
                <span className="color-dark">Mesh UI</span>
            </span>
          </Link>
        </div>
        <div className="content-right">
          <Button variant="contained">Admin</Button>
        </div>
      </div>
    </Top>
  )
}
