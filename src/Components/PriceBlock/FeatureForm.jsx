import React, { useState } from "react";

const plans = ["Basic", "Business", "Enterprise"];

export  function FeatureForm() {
  const [features, setFeatures] = useState([]);
  const [newFeature, setNewFeature] = useState({
    name: "",
    availability: plans.reduce((acc, p) => ({ ...acc, [p]: false }), {})
  });

  const handleCheckboxChange = (plan) => {
    setNewFeature((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        [plan]: !prev.availability[plan]
      }
    }));
  };

  const handleAddFeature = () => {
    if (!newFeature.name.trim()) return;
    setFeatures((prev) => [...prev, { ...newFeature, id: Date.now() }]);
    setNewFeature({
      name: "",
      availability: plans.reduce((acc, p) => ({ ...acc, [p]: false }), {})
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Feature</h2>

      <input
        type="text"
        placeholder="Feature name"
        value={newFeature.name}
        onChange={(e) =>
          setNewFeature({ ...newFeature, name: e.target.value })
        }
      />

      <div style={{ margin: "10px 0" }}>
        {plans.map((plan) => (
          <label key={plan} style={{ marginRight: "15px" }}>
            <input
              type="checkbox"
              checked={newFeature.availability[plan]}
              onChange={() => handleCheckboxChange(plan)}
            />
            {plan}
          </label>
        ))}
      </div>

      <button onClick={handleAddFeature}>Add Feature</button>

      <h3>Feature List</h3>
      <table border="1" cellPadding="5" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Feature</th>
            {plans.map((plan) => (
              <th key={plan}>{plan}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((f) => (
            <tr key={f.id}>
              <td>{f.name}</td>
              {plans.map((plan) => (
                <td key={plan}>{f.availability[plan] ? "✔️" : "—"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}