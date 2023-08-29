import React, { useEffect, useState } from "react";
import SIngleCardData from "./Components/SIngleCardData";

const App = () => {
  const [data,setData]=useState([])
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  function filterData(query) {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(lowerCaseQuery)
    );

    setFilteredData(filtered.length > 0 || query === '' ? filtered : initialData);
  }

  useEffect(() => {
    const url = "https://api.punkapi.com/v2/beers?page=1&per_page=80";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-5">
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
    </div>
  );
};

export default App;
