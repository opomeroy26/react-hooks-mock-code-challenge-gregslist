import React from "react";
 import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {
  const listingItem = listings.map((listingItem) => (
    <ListingCard 
      key= {listingItem.id}
      listing={listingItem}
    
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
