import './App.css';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const dinersArray = [
  {
    shop: "Mihai's Magarinepalast",
    rating: 3.5,
  },
  {
    shop: "Nimba's Nudelsalat Cuisine",
    rating: 4,
  },
  {
    shop: "Simon's Soßenkanister Pommes",
    rating: 4.5,
  },
  {
    shop: "Justus Juute Jägerschnitzel",
    rating: 1,
  },
]

// <Icon icon="material-symbols:star" color="gold" />
// <Icon icon="material-symbols:star-half" color="gold" />
// <Icon icon="material-symbols:star-outline" color="gold" />
function handleStars(numRating) {
  const totalAmountOfStars = 5;
  let displayArray = []

  for (let index = 0; index < totalAmountOfStars; index++) {
    console.log(index)
    if (index < Math.trunc(numRating)) {
      displayArray.push(<Icon icon="material-symbols:star" color="gold" />) 
    } else if (numRating % 1) {
      displayArray.push(<Icon icon="material-symbols:star-half" color="gold" />)
    } else if (index => numRating) {
      displayArray.push(<Icon icon="material-symbols:star-outline" color="gold" />)
    }
  }
  return displayArray
}

function App() {


  return (
    <div className="App">
      {dinersArray.map((diner)=>{ 
        return (
          <div>
          <p>Name: {diner.shop}</p>
          <p>Rating numeral: {diner.rating}</p>
          <p>Rating stars: {handleStars(diner.rating)}</p>
          <hr></hr>
          </div>
      )
      })}
    </div>
  );
}

export default App;
