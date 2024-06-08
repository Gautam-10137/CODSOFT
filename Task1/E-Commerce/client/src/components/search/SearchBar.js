import React,{useEffect, useState} from 'react'

const SearchBar = ({setSearchTerm,searchTerm}) => {
  const [search,setSearch]=useState('');
  useEffect(() => {
    setSearch(searchTerm);
  }, [searchTerm]);
  const handleSearch=()=>{
    setSearchTerm(search);   
  }

  return (
    <div className=''>
      <input
        type='text'
        value={search}
        className='border-2 border-blue-500'
        onChange={(e)=>{setSearch(e.target.value);  }}      
      ></input>
      <button className='text-xl bg-slate-300 w-20 h-8 border-2 border-red-200 mx-2 shadow-md hover:shadow-lg' onClick={handleSearch}>search</button>
    </div>
  )
}

export default SearchBar
