import React, { useEffect, useState } from "react";

const ApiFetch = () => {
  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
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

  return (
    <div >
      <input type="text" placeholder="Search product" value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>

      <div>
        {filteredData.map((item) => (
          <div >
            <img src={item.images} alt={item.title} width="180" height="180" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiFetch; 
