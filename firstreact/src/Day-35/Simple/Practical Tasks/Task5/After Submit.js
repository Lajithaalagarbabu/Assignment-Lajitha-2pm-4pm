import React, { useState } from "react";

function ClearForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent reload

    console.log(formData); // submitted data

    // clear form
    setFormData({
      name: "",
      email: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ClearForm;
