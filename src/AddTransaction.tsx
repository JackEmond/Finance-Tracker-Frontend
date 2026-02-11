import { useState, useEffect } from "react";
import "./AddTransaction.css";

interface Category {
  id: number;
  name: string;
}

function AddTransaction() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    type: "expense",
    category_id: "",
    date: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        if (data.length > 0) {
          setFormData((prev) => ({ ...prev, category_id: data[0].id }));
        }
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Transaction added successfully!");
        setFormData({
          description: "",
          amount: "",
          type: "expense",
          category_id: categories.length > 0 ? String(categories[0].id) : "",
          date: "",
        });
      } else {
        alert("Failed to add transaction");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding transaction");
    }
  };

  return (
    <div className="summary-container">
      <form
        className="stat-card full-width add-transaction-form"
        onSubmit={handleSubmit}
      >
        {/* Entry data to finance data. includes description type, subcategory and amount */}
        <div className="input-item">
          <label className="input-label">Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="input-field"
          />
        </div>
        <div className="input-item">
          <label className="input-label">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            className="input-field"
          />
        </div>
        <div className="input-item">
          <label className="input-label">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="input-field"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="input-item">
          <label className="input-label">Subcategory</label>
          <select
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            className="input-field"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input-item">
          <label className="input-label">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <input type="submit" className="submit-button" value="Add" />
      </form>
    </div>
  );
}

export default AddTransaction;
