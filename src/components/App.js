import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((resp) => resp.json())
    .then(setListings)
  }, [])

  function onDeleteClick(listing){
    console.log("deleting", listing)
    fetch(`http://localhost:6001/listings/${listing.id}`, {method:"DELETE"})
    setListings(listings.filter((listingItem) => listingItem !==listing))
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} onDeleteClick={onDeleteClick}/>
    </div>
  );
}

export default App;
