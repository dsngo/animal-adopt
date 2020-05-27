import React, { useState, useEffect, useContext, FunctionComponent } from "react";
import pet, { ANIMALS, Animal } from "@frontendmasters/pet";
import { RouteComponentProps } from "@reach/router";
import Results from "./Results";
import ThemeContext from "./ThemeContext";
import useDropdown from "./useDropdown";

const SearchParams: FunctionComponent<RouteComponentProps> = () => {
  const [location, setLocation] = useState("Seatle, WA");
  const [breeds, setBreeds] = useState([] as string[]);
  const [animal, AnimalDropdown] = useDropdown("dog", "Animal", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("", "Breed", breeds);
  const [pets, setPets] = useState([] as Animal[]);
  const [theme, setTheme] = useContext(ThemeContext);

  async function requestPets() {
    const { animals } = await pet.animals({
      breed,
      location,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds: resolvedBreeds }) => {
      const breedStrings = resolvedBreeds.map(({ name }) => name);

      setBreeds(breedStrings);
    }, console.error); // eslint-disable-line
  }, [animal, setBreed]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="text"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            aria-label={theme}
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="chartreuse">Chartreuse</option>
          </select>
        </label>
        <button type="submit" style={{ backgroundColor: theme }}>
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
