import { Link } from "react-router-dom";
import "../display.css";
import React from "react";
function Display({ products, onDelete }) {
  return (
    <div className="display-container">
      <h2>Product List</h2>

      <table className="display-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th style={{minWidth: 150}}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.productId}>
              <td>{p.productId}</td>
              <td>{p.name}</td>
              <td>{p.quantity}</td>
              <td>{p.price}</td>
              <td>
                <Link to={`/edit/${p.productId}`}>
                  <button className="edit-btn">Edit</button>
                </Link>
                <button className="delete-btn" onClick={() => onDelete(p.productId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Display;
