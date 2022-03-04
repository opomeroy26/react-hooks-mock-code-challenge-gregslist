import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

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

  //function or something to display the searched listing
  const displayedListings = listings.filter((listing)=> 
    listing.description.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer listings={displayedListings} onDeleteClick={onDeleteClick}/>
    </div>
  );
}

export default App;
