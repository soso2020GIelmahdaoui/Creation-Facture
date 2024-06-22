import React from "react";

export default function ArticleRow({ index, article, articles, handleArticleChange }) {
  return (
    <tr>
      <td>
        <select 
          className="form-select"
          value={article.id} 
          onChange={(e) => handleArticleChange(index, 'id', e.target.value)} 
        >
          <option value="" disabled>Choisir un article</option>
          {articles.map((art) => (
            <option key={art.id} value={art.id}>{art.name}</option>
          ))}
        </select>
      </td>
      <td>
        <input 
          type="number" 
          className="form-control"
          value={article.quantity} 
          onChange={(e) => handleArticleChange(index, 'quantity', e.target.value)} 
        />
      </td>
      <td>
        <input 
          type="text" 
          className="form-control"
          value={article.price} 
          disabled 
        />
      </td>
      <td>
        <input 
          type="text" 
          className="form-control"
          value={article.discount} 
          disabled 
        />
      </td>
      <td>
        <input 
          type="text" 
          className="form-control"
          value={article.amount} 
          disabled 
        />
      </td>
    </tr>
  );
}
