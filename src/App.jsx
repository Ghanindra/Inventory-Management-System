import React from "react";
import { useState } from "react";
import Card from "./components/Card.jsx";
import Addproduct from "./components/Addproduct.jsx";
import './App.css';
const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [rows, setRows] = useState([]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };
  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };
  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div>
      <button
        className="btns"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Add Product
      </button>

      <Card rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />

      {modalOpen && (
        <Addproduct
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
};
export default App;
