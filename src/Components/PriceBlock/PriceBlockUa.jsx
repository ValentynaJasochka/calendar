import { useState } from "react";

const plans = [
  {
    name: "Basic",
    monthly: 22,
    annual: 220,
    features: [
      "200+ integrations",
      "Advanced reporting and analytics",
      "Up to 10 individual users",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
  },
  {
    name: "Business",
    monthly: 40,
    annual: 400,
    features: [
      "Everything in Basic plus...",
      "200+ integrations",
      "Advanced reporting and analytics",
      "Up to 20 individual users",
      "40GB individual data each user",
      "Priority chat and email support",
    ],
  },
  {
    name: "Enterprise",
    monthly: 64,
    annual: 640,
    features: [
      "Everything in Business plus...",
      "200+ integrations",
      "Advanced reporting and analytics",
      "Unlimited individual users",
      "Unlimited individual data",
      "Personalized + priority service",
    ],
  },
];

export const PricingBlockUI = () => {
  const [billingType, setBillingType] = useState("monthly");

  return (
    <div style={{ padding: "20px" }}>
      {/* Toggle */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setBillingType("monthly")}
          style={{
            fontWeight: billingType === "monthly" ? "bold" : "normal",
          }}
        >
          Monthly billing
        </button>
        <button
          onClick={() => setBillingType("annual")}
          style={{
            fontWeight: billingType === "annual" ? "bold" : "normal",
          }}
        >
          Annual billing
        </button>
      </div>

      {/* Cards */}
      <div style={{ display: "flex", gap: "20px" }}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "20px",
              width: "250px",
            }}
          >
            <h3>{plan.name} plan</h3>
            <h2>
              ${billingType === "monthly" ? plan.monthly : plan.annual}
              <span style={{ fontSize: "14px" }}>
                {billingType === "monthly" ? " /month" : " /year"}
              </span>
            </h2>
            <button style={{ margin: "10px 0" }}>Get started</button>

            <h4>FEATURES</h4>
            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}