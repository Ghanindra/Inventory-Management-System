import React, { useState } from "react";
import Button from "./Button.jsx";

import "./addProduct.css";

const AddProduct = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      image: "",
      name: "",
      description: "",
      price: "",
      status: "active",
      category: "",
      quantity: "",
      sold: "",
    }
  );

  const [error, setError] = useState("");

  const validationForm = () => {
    if (
      formState.image &&
      formState.name &&
      formState.description &&
      formState.price &&
      formState.status &&
      formState.category &&
      formState.quantity &&
      formState.sold
    ) {
      setError("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setError(errorFields.join(", "));
      return false;
    }
  };

  const handleAddProduct = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormState({
        ...formState,
        [name]: files[0] ? URL.createObjectURL(files[0]) : "",
      });
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validationForm()) return;
    onSubmit(formState);

    closeModal();
  };

  return (
    <>
      <div
        className="main-container"
        onClick={(e) => {
          if (e.target.className === "main-container") closeModal();
        }}
      >
        <div className="containers">
          <form className= "forms">
            <div className="form-group">
              <label htmlFor="name"> Full Name:</label>
              <input
                name="name"
                value={formState.name}
                placeholder="Enter Product Name"
                onChange={handleAddProduct}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                name="description"
                value={formState.description}
                placeholder="Give Description of Product"
                onChange={handleAddProduct}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">$Price:</label>
              <input
                name="price"
                type="number"
                value={formState.price}
                placeholder="Enter price"
                onChange={handleAddProduct}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <input
                name="category"
                value={formState.category}
                placeholder="Enter category"
                onChange={handleAddProduct}
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity(pcs):</label>
              <input
                name="quantity"
                type="number"
                value={formState.quantity}
                placeholder="Enter Quantity"
                onChange={handleAddProduct}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sold">Sold:</label>
              <input
                name="sold"
                type="number"
                value={formState.sold}
                placeholder="Enter sold Quantity"
                onChange={handleAddProduct}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Upload Image:</label>
              <input name="image" type="file" onChange={handleAddProduct} />
            </div>
            <div className="form-group">
              <label htmlFor="Status">Status:</label>
              <select
                name="status"
                value={formState.status}
                onChange={handleAddProduct}
              >
                <option value="active">Active</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            {error && <div className="error">{`Please include: ${error}`}</div>}
            <button type="submit" className="btn" onClick={handleSubmit}>
              Add Product
            </button>
          </form>
        </div>
      </div>

      <Button />
    </>
  );
};

export default AddProduct;
