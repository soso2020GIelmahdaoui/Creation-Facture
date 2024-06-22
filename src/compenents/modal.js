import React, { Component } from "react";
import AjouterClient from "./AjouterClient";

export default class modal extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false, // Etat pour contrôler l'affichage de la modal
    };
  }

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Ouvrir Modal</button>
        {this.state.showModal && (
          <AjouterClient closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}
