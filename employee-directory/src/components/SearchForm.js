import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For an Employee"
          id="search"
        />
        <br/>
        <p>
        <button onClick={props.handleFormSubmit} id="search" className="btn btn-info p-2">
          search
        </button>
        </p>
        <hr />
        <p>
          <button onClick={props.handleFormSubmit} id="sort" className="btn btn-dark p-2">
          sort
        </button>
        </p>
        
      </div>
    </form>
  );
}

export default SearchForm;