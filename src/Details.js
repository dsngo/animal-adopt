import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import ThemeContext from "./ThemeContext";

class Details extends Component {
  state = { loading: true, showModal: false };

  componentDidMount() {
    const { id } = this.props;

    pet.animal(id).then(({ animal }) => {
      this.setState({
        animal: animal.type,
        breed: animal.breeds.primary,
        description: animal.description,
        loading: false,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        media: animal.photos,
        name: animal.name,
        url: animal.url,
      });
    }, console.error);
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal }); // eslint-disable-line

  adopt = () => navigate(this.state.url);

  render() {
    const {
      animal,
      breed,
      description,
      loading,
      location,
      media,
      name,
      showModal,
    } = this.state;

    if (loading) {
      return <h1>Loading ...</h1>;
    }

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
                type="submit"
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>
          {showModal ? (
            <Modal>
              <h1>Would you like to adopt {name}?</h1>
              <div className="button">
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWthErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
