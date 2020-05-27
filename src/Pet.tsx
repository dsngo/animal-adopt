import React, { FunctionComponent } from "react";
import { Photo } from "@frontendmasters/pet";
import { Link } from "@reach/router";

interface IProps {
  animal: string;
  breed: string;
  id: number;
  media: Photo[];
  name: string;
  location: string;
}

const Pet: FunctionComponent<IProps> = ({
  animal,
  breed,
  id,
  media,
  name,
  location,
}) => {
  let hero = "http://placecorgi.com/300/300";

  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} srcSet="" />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
