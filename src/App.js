import React from "react";
import "./App.css";
import Card from "./Card";
import contacts from "./contacats";
function App() {
  let cardComponent = []; //to store all the cards
  contacts.forEach((obj) => {
    //to loop over the cards
    cardComponent.push(
      <Card name={obj.name} img={obj.img} phone={obj.phone} email={obj.email} />
    );
  });
  return (
    <div className="App">
      <h1 className="heading">My Contacts</h1>
      {cardComponent}
    </div>
  );
}

export default App;
