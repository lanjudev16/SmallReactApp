import React from "react";

const SIngleCardData = ({singleCardData}) => {
  return (
    <div className="shadow-md border-[1px] rounded-md p-3">
      <img className="w-full h-[450px] object-fill" src={singleCardData.image_url} alt={singleCardData.name} />
      <h1>{singleCardData.name}</h1>
      <h2>{singleCardData.tagline}</h2>
      <h3>{singleCardData.first_brewed}</h3>
      <p>{singleCardData.description.slice(0,50)}...</p>
      <h4>{singleCardData.abv}</h4>
      <h5>{singleCardData.target_fg}</h5>
      <h6>{singleCardData.volume.value}</h6>
    </div>
  );
};

export default SIngleCardData;
