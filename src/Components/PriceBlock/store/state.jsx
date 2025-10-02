const state ={
  plans:[
  { name: "Basic", pricing: { monthly: 10, annual: 100 } },
  { name: "Business", pricing: { monthly: 20, annual: 200 } },
  { name: "Enterprise", pricing: { monthly: 50, annual: 500 } },
],
features: [
  { name: "Support 24/7", availableIn: ["Business", "Enterprise"] },
  { name: "Custom Reports", availableIn: ["Enterprise"] },
  { name: "Basic Analytics", availableIn: ["Basic", "Business", "Enterprise"] },
]
}