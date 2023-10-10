import React from "react";

function Product(props) {
  function incrementquantity(index) {}
  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {props.product.name1}
          <span className="badge bg-secondary"> ₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-danger">
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.incrementquantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-4">
        {props.product.quantity * props.product.price}
      </div>
    </div>
  );
}

export default Product;
