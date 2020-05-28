import React, { FC } from "react";
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

/* eslint-disable react/prop-types */
const Pet: FC<IProps> = ({ animal, breed, id, media, name, location }) => {
  let hero = "http://placecorgi.com/300/300";

  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Link className="pet" to={`/details/${id}`}>
      <div className="image-container">
        <img alt={name} src={hero} srcSet="" />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
