import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [rmChars, setRmChars] = useState([]);
  console.log('rmChars:', rmChars)
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log('res:', res.data);
        setRmChars(res.data.results)
      })
      .catch(err => console.log('error:', err))
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {rmChars.map(char => (
        <CharacterCard key={char.id} char={char} />
        ))}
    </section>
  );
}
