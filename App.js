import React, {useState} from 'react';
import { Data } from './Components/Data';
import './App.css';
import Header from './Components/Header';
import Saga from './Components/Saga';
import Feature from './Components/Feature';
import NFT from './Components/NFT';
import Questions from './Components/Questions';
import Team from './Components/Team';
import Footer from './Components/Footer';
import Featuresnav from './Pages/Featuresnav';
import Roadmapnav from './Pages/Roadmapnav';
import Teamnav from './Pages/Teamnav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App(){

  const getUniqueData= (data)=>{
    const category= data.map(item=> item.category);
    return ['All',...new Set(category)];
  };

  const [selectedCategory, setSelectedCategory]= useState('All');
  const [search, setSearch]= useState('')

  const categories= getUniqueData(Data); 

  const filteredRecords= Data.filter(data =>{
    return (selectedCategory === 'All' || data.category === selectedCategory) 
           && data.category.toLowerCase().includes(search.toLowerCase()); 
  });

  const [currentPage, setCurrentPage]= useState(1);
  const recordsPerPage= 6;
  const lastIndex= currentPage * recordsPerPage;
  const firstIndex= lastIndex - recordsPerPage;
  const records= filteredRecords.slice(firstIndex, lastIndex);
  const npage= Math.ceil(filteredRecords.length / recordsPerPage);
  const numbers= [...Array(npage+1).keys()].slice(1)

  const handleCategoryChange= (category)=> {
    setSelectedCategory(category);
  };

  const handleSearchChange= (term)=> {
    setSearch(term);
    setCurrentPage(1);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Header/>} /> */}
          <Route path="/featuresnav" element={<Featuresnav/>} />
          <Route path="/roadmapnav" element={<Roadmapnav/>} />
          <Route path="/teamnav" element={<Teamnav/>}/>
        </Routes>
        <Header />
        <Team
          records={records}
          numbers={numbers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onSearchChange={handleSearchChange}
          onCategoryChange={handleCategoryChange}
          categories={categories}
        />
        <Saga />
        <Feature />
        <NFT />
        <Questions />
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
