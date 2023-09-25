import React from 'react';
import data from './data';
import Card from './Card';
import './App.css';

/**
 * Author: Vincent de Torres
 * Date: 24 September 2023
 * Homework #3
 * CIS194_Fall-2023_77677
 * Filename: App.js
 *
 * This component represents the main App that renders Card components for each item in the data array.
 */
function App() {
  return (
    <div className="App">
      {data.map((item) => (
        <Card
          key={item.id}
          coverImg={item.coverImg}
          title={item.title}
          price={item.price}
          stats={item.stats}
          location={item.location}
        />
      ))}
    </div>
  );
}

export default App;
