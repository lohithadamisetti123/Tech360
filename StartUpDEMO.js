const startups = [
  {
    logo: "https://via.placeholder.com/70x70?text=EcoKart",
    name: "EcoKart",
    founder: "Ravi Kumar",
    website: "https://ecokart.com"
  },
  {
    logo: "https://via.placeholder.com/70x70?text=Health+",
    name: "HealthPlus",
    founder: "Sneha Reddy",
    website: "https://healthplus.ai"
  },
  {
    logo: "https://via.placeholder.com/70x70?text=Foodie",
    name: "FoodieFiesta",
    founder: "Arjun Das",
    website: "https://foodiefiesta.com"
  }
];

const container = document.getElementById("startupCards");

startups.forEach(startup => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${startup.logo}" alt="${startup.name} Logo" />
    <h3>${startup.name}</h3>
    <p><strong>Founder:</strong> ${startup.founder}</p>
    <a href="${startup.website}" target="_blank">Visit Website</a>
  `;
  container.appendChild(card);
});