import React, { Component, ReactElement } from "react";
import pet, { Photo } from "@frontendmasters/pet";
import { navigate, RouteComponentProps } from "@reach/router";
import { connect } from "react-redux";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
// import ThemeContext from "./ThemeContext";

class Details extends Component<RouteComponentProps<{ id: string; theme: string }>> {
  state = {
    animal: "",
    breed: "",
    description: "",
    loading: true,
    location: "",
    media: [] as Photo[],
    name: "",
    showModal: false,
    url: "",
  };

  adopt = () => navigate(this.state.url);

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  componentDidMount() {
    const { id } = this.props;

    if (!id) {
      navigate("/");

      return;
    }

    pet
      .animal(+id)
      .then(({ animal }) => {
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
      })
      .catch((err: Error) => this.setState({ error: err }));
  }

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
          {/* <ThemeContext.Consumer>
            {([color]) => ( */}
          <button
            onClick={this.toggleModal}
            style={{ backgroundColor: this.props.theme }}
            type="submit"
          >
            Adopt {name}
          </button>
          {/* )}
          </ThemeContext.Consumer> */}

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

const mapStateToProps = ({ theme }) => ({ theme });
const WrappedDetails = connect(mapStateToProps)(Details);

export default function DetailsWthErrorBoundary(
  props: RouteComponentProps<{ id: string }>
): ReactElement {
  return (
    <ErrorBoundary>
      <WrappedDetails {...props} />
    </ErrorBoundary>
  );
}
