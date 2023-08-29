import React, { useEffect, useState } from "react";
import SIngleCardData from "./Components/SIngleCardData";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";
const App = () => {
  const [data, setData] = useState([]);

    
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const url = "https://api.punkapi.com/v2/beers?page=1&per_page=80";
    fetch(url)
      .then((res) => res.json())
      .then((data) =>{
         setData(data)
         setFilteredData(data)
      });
  }, []);



  console.log(filteredData);
  function filterData(query) {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseQuery)
    );

    setFilteredData(filtered.length > 0 || query === "" ? filtered : data);
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="text-center lg:mt-[90px] mt-[100px]">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            filterData(e.target.value);
          }}
          placeholder="Search..."
          className="border-[2px] border-red-300 w-[200px] mx-auto outline-none p-2 rounded-md"
        />
      </div>
      <div className="lg:w-[1140px] mx-auto grid lg:grid-cols-3 gap-5 mt-5">
        {filteredData.map((singleCardData, index) => (
          <SIngleCardData
            key={index}
            singleCardData={singleCardData}
          ></SIngleCardData>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
