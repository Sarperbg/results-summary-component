import React from 'react'

const SummaryComponent = () => {
  return (
    <div className="card-description">

      <h4 className="card-description-title">Summary</h4>

      <div class="card-description-item">
        <div className="card-description-head-holder">
          <image src="./assets/images/icon-reaction.svg" alt="" />
          <h5 className="card-description-item-name"> Reaction</h5>
        </div>
        <span className="card-description-item-score"><span class="score">80</span> / 100</span>
      </div>

      <div className="card-description-item">
        <div className="card-description-head-holder">
          <image src="./assets/images/icon-memory.svg" alt="" />
          <h5 className="card-description-item-name"> Memory</h5>
        </div>
        <span className="card-description-item-score"><span class="score">92</span> / 100</span>
      </div>

      <div className="card-description-item">
        <div className="card-description-head-holder">
          <image src="./assets/images/icon-verbal.svg" alt="" />
          <h5 className="card-description-item-name"> Verbal</h5>
        </div>
        <span className="card-description-item-score"><span class="score">61</span> / 100</span>
      </div>

      <div className="card-description-item">
        <div className="card-description-head-holder">
          <image src="./assets/images/icon-visual.svg" alt="" />
          <h5 className="card-description-item-name"> Visual</h5>
        </div>
        <span className="card-description-item-score"><span class="score">72</span> / 100</span>
      </div>

      <button className="card-description-button" href="#">Continue</button>

    </div>

  )
}

export default SummaryComponent