import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AllUsersRoute } from '../utils/ApiRoutes'
import { Contacts } from '../components/contacts'

export const Chat = () => {
  const navigate = useNavigate()
  const [contacts, setContacts] = useState([])
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    if (!localStorage.getItem('chat-app-user')) navigate('/login')
    else {
      localStorage
        .getItem('chat-app-user')
        .then((res) => {
          JSON.parse(res)
        })
        .then((user) => {
          setCurrentUser(user)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [])

  useEffect(() => {
    if (currentUser) {
      if (currentUser.isAvatarImageSet) {
        axios
          .get(`${AllUsersRoute}/${currentUser._id}`)
          .then((res) => {
            setContacts(res.data)
          })
          .catch((err) => {
            console.error(err)
          })
      }else {
        navigate('/setAvatar')
      }
    }
  }, [currentUser])

  return (
    <Container>
      <div className="container">
        <Contacts contacts={contacts} />
      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background: #fff;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1024px) {
      grid-template-columns: 35% 65%;
    }
  }
`
