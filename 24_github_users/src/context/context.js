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
  // loading
  const [isLoading, setIsLoading] = useState(false)
  // error
  const [error, setError] = useState({ show: false, msg: '' })

  const checkRateLimit = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data
        setRequests(remaining)
        if (remaining === 0) {
          // throw an error
          toggleError(true, 'Sorry, you have exceeded hourly rate limit!')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(checkRateLimit, [])

  // error function
  function toggleError(show = false, msg = '') {
    setError({ show, msg })
  }

  // when user is searched in search bar and enter is clicked, we need to get the data from this API endpoint -  https://api.github.com/users/wesbos

  const searchGithubUser = async (user) => {
    toggleError() // ---> if need to switch off the errror by calling this so that the error won't stay this for next call even if user exists in next call
    // setIsLoading(true) // ---> we will work on loading later
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) => {
      console.log(err)
    }) // avoid try catch so directly catching here. But we don't use then, instead use await

    // if we enter user that doesn't exist then we don't get response. It will be undefined
    if (response) {
      setGithubUser(response.data)
      // MORE LOGIC COMING UP HERE
    } else {
      toggleError(true, `there is no user with the username - ${user}`)
    }
  }

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

// custom hook that starts with use
const useGlobalContext = () => {
  return useContext(GithubContext)
}

export { GithubProvider, useGlobalContext }
