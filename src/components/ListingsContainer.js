import React from "react";
 import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteClick}) {
  const listingItem = listings.map((listingObj)=> (
    <ListingCard 
      key={listingObj.id}
      listing = {listingObj}
      handleDeleteClick = {onDeleteClick}
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
