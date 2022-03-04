import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() =>{
  fetch("http://localhost:6001/listings")
  .then((resp) => resp.json())
  .then(setListings)
  }, [])

  function onDeleteClick(listing){
    console.log("Deleting listing", listing)
    setListings(listings.filter((listingItem) => listingItem !== listing))
    fetch(`http://localhost:6001/listings/${listing.id}`, {method: "DELETE"})
  }

  const filteredListings = listings.filter((listing)=> (
    listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  ))


  return (
    <div className="app">
      <Header onSearch={setSearchTerm}/>
      <ListingsContainer listings={filteredListings} onDeleteClick={onDeleteClick}/>
    </div>
  );
}

export default App;
