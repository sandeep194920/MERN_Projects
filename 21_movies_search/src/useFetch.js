import { useEffect, useState } from 'react'

function useFetch(url) {
  const [error, setError] = useState({ show: false, msg: '' })
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.Response === 'True') {
        setData(data)
        setError((prevError) => {
          return {
            ...prevError,
            show: false,
            msg: '',
          }
        })
      } else {
        setError({ show: true, msg: data.Error })
      }
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    fetchData(url)
  }, [url])
  return { data, error, isLoading }
}

export default useFetch
