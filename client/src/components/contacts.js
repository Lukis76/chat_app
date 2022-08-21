import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Logo from '../assets//SvgHermes'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AllUsersRoute } from '../utils/ApiRoutes'

export const Contacts = ({Contacts, currentUser}) => {
  return (
    <Container>
      <div className="container">contacts</div>
    </Container>
  )
}

const Container = styled.div``
