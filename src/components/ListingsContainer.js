import React from "react";
 import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteClick}) {
  const listingItem = listings.map((listingItem) => (
    <ListingCard 
      key= {listingItem.id}
      listing={listingItem}
      handleDeleteClick= {onDeleteClick}
    
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
