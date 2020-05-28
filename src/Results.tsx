import React, { FC } from "react";
import { Animal } from "@frontendmasters/pet";
import Pet from "./Pet";

interface IProps {
  pets: Animal[];
}

/* eslint-disable react/prop-types */
const Results: FC<IProps> = ({ pets }) => {
  return (
    <div className="search" data-testid="search-results">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((e) => (
          <Pet
            key={e.id}
            animal={e.type}
            breed={e.breeds.primary}
            id={e.id}
            location={`${e.contact.address.city}, ${e.contact.address.state}`}
            media={e.photos}
            name={e.name}
          />
        ))
      )}
    </div>
  );
};

export default Results;
