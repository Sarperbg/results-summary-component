import React from 'react'

const ResultComponent = () => {
  return (
    <div className="card">

      <div className="card-header">

        <h1 className="card-your-result">Your Result</h1>

        <div class="card-header-score-container">

        <h2 class="card-header-accumulated-score">76</h2>
        <span class="card-header-total-score">of 100</span>

        </div>

        <h3 class="card-header-feedback">Great</h3>

        <p class="card-header-feedback-description">
          You scored higher than 65% of the people who have taken these tests.
        </p>

      </div>
    </div>

  )
}

export default ResultComponent