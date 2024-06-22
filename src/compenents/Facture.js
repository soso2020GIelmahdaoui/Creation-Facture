import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectClient from "./selectClient";
import ArticleRow from "./ArticleRow";

const ARTICLES = [
  { id: 1, name: 'A', price: 100, discount: 10 },
  { id: 2, name: 'B', price: 200, discount: 15 },
  { id: 3, name: 'C', price: 300, discount: 20 },
];

export default class Facture extends React.Component {
  constructor(props) {
    super(props);

    const savedState = JSON.parse(localStorage.getItem('factureState')) || {
      FactureInputNumber: "",
      FactureInputDate: "",
      FactureInputClient: "",
      articles: [{ id: "", article: "", quantity: "", price: "", discount: "", amount: "" }]
    };

    this.state = savedState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleClientChange = (client) => {
    this.setState({
      FactureInputClient: client
    });
  };

  handleArticleChange = (index, field, value) => {
    const newArticles = [...this.state.articles];
    newArticles[index] = {
      ...newArticles[index],
      [field]: value
    };
    if (field === 'id') {
      const selectedArticle = ARTICLES.find(article => article.id === parseInt(value));
      newArticles[index] = {
        ...newArticles[index],
        article: selectedArticle.name,
        price: selectedArticle.price,
        discount: selectedArticle.discount,
        amount: selectedArticle.price * (1 - selectedArticle.discount / 100)
      };
    }
    if (field === 'quantity') {
      const quantity = parseInt(value, 10);
      const price = parseInt(newArticles[index].price, 10);
      const discount = parseInt(newArticles[index].discount, 10);
      newArticles[index].amount = (price * quantity) * (1 - discount / 100);
    }
    this.setState({ articles: newArticles });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newFactures = [
      ...this.state.factures || [],
      {
        FactureInputNumber: this.state.FactureInputNumber,
        FactureInputDate: this.state.FactureInputDate,
        FactureInputClient: this.state.FactureInputClient,
        articles: this.state.articles
      }
    ];

    localStorage.setItem('factureState', JSON.stringify({
      ...this.state,
      factures: newFactures,
      FactureInputNumber: "",
      FactureInputDate: "",
      FactureInputClient: "",
      articles: [{ id: "", article: "", quantity: "", price: "", discount: "", amount: "" }]
    }));

    window.location.reload();
  };

  addNewRow = () => {
    this.setState(prevState => ({
      articles: [...prevState.articles, { id: "", article: "", quantity: "", price: "", discount: "", amount: "" }]
    }));
  };

  clearLocalStorage = () => {
    localStorage.removeItem('factureState');
    window.location.reload();
  };

  render() {
    const isSubmitDisabled = this.state.articles.length === 0 || !this.state.articles[0].article;
    return (
      <div className="container mt-5">
        <h1 className="mb-4" style={{ color: "#5A189A" }}>Ajouter Facture</h1>
        <form onSubmit={this.handleSubmit} className="row g-3">
          <div className="col-md-3">
            <label htmlFor="FactureInputNumber" className="form-label">Numéro de facture</label>
            <input type="text" className="form-control" id="FactureInputNumber" name="FactureInputNumber" placeholder="Numéro de facture" value={this.state.FactureInputNumber} onChange={this.handleChange} required />
          </div>
          <div className="col-md-3">
            <label htmlFor="FactureInputDate" className="form-label">Date de facture</label>
            <input type="date" className="form-control" id="FactureInputDate" name="FactureInputDate" placeholder="Date de facture" value={this.state.FactureInputDate} onChange={this.handleChange} required />
          </div>
          <div className="col-md-3">
            <label htmlFor="FactureInputClient" className="form-label">Client</label>
            <SelectClient onChange={this.handleClientChange} />
          </div>
          <div className="col-md-3 d-flex align-items-end">
            <button 
              type="submit" 
              className="btn btn-primary w-100 mb-2" 
              disabled={isSubmitDisabled} 
              style={{ backgroundColor: "#39175A", color: "#EFEFC8", borderRadius: "4px", paddingRight: "5px" }}
            >
              Ajouter Facture
            </button>
            <button 
              type="button" 
              className="btn btn-secondary w-100 mb-2" 
              style={{ backgroundColor: "#EFEFC8", color: "#39175A", borderRadius: "4px", marginLeft: "10px" }}
              onClick={this.addNewRow}
            >
              Ajouter Article
            </button>
          </div>
          
        </form>

        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th scope="col">Article</th>
              <th scope="col">Quantité</th>
              <th scope="col">Prix</th>
              <th scope="col">Remise</th>
              <th scope="col">Montant</th>
            </tr>
          </thead>
          <tbody>
            {this.state.articles.map((article, index) => (
              <ArticleRow 
                key={index}
                index={index}
                article={article}
                articles={ARTICLES}
                handleArticleChange={this.handleArticleChange}
              />
            ))}
          </tbody>
        </table>

        <button type="button" className="btn btn-danger mt-3" onClick={this.clearLocalStorage}>Supprimer Article</button>
      </div>
    );
  }
}
