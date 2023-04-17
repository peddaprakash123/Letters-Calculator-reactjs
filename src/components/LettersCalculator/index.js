import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  textCount = event => {
    const inputValue = event.target.value

    if (inputValue === '') {
      return this.setState({count: 0})
    }
    return this.setState({count: inputValue.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image1"
        />
        <div className="card2">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="inputElement">
            <label htmlFor="inputText" className="text">
              Enter the phrase
            </label>
            <input
              type="text"
              id="inputText"
              className="input1"
              placeholder="Enter the phrase"
              onChange={this.textCount}
            />
          </div>

          <p className="button">No.of letters: {count}</p>
        </div>
      </div>
    )
  }
}
export default LettersCalculator