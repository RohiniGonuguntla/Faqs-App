// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="bg-container">
        <div className="faqs-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map(faq => (
              <FaqItem key={faq.id} faq={faq} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
