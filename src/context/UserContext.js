import Router from 'next/router'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URI } from 'utils/variables'

let UserContext = React.createContext()
let { Provider, Consumer } = UserContext

function UserProvider({ children }) {
  let [user, setUser]     = useState(null)
  let [plans, setPlans]   = useState([])

  async function getUser() {
    let userId = localStorage.getItem('rbg_userId')
    if (userId) {
      if (!user) {
        let res = await axios.get(`${ API_URI }user/${ userId }/data`)
          .then(res => (res.data))
          .catch(err => console.log(err))
        setUser(res)
      }
    } else {
      Router.push('/signin')
    }
  }

  async function login() {
    await getUser()
  }

  function logout() {
    setUser(null)
    setPlans([])
    localStorage.removeItem('rbg_userId')
    Router.push('/signin')
  }

  async function getPlans() {
    let userId = localStorage.getItem('rbg_userId');
    if (userId) {
      if (plans.length == 0) {
        let res = await axios.get(`${ API_URI }user/${ userId }/plans`)
          .then(res => (res.data))
          .catch(err => console.log(err))
        setPlans(res || [])
      }
    }
  }

  return (
    <Provider value={{ user, getUser, login, logout, plans, getPlans }}>
      { children }
    </Provider>
  )
}

export { UserProvider, Consumer as UserConsumer, UserContext }