// selectClient.js
import React, { useState, useEffect } from "react";
import AjouterClient from "./AjouterClient";


function SelectClient({ onChange }) {
  const [showModal, setShowModal] = useState(false);
  const [clientOptions, setClientOptions] = useState([]);

  useEffect(() => {
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    const clientNames = clients.map(client => client.nom); // Récupère uniquement les noms des clients
    setClientOptions(clientNames);
  }, []);

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    onChange(selectedOption); // Passe le nom du client sélectionné au parent
    if (selectedOption === "Ajouter Client") {
      setShowModal(true);
    }
  };

  return (
    <div>
      <label htmlFor="client-options">Client Options:</label>
      <select id="client-options" onChange={handleOptionChange} required>
        <option value="">Select Option</option>
        {clientOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        <option value="Ajouter Client">Ajouter Client</option>
      </select>
      {showModal && (
        <AjouterClient
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default SelectClient;
