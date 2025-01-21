import React from 'react'
import Image2 from '../images/Image2.png'
import Image3 from '../images/Image3.png'

function Saga() {
  return (
    <div className='saga'>
        <div className="cyber-saga">
        <div className="cyber-img">
        <img src={Image2} alt="image2"/>
        </div>
        <div className="cyber-Info">
        <h1 className="cyber-heading">Cyber saga</h1>
        <p className="cyber-text">Its the year of 2177. Artificial intelligence became incredibly powerful, 
        and we decided to use it to modify our genetics.</p>
        <p className="cyber-text">After Elon Musk's son finalized the technology of gene modification, 
        he decided to test it out on pigs. Little did we know, this was a critical mistake. 
        We have managed to have control over AI for over 100 years, 
        yet the humanity underestimated dangers of genetical modification. 
        Now we have 10 000 pigs that are more intelligent and powerful than the humans themselves. 
        These overtook the Earth, while humans had to move to the Mars. 
        What's next? It's hard to tell, but it seems like the pigs are ready for war...</p>
        </div>
        </div>
        <div className="unique-fighter">
            <div className="unique-fighter-info">
                <h1 className="unique-fighter-heading">10,000 unique fighters ready to battle</h1>
                <p className="unique-fighter-text">CyberPigs is a collection of 10 000 pig characters who once were 
                just a science experiment that went wrong. Now these have taken over the earth, 
                and even continue to use the genetic modification technology initially developed by humans to continue improving. 
                All of the pigs now living on Ethereum Blockchain.</p>
                <p className="unique-fighter-text">Each CyberPig is unique and is based on 
                many professionally designed elements, 
                drawn by hand, that any crypto enthusiast will appreciate.</p>
            </div>
            <div className="unique-fighter-img">
                <img src={Image3} alt="image3"/>
            </div>
        </div>
    </div>
  )
}

export default Saga
