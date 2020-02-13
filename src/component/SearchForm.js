import React from "react";

function SearchForm(props) {


  return (
    <div className="card text-center search-form">
      <div className="card-header">
        <h2>{props.searchtype} Search</h2>
      </div>
      <div className="card-body"></div>
      <form>
        <div className="form-group" style={{ padding: '22px' }}>
          <label htmlFor="search">Employees Search</label>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            searchtype={props.searchtype}
            name="search"
            type="text"
            className="form-control"
            placeholder="Last Name"
            id="search"
          />
          <br />
        </div>
      </form>
    </div>

  );
}

export default SearchForm;
