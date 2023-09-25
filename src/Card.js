import React from 'react';

/**
 * Author: Vincent de Torres
 * Date: 24 September 2023
 * Homework #3
 * CIS194_Fall-2023_77677
 * Filename: Card.js
 *
 * This component represents a Card that displays information about a product.
 *
 * @param {object} props - The properties for the Card component.
 * @param {string} props.coverImg - The image source for the Card.
 * @param {string} props.title - The title of the Card.
 * @param {number} props.price - The price of the product.
 * @param {object} props.stats - Object containing genealogy information.
 * @param {string} props.stats.kingdom - The kingdom of the plant.
 * @param {string} props.stats.family - The family of the plant.
 * @param {string} props.stats.genus - The genus of the plant.
 * @param {string} props.location - The country of origin of the product.
 */
export default function Card(props) {
  const { title, price, stats, location } = props;
  // Construct the image source path based on the public folder and the image name
  const imageSrc = `/images/${props.coverImg}`;

  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p><strong>
        Average Cost 
        </strong>: ${price}/LB
        </p>
      <p>
        Kingdom: {stats.kingdom} <br/>
        Family: {stats.family}<br/>
        Genus:  {stats.genus} <b/>
      </p>
      <p>Origin: {location}</p>
    </div>
  );
}
