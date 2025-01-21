import React from 'react';

function Team({
  records = [], 
  currentPage, 
  setCurrentPage, 
  npage, 
  numbers = [], 
  onSearchChange, 
  categories = [], 
  onCategoryChange, 
  category
}) {
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className='team'>
      <h1 className="team-heading">Team behind Cyber</h1>
      <input
        className="team-input"
        type="text"
        placeholder='Search Your Fighter'
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className="name-tag">
        <ul>
          {categories.map((category, id) => (
            <li key={id}>
              <a className='name-link' href='#' onClick={() => onCategoryChange(category)}>{category}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="team-players">
        {records.map((data) => (
          <div key={data.id} className={`player${data.id}`}>
           <a href="#"><img src={data.image} alt={`Player ${data.id}`} className="player" /></a>
            <h1 className="player-name">{data.heading}</h1>
          </div>
        ))}
      </div>
      <div className="team-pages">
        <ul>
          <li><a className='team-links' href="#" onClick={prePage}>Previous</a></li>
          {numbers.map((n, i) => (
            <li key={i}><a className='team-links' href="#" onClick={() => changeCPage(n)}>{n}</a></li>
          ))}
          <li><a className='team-links' href="#" onClick={nextPage}>Next</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Team;
