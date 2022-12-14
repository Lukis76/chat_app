import React, { Fragment, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { SvgHermes } from '../assets/SvgHermes'
import axios from 'axios'
import { LoginRoute } from '../utils/ApiRoutes'
import { toastOptions } from '../components/toast'

export const Login = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  useEffect(() => {
    const user = localStorage.getItem('chat-app-user')
    if (user) {
      navigate('/')
    }
  }, [])

  const handleValidation = () => {
    const { username, password } = values
    console.log('validando por aca')
    if (username === '' || password === '') {
      toast.error('Email and password is required', toastOptions)
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (handleValidation()) {
      console.log('in validation')
      const { username, password } = values
      const { data } = await axios.post(LoginRoute, {
        username,
        password
      })
      if (data.status === false) {
        toast.error(data.msg, toastOptions)
      }
      if (data.status === true) {
        console.log(data)
        console.log(JSON.stringify(data.usernameCheck))
        localStorage.setItem('chat-app-user', JSON.stringify(data.usernameCheck))
        navigate('/')
      }
    }
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <Fragment>
      <FromConteiner>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Head>
            <SvgHermes />
            <h1>Hermes</h1>
          </Head>

          <input
            type="text"
            placeholder="UserName"
            name="username"
            autoComplete="on"
            onChange={(e) => handleChange(e)}
            min="6"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />

          <button type="submit">Login</button>

          <span>
            Don't have an account ? <Link to="/register">Register</Link>
          </span>
        </form>
      </FromConteiner>
      <ToastContainer />
    </Fragment>
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
      min-width: 18rem;
      font-size: 1rem;
      margin-right: 0.6rem;
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
