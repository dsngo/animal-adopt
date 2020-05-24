import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((e) => (
          <Pet
            key={e.id}
            id={e.id}
            animal={e.type}
            breed={e.breeds.primary}
            media={e.photos}
            location={`${e.contact.address.city}, ${e.contatn.address.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
