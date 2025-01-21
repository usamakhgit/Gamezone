import React from 'react'
import Icon from '../images/Ques-icon.png'

function Questions() {
  return (
    <div className='question'>
        <h1 className="question-heading">Frequently asked questions</h1>
        <div className="question1 quest">
            <p className='question-text'>How much is Cyber NFT?</p>
           <a className='question-link' href=""><img src={Icon} alt="#"/></a>
        </div>
        <div className="question2 quest">
            <p className='question-text'>When does the NFT drop?</p>
           <a className='question-link' href="#"><img src={Icon} alt="#"/></a>
        </div>
        <div className="question3 quest">
            <p className='question-text'>Where can I view my NFTs?</p>
            <a className='question-link' href=""><img src={Icon} alt="#"/></a>
        </div>
        <div className="question4 quest">
            <p className='question-text'>What are the use cases of Cyber?</p>
            <a className='question-link' href=""><img src={Icon} alt="#"/></a>
        </div>
        <div className="question5 quest">
            <p className='question-text'>What are the secondary sale fees?</p>
            <a className='question-link' href=""><img src={Icon} alt="#"/></a>
        </div>
        <div className="question6 quest">
            <p className='question-text'>What is Cyber NFT game?</p>
            <a className='question-link' href=""><img src={Icon} alt="#"/></a>
        </div>
    </div>
  )
}

export default Questions
