import React, { Fragment, useState, useEffect } from 'react'
// import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
// import { SvgHermes } from '../assets/SvgHermes'
import axios from 'axios'
// import { SetAvatarRoute } from '../utils/ApiRoutes'
// import { toastOptions} from '../components/toast'
import {Buffer} from 'buffer'

export const SetAvatar = () => {
  const api = 'https://api.multiavatar.com/45678945'

  // const navigate = useNavigate()

  const [avatars, setAvatars] = useState([])

  const [loading, setLoading] = useState(true)

  const [selectedAvatar, setSelectedAvatar] = useState(undefined)

  // const setProfilePicture = async () => {}

  useEffect( async () => {
    const data = []
    for (let i = 0; i < 4; i++) {
      const image = await axios.get(
        `${api}/${Math.round(Math.random() * 1000)}`
      )
      const buffer = new Buffer(image.data)
      data.push(buffer.toString('base64'))
    }
    setAvatars(data)
    setLoading(false)
  }, [])

  return (
    <Fragment>
      <Container>
        <div className="title-container">
          <h1>Pick an avavtar as your profile picture</h1>
        </div>
        <div className="avatars">
          {avatars.map((avatar, index) => {
            return (
              <div
                key={index}
                className={`avatar ${
                  selectedAvatar === index ? 'selected' : ''
                }`}
              >
                <img
                  src={`data:image/svg+xml;base64,${avatar}`}
                  alt="avatar"
                  onClick={() => setSelectedAvatar(index)}
                />
              </div>
            )
          })}
        </div>
      </Container>
      {/* <ToastContainer /> */}
    </Fragment>
  )
}

const Container = styled.div``
