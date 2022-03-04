import React from "react";
 import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {
  const listingItem = listings.map((listingObj)=> (
    <ListingCard 
      key={listingObj.id}
      listing = {listingObj}
    />

  ))
  return (
    <main>
      <ul className="cards">
        {listingItem}
      </ul>
    </main>
  );
}

export default ListingsContainer;
