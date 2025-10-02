// import { useState } from "react";

// // Головний компонент
// export const  PricingBlockUI = ()=> {
//   const [plans, setPlans] = useState([]);
//   const [features, setFeatures] = useState([]);
//   const [step, setStep] = useState(1);
//   const [billingType, setBillingType] = useState("monthly");

//   // поля для планів
//   const [planName, setPlanName] = useState("");
//   const [monthly, setMonthly] = useState("");
//   const [annual, setAnnual] = useState("");

//   // поля для фіч
//   const [featureName, setFeatureName] = useState("");
//   const [availableIn, setAvailableIn] = useState([]);

//   // додавання плану
//   const addPlan = () => {
//     if (!planName || !monthly || !annual) return;
//     setPlans((prev) => [
//       ...prev,
//       { name: planName, pricing: { monthly: +monthly, annual: +annual } },
//     ]);
//     setPlanName("");
//     setMonthly("");
//     setAnnual("");
//   };

//   // додавання фічі
//   const addFeature = () => {
//     if (!featureName || availableIn.length === 0) return;
//     setFeatures((prev) => [...prev, { name: featureName, availableIn }]);
//     setFeatureName("");
//     setAvailableIn([]);
//   };

//   const togglePlanForFeature = (plan) => {
//     setAvailableIn((prev) =>
//       prev.includes(plan) ? prev.filter((p) => p !== plan) : [...prev, plan]
//     );
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Pricing Setup</h1>

//       {/* КРОК 1: додавання планів */}
//       {step === 1 && (
//         <div>
//           <h2>Add Plans</h2>
//           <input
//             type="text"
//             placeholder="Plan name"
//             value={planName}
//             onChange={(e) => setPlanName(e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Monthly price"
//             value={monthly}
//             onChange={(e) => setMonthly(e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Annual price"
//             value={annual}
//             onChange={(e) => setAnnual(e.target.value)}
//           />
//           <button onClick={addPlan}>Add Plan</button>

//           <ul>
//             {plans.map((p) => (
//               <li key={p.name}>
//                 {p.name} → {p.pricing.monthly}$/mo, {p.pricing.annual}$/yr
//               </li>
//             ))}
//           </ul>

//           {plans.length > 0 && (
//             <button onClick={() => setStep(2)}>Next: Add Features</button>
//           )}
//         </div>
//       )}

//       {/* КРОК 2: додавання фіч */}
//       {step === 2 && (
//         <div>
//           <h2>Add Features</h2>
//           <input
//             type="text"
//             placeholder="Feature name"
//             value={featureName}
//             onChange={(e) => setFeatureName(e.target.value)}
//           />

//           <div>
//             <p>Available in:</p>
//             {plans.map((p) => (
//               <label key={p.name} style={{ marginRight: "10px" }}>
//                 <input
//                   type="checkbox"
//                   checked={availableIn.includes(p.name)}
//                   onChange={() => togglePlanForFeature(p.name)}
//                 />
//                 {p.name}
//               </label>
//             ))}
//           </div>

//           <button onClick={addFeature}>Add Feature</button>

//           <ul>
//             {features.map((f, idx) => (
//               <li key={idx}>
//                 {f.name} → {f.availableIn.join(", ")}
//               </li>
//             ))}
//           </ul>

//           {features.length > 0 && (
//             <button onClick={() => setStep(3)}>Finish & Show Pricing</button>
//           )}
//         </div>
//       )}

//       {/* КРОК 3: відображення pricing block */}
//       {step === 3 && (
//         <div>
//           <h2>Pricing Plans</h2>

//           {/* Toggle monthly / annual */}
//           <div style={{ marginBottom: "20px" }}>
//             <button
//               onClick={() => setBillingType("monthly")}
//               style={{
//                 fontWeight: billingType === "monthly" ? "bold" : "normal",
//               }}
//             >
//               Monthly billing
//             </button>
//             <button
//               onClick={() => setBillingType("annual")}
//               style={{
//                 fontWeight: billingType === "annual" ? "bold" : "normal",
//               }}
//             >
//               Annual billing
//             </button>
//           </div>

//           {/* Pricing cards */}
//           <div style={{ display: "flex", gap: "20px" }}>
//             {plans.map((plan) => (
//               <div
//                 key={plan.name}
//                 style={{
//                   border: "1px solid #ccc",
//                   borderRadius: "8px",
//                   padding: "20px",
//                   width: "250px",
//                 }}
//               >
//                 <h3>{plan.name} plan</h3>
//                 <h2>
//                   $
//                   {billingType === "monthly"
//                     ? plan.pricing.monthly
//                     : plan.pricing.annual}
//                   <span style={{ fontSize: "14px" }}>
//                     {billingType === "monthly" ? " /month" : " /year"}
//                   </span>
//                 </h2>
//                 <button style={{ margin: "10px 0" }}>Get started</button>

//                 <h4>FEATURES</h4>
//                 <ul>
//                   {features
//                     .filter((f) => f.availableIn.includes(plan.name))
//                     .map((f, i) => (
//                       <li key={i}>✅ {f.name}</li>
//                     ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useSelector, useDispatch } from "react-redux";
import { toggleBilling } from "./store/pricingSlice";


export const PricingBlockUI= () => {
  const { plans, features, billingType } = useSelector((state) => state.pricing);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Pricing Plans</h2>

      {/* Перемикач */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => dispatch(toggleBilling("monthly"))}
          style={{
            fontWeight: billingType === "monthly" ? "bold" : "normal",
          }}
        >
          Monthly billing
        </button>
        <button
          onClick={() => dispatch(toggleBilling("annual"))}
          style={{
            fontWeight: billingType === "annual" ? "bold" : "normal",
          }}
        >
          Annual billing
        </button>
      </div>

      {/* Карточки планів */}
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
              $
              {billingType === "monthly"
                ? plan.pricing.monthly
                : plan.pricing.annual}
              <span style={{ fontSize: "14px" }}>
                {billingType === "monthly" ? " /month" : " /year"}
              </span>
            </h2>
            <button style={{ margin: "10px 0" }}>Get started</button>

            <h4>FEATURES</h4>
            <ul>
              {features
                .filter((f) => f.availableIn.includes(plan.name))
                .map((f, i) => (
                  <li key={i}>✅ {f.name}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

