// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: true, showLastName: true}

  onShowFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  onShowLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-container">
          <div className="button-container">
            <button
              type="button"
              className="button"
              onClick={this.onShowFirstName}
            >
              Show/Hide FirstName
            </button>
            {showFirstName && <p className="para">Joe</p>}
          </div>
          <div className="button-container">
            <button
              type="button"
              className="button"
              onClick={this.onShowLastName}
            >
              Show/Hide LastName
            </button>
            {showLastName && <p className="para">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
