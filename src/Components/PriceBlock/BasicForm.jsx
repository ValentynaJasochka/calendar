import { useState } from "react";

export const BasicForm = () => {
  const [plans, setPlans] = useState([]);
  const [features, setFeatures] = useState([]);
  const [step, setStep] = useState(1);

  // тимчасові стейти для введення планів
  const [planName, setPlanName] = useState("");
  const [monthly, setMonthly] = useState("");
  const [annual, setAnnual] = useState("");

  // тимчасові стейти для введення фіч
  const [featureName, setFeatureName] = useState("");
  const [availableIn, setAvailableIn] = useState([]);

  // додаємо новий план
  const addPlan = () => {
    if (!planName || !monthly || !annual) return;
    setPlans((prev) => [
      ...prev,
      { name: planName, pricing: { monthly: +monthly, annual: +annual } },
    ]);
    setPlanName("");
    setMonthly("");
    setAnnual("");
  };

  // додаємо нову фічу
  const addFeature = () => {
    if (!featureName || availableIn.length === 0) return;
    setFeatures((prev) => [...prev, { name: featureName, availableIn }]);
    setFeatureName("");
    setAvailableIn([]);
  };

  // toggle вибору планів для фічі
  const togglePlanForFeature = (plan) => {
    setAvailableIn((prev) =>
      prev.includes(plan) ? prev.filter((p) => p !== plan) : [...prev, plan]
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Pricing Setup</h1>

      {/* STEP 1: Створення тарифних планів */}
      {step === 1 && (
        <div>
          <h2>Add Plans</h2>
          <input
            type="text"
            placeholder="Plan name"
            value={planName}
            onChange={(e) => setPlanName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Monthly price"
            value={monthly}
            onChange={(e) => setMonthly(e.target.value)}
          />
          <input
            type="number"
            placeholder="Annual price"
            value={annual}
            onChange={(e) => setAnnual(e.target.value)}
          />
          <button onClick={addPlan}>Add Plan</button>

          <ul>
            {plans.map((p) => (
              <li key={p.name}>
                {p.name} — {p.pricing.monthly}$/mo, {p.pricing.annual}$/yr
              </li>
            ))}
          </ul>

          {plans.length > 0 && (
            <button onClick={() => setStep(2)}>Next: Add Features</button>
          )}
        </div>
      )}

      {/* STEP 2: Створення фіч */}
      {step === 2 && (
        <div>
          <h2>Add Features</h2>
          <input
            type="text"
            placeholder="Feature name"
            value={featureName}
            onChange={(e) => setFeatureName(e.target.value)}
          />

          <div>
            <p>Available in:</p>
            {plans.map((p) => (
              <label key={p.name} style={{ marginRight: "10px" }}>
                <input
                  type="checkbox"
                  checked={availableIn.includes(p.name)}
                  onChange={() => togglePlanForFeature(p.name)}
                />
                {p.name}
              </label>
            ))}
          </div>

          <button onClick={addFeature}>Add Feature</button>

          <ul>
            {features.map((f, idx) => (
              <li key={idx}>
                {f.name} → {f.availableIn.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
