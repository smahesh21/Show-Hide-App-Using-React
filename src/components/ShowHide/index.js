import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isClickedOnFirstName: false, isClickedOnLastName: false}

  getFirstname = () => {
    this.setState(prevState => ({
      isClickedOnFirstName: !prevState.isClickedOnFirstName,
    }))
  }

  getLastname = () => {
    this.setState(prevState => ({
      isClickedOnLastName: !prevState.isClickedOnLastName,
    }))
  }

  render() {
    const {isClickedOnFirstName, isClickedOnLastName} = this.state
    return (
      <div className="container">
        <div className="text-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="cards-container">
            <div className="card">
              <div>
                <button className="buttons1" onClick={this.getFirstname}>
                  Show/Hide Firstname
                </button>
              </div>
              {isClickedOnFirstName && <p className="name1">Joe</p>}
            </div>
            <div className="card">
              <div>
                <button className="buttons2" onClick={this.getLastname}>
                  Show/Hide Lastname
                </button>
              </div>
              {isClickedOnLastName && <p className="name2">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
