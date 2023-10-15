// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isAnswerVisible: false,
  }

  toggleAnswer = () => {
    this.setState(prevState => ({
      isAnswerVisible: !prevState.isAnswerVisible,
    }))
  }

  render() {
    const {faq} = this.props
    const {isAnswerVisible} = this.state
    const {questionText, answerText} = faq

    return (
      <li className="faq-item">
        <div className="faq-question-container">
          <h1 className="question">{questionText}</h1>
          <button
            type="button"
            onClick={this.toggleAnswer}
            className="toggle-button"
          >
            {isAnswerVisible ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
                className="icon"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
                className="icon"
              />
            )}
          </button>
        </div>
        {isAnswerVisible && (
          <>
            <hr className="hor-line" />
            <p className="answer">{answerText}</p>
          </>
        )}
      </li>
    )
  }
}

export default FaqItem
