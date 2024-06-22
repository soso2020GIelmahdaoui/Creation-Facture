import React, { Component } from "react";

export default class AjouterClient extends Component {
  constructor() {
    super();
    this.state = {
      nom: "",
      adress: "",
      tele: "",
      email: "",
      client: {},
      getClients: [],
    };
  }

  changeNom = (e) => {
    this.setState({ nom: e.target.value });
  };

  changeAdresse = (e) => {
    this.setState({ adress: e.target.value });
  };

  changePhone = (e) => {
    this.setState({ tele: e.target.value });
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  addClient = async (e) => {
    e.preventDefault();
    if (
      this.state.nom === "" ||
      this.state.adress === "" ||
      this.state.tele === "" ||
      this.state.email === ""
    ) {
      alert("Remplir tous les champs");
      return;
    }

    const getClientsFil = JSON.parse(localStorage.getItem("clients"));
    if (getClientsFil) {
      const clientExist = getClientsFil.find(
        (item) => item.email === this.state.email || item.nom === this.state.nom
      );
      if (clientExist) {
        alert("Client déjà existant");
        return;
      }
    }

    const client = {
      nom: this.state.nom,
      adress: this.state.adress,
      tele: this.state.tele,
      email: this.state.email,
    };

    localStorage.setItem(
      "clients",
      JSON.stringify([
        ...(JSON.parse(localStorage.getItem("clients")) || []),
        client,
      ])
    );

    this.props.closeModal(); // Appel de la méthode pour fermer la modal
  };

  render() {
    return (
      <div className="modal fade show" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Ajouter un client
              </h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={this.props.closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="clientName" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="clientName"
                  placeholder="Nom du Client"
                  onChange={this.changeNom}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="clientAdress" className="form-label">
                  Adresse
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="clientAdress"
                  placeholder="L'adresse du Client"
                  onChange={this.changeAdresse}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="clientPhone" className="form-label">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="clientPhone"
                  placeholder="Numéro du téléphone"
                  onChange={this.changePhone}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="clientEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="clientEmail"
                  placeholder="email@gmail.com"
                  onChange={this.changeEmail}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.props.closeModal}
              >
                Fermer
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.addClient}
                style={{
                  backgroundColor: "#39175A",
                  color: "#EFEFC8",
                  borderRadius: "4px",
                }}
              >
                Ajouter Le Client
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
