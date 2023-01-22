import React, { useState, useEffect, createContext, useContext } from 'react'
import mockUser from './mockData/mockUser'
import mockRepos from './mockData/mockRepos'
import mockFollowers from './mockData/mockFollowers'
import axios from 'axios'

const rootUrl = 'https://api.github.com'

const GithubContext = createContext()

const GithubProvider = ({ children }) => {
  // github user state is the user we get from mockData / the user we search for (not the user who is logged in)
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)

  // to check remaining requests
  const [requests, setRequests] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  // TODO: error

  //^ TYPE 1 - setup

  // check rate limit (remaining requests)
  // const checkRateLimit = async () => {
  //   const result = await axios(`${rootUrl}/rate_limit`)
  //   console.log(result)
  // }
  // useEffect(() => {
  //   console.log('hey app loaded')
  //   checkRateLimit()
  // }, [])

  //^ TYPE 2 - setup

  // check rate limit (remaining requests)
  // const checkRateLimit = () => {
  //   axios(`${rootUrl}/rate_limit`)
  //     .then((result) => {
  //       console.log(result)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }
  // useEffect(() => {
  //   checkRateLimit()
  // }, [])

  //^ TYPE 3 - setup - similar to type 2 (inisde the function itself)
  // useEffect(() => {
  //   axios(`${rootUrl}/rate_limit`)
  //     .then((result) => {
  //       console.log(result)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }, [])

  //^ TYPE 4 - setup - similar to type 3, but put cb outside of useEffect and give it a name called checkRateLimit
  const checkRateLimit = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data
        setRequests(remaining)
        if (remaining === 0) {
          // throw an error
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(checkRateLimit, [])

  return (
    <GithubContext.Provider value={{ githubUser, repos, followers, requests }}>
      {children}
    </GithubContext.Provider>
  )
}

// custom hook that starts with use
const useGlobalContext = () => {
  return useContext(GithubContext)
}

export { GithubProvider, useGlobalContext }
