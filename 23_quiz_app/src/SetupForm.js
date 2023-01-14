import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quiz, handleSubmit, handleChange, error } = useGlobalContext()
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>Setup quiz</h2>
          {/* amount */}
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            {/* we need to match name prop to the state value and id to label's htmlFor */}
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={(e) => handleChange(e)}
              className="form-input"
              min={1}
              max={50}
            />
          </div>
          {/* category */}
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={(e) => handleChange(e)}
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>
          {/* difficulty */}
          <div className="form-control">
            <label htmlFor="difficulty">difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={(e) => handleChange(e)}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard ">hard </option>
            </select>
          </div>

          {error && (
            <p className="error">
              can't generate questions, please try different options
            </p>
          )}
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            start
          </button>
        </form>
      </section>
    </main>
  )
}

export default SetupForm
