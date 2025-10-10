import React, { useEffect, useState } from "react";

const ApiFetch = () => {
  let [apiData, setApiData] = useState([]);
  let [filteredData, setFilteredData] = useState([]);
  let [search, setSearch] = useState("");

  useEffect(() => {
    fetch(" https://dummyjson.com/products/search?q=phone")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.products);
        console.log(data);
        setFilteredData(data.products);
      });
  }, []);

  function handleSearch() {
    if (search.trim() === "") {
      setFilteredData([]); 
      alert("no item found") 
      return;
    }
    const result = apiData.filter((item) =>
      item.category ===search
      
    );
    setFilteredData(result);
  }

  function func1(){
    let data1 = [... apiData].sort((a,b)=>{
      return a.price - b.price
    })
    setApiData(data1)

  }  
  function func2(){
   let data2 = [... apiData].sort((a,b)=>{
      return b.price - a.price
    })
    setApiData(data2)
  }    

  return (
    <div >
      <input type="text" placeholder="Search product" value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>
      <button onClick={func1}>Sort Asc</button>
      <button onClick={func2}>Sort Dec</button>

      <div style={{display:"flex"}}>
        {filteredData.map((item) => (
          <div>
            <img src={item.images} alt={item.title} width="180" height="180" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiFetch; 
