import React from "react";

export default function Header({ isAdmin, onToggleAdmin }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white mb-3 shadow-sm rounded">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          Product Manager
        </a>

        <div className="d-flex align-items-center">
          <div className="form-check form-switch me-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="adminSwitch"
              checked={isAdmin}
              onChange={onToggleAdmin}
            />
            <label className="form-check-label" htmlFor="adminSwitch">
              Admin
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
