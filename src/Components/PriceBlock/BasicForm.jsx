import { useState } from "react";

 export const BasicForm = () =>{
  const [plans, setPlans] = useState([
    {
      name: "Basic",
      pricing: { monthly: 10, annual: 100 },
    },
    {
      name: "Business",
      pricing: { monthly: 20, annual: 200 },
    },
    {
      name: "Enterprise",
      pricing: { monthly: 50, annual: 500 },
    },
  ]);

  const [features, setFeatures] = useState([
    {
      name: "Support 24/7",
      availableIn: ["Business", "Enterprise"], // доступно лише для цих планів
    },
    {
      name: "Custom Reports",
      availableIn: ["Enterprise"],
    },
    {
      name: "Basic Analytics",
      availableIn: ["Basic", "Business", "Enterprise"],
    },
  ]);

  // active billing type (monthly or annual)
  const [billingType, setBillingType] = useState("monthly");

  return (
    <div>
      <h1>Pricing Plans</h1>

      {/* Перемикач типу підписки */}
      <div>
        <button onClick={() => setBillingType("monthly")}>
          Monthly billing
        </button>
        <button onClick={() => setBillingType("annual")}>
          Annual billing
        </button>
      </div>

      {/* Рендер планів */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            style={{ border: "1px solid gray", padding: "16px", width: "200px" }}
          >
            <h2>{plan.name}</h2>
            <p>
              Price: <strong>{plan.pricing[billingType]} $</strong> /{" "}
              {billingType}
            </p>

            <h4>Features:</h4>
            <ul>
              {features.map((feature) => (
                <li
                  key={feature.name}
                  style={{
                    color: feature.availableIn.includes(plan.name)
                      ? "green"
                      : "red",
                  }}
                >
                  {feature.name}{" "}
                  {feature.availableIn.includes(plan.name) ? "✔" : "✘"}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

