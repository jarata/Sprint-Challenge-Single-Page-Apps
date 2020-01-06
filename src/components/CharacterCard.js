import React from "react";

export default function CharacterCard({char}) {
  const {name, status, species, type, gender, origin, location, episode, image} = char;
  return (
    <div>
      <img src={image} alt={`Picture of ${name}`}/>
      <h2>Name: {name}</h2>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Type: {type}</p>
      <p>Gender: {gender}</p>
      <p>Origin: TODO: map over origin data</p>
      <p>Location: TODO: map over location data</p>
      <p>Episode: TODO: map over episode data</p>
    </div>
  );
}
