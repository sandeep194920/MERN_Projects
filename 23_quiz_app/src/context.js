import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''

const tempURL =
  'https://opentdb.com/api.php?amount=10&category=21&type=multiple'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // once waiting is set to false, then we can fetch and show the questions. Till then (as long as it is true), we will show the form
  const [waiting, setWaiting] = useState(true)
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  // to display the proper question, we have index state
  const [index, setIndex] = useState(0)
  // number of correct answers
  const [correct, setCorrect] = useState(0)
  const [error, setError] = useState(false)

  // once all the questions are answered the modal is shown
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchQuestions = async (url) => {
    setLoading(true)
    setWaiting(false)
    const response = await axios(url).catch((err) => console.log(err))
    if (response) {
      const data = response.data.results
      if (data.length > 0) {
        setQuestions(data)
        setLoading(false)
        setError(false)
        setWaiting(false)
      } else {
        setWaiting(true)
        setError(true)
      }
    } else {
      setWaiting(true)
    }
  }

  const nextQuestion = () => {
    setIndex((prevIndex) => {
      const index = prevIndex + 1
      if (index > questions.length - 1) {
        openModal()
        return 0
      }
      return index
    })
  }

  const checkAnswer = (value) => {
    if (value) {
      setCorrect((prev) => prev + 1)
    }
    nextQuestion()
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    // once we close the modal, we need this waiting to be true so that we come to initial phase of showing categories
    setWaiting(true)
    setCorrect(0)
    setIsModalOpen(false)
  }

  // fetch data once the user selects categories
  useEffect(() => {
    fetchQuestions(tempURL)
  }, [])

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        isModalOpen,
        nextQuestion,
        checkAnswer,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
