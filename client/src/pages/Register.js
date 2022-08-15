import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SvgHermes } from '../assets/SvgHermes'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

export const Register = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  // const optionsToast = {
  //   position: 'top-right',
  //   autoClose: 5000,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   theme: 'dark'
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    // handleValidation()
    console.log('submit')
  }

  // const handleValidation = () => {
  //   const { username, email, password, confirmPassword } = values
  //   if (username.length < 6) {
  //     return 'Username must be at least 3 characters'
  //   } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
  //     return 'Email is not valid'
  //   } else if (password.length < 8) {
  //     return 'Password must be at least 6 characters'
  //   } else if (password !== confirmPassword) {
  //     // toast('Password does not match', optionsToast)
  //     return 'Passwords do not match'
  //   }
  // }

  const handleChange = (e) => {
    console.log(e.target.name, ':', e.target.value)
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
      {/* <ToastContainer /> */}
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
      font-size: 1rem;
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
