import React, { Fragment, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { SvgHermes } from '../assets/SvgHermes'
import axios from 'axios'
import { RegisterRoute } from '../utils/ApiRoutes'
import { toastOptions} from '../components/toast'

export const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  useEffect(() => {
    const user = localStorage.getItem('chat-app-user')
    if (user) {
      navigate('/')
    }
  }, [])

  const handleValidation = () => {
    const { username, email, password, confirmPassword } = values

    if (username.length < 6 || !username) {
      toast.error('Username debe contener mas de 6 characters', toastOptions)
      return false
    } else if (
      email.includes('@') === false ||
      email.includes('.') === false ||
      !email
    ) {
      toast.error('Email no valido', toastOptions)
      return false
    } else if (password.length < 8) {
      toast.error('Password debe contener mas de 8 characters', toastOptions)
      return false
    } else if (confirmPassword !== password) {
      toast.error('Las contraseñas no coinciden', toastOptions)
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (handleValidation()) {
      console.log('in validation')
      const { username, email, password } = values
      const { data } = await axios.post(RegisterRoute, {
        username,
        email,
        password
      })
      if (data.status === false) {
        toast.error(data.msg, toastOptions)
      } else if (data.status === true) {
        localStorage.setItem('chat-app-user', JSON.stringify(data.user))
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
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="on"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="ConfirmPassword"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>
            already have an account ? <Link to="/login">Login</Link>
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
      min-width: 18rem;
      width: 100%;
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
