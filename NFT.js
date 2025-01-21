import React from 'react'
import Image3 from '../images/Image3.png'

function NFT() {
  return (
    <div className='nft'>
      <h1 className="nft-heading">Each NFT represent unique fighter</h1>
      <div className="nft-section">
      <div className="nft-img">
        <img src={Image3} alt="#"/>
      </div>
      <div className="nft-info">
        <p className="nft-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Eros eget tortor, amet, dapibus orci. Urna, 
        tincidunt eu ac ultricies ultrices augue ligula potenti. Egestas arcu, tellus lectus blandit. 
        Morbi sed ac semper aliquam mi, 
        et.Eget elit risus dolor, morbi id euismod. Habitasse porttitor posuere sit id. Pulvinar ac.</p>
        <div className="nft-circles">
            <div className="nft-circle">
                <p className="nft-percent">28%</p>
                <p className="nft-quality">Strength</p>
            </div>
            <div className="nft-circle">
                <p className="nft-percent">78%</p>
                <p className="nft-quality">Speed</p>
            </div>
            <div className="nft-circle">
                <p className="nft-percent">84%</p>
                <p className="nft-quality">Vitality</p>
            </div>
            <div className="nft-circle">
                <p className="nft-percent">52%</p>
                <p className="nft-quality">Intelligence</p>
            </div>
            <div className="nft-circle">
                <p className="nft-percent">87%</p>
                <p className="nft-quality">Defence</p>
            </div>
            <div className="nft-circle">
                <p className="nft-percent">67%</p>
                <p className="nft-quality">Attack</p>
            </div>
        </div>
        <p className="nft-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Delectus, commodi!</p>
      </div>
    </div>
    </div>
  )
}

export default NFT
