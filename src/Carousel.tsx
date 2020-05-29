import React, { Component, ReactNode, MouseEvent } from "react";
import { Photo } from "@frontendmasters/pet";

interface IProps {
  media: Photo[];
}

class Carousel extends Component<IProps> {
  state = { active: 0, photos: [] };

  handleIndexClick = (event: MouseEvent<HTMLElement>): void => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    event.currentTarget.dataset.index &&
      this.setState({ active: +event.currentTarget.dataset.index });
  };

  static getDerivedStateFromProps({ media }: IProps): Record<string, unknown> | null {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  render(): ReactNode {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img alt="animal" src={photos[active]} />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img // eslint-disable-line
              key={photo}
              alt="animal thumbnail"
              className={index === active ? "active" : ""}
              data-index={index}
              src={photo}
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
