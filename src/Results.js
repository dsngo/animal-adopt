import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((e) => (
          <Pet
            key={e.id}
            id={e.id}
            name={e.name}
            animal={e.type}
            breed={e.breeds.primary}
            media={e.photos}
            location={`${e.contact.address.city}, ${e.contact.address.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
