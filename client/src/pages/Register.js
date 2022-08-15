import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SvgHermes } from '../assets/SvgHermes'
import { SvgCheck } from '../assets/SvgCheck'
import { SvgDisCheck } from '../assets/SvgDisCheck'

export const Register = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // handleValidation()
    console.log('submit')
  }

  const verificacion = {
    username: values.username.length > 6,
    email:
      values.email.includes('@') && values.email.includes('.') &&
      !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email),
    password: values.password.length > 6,
    confirmPassword:
      values.confirmPassword === values.password &&
      values.confirmPassword.length > 6
  }

  const handleChange = (e) => {
    console.log(e.target.name, ':', e.target.value)
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <FromConteiner>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Head>
          <SvgHermes />
          <h1>Hermes</h1>
        </Head>
        <Inputs>
          <input
            type="text"
            placeholder="UserName"
            name="username"
            autoComplete="on"
            onChange={(e) => handleChange(e)}
          />
          {verificacion.username ? <SvgCheck /> : <SvgDisCheck />}
        </Inputs>
        <Inputs>
          <input
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="on"
            onChange={(e) => handleChange(e)}
          />
          {verificacion.email ? <SvgCheck /> : <SvgDisCheck />}
        </Inputs>
        <Inputs>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          {verificacion.password ? <SvgCheck /> : <SvgDisCheck />}
        </Inputs>
        <Inputs>
          <input
            type="password"
            placeholder="ConfirmPassword"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          {verificacion.confirmPassword ? <SvgCheck /> : <SvgDisCheck />}
        </Inputs>
        <button type="submit">Create User</button>
        <span>
          already have an account ? <Link to="/login">Login</Link>
        </span>
      </form>
    </FromConteiner>
  )
}

const FromConteiner = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: #131324;
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: #00000076;
    border-radius: 2rem;
    padding: 3rem;
    input {
      border: none;
      border-bottom: 1px solid #fffeee40;
      background: transparent;
      padding: 0.5rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      margin-right: 0.6rem;
      &:focus {
        /* outline: none; */
      }
    }
    button {
      border: none;
      border-radius: 9rem;
      padding: 1rem;
      background: #4e0eff;
      font-size: 1.5rem;
      font-weight: 900;
      transition: 0.5s ease-in-out;
      &:hover {
        background: #997af0;
      }
    }
    span {
      color: #fffeee40;
      text-align: center;
      a {
        color: #fffeeeaa;
        text-decoration: none;
        text-transform: none;
      }
    }
  }
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  img {
    height: 5rem;
  }
  h1 {
    color: white;
    text-transform: uppercase;
  }
`
const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
