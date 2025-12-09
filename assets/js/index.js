const casinos = [
  {
    name: "SwiftCasino",
    icon: "./assets/icons/brand-1.svg",
    rating: 4.9,
    minDeposit: "£10",
    methods: ["Visa", "MasterCard", "PayPal"],
    bonus: "100% up to £75 + 50 free spins",
    link: "https://affiliates.highbonuses.com/click?pid=183&offer_id=3239",
  },
  {
    name: "MrVegas",
    icon: "./assets/icons/brand-2.svg",
    rating: 4.7,
    minDeposit: "£10",
    methods: ["Visa", "Skrill", "PayPal"],
    bonus: "100% up to £200",
    link: "https://affiliates.highbonuses.com/click?pid=183&offer_id=3269",
  },
  {
    name: "Videoslots",
    icon: "./assets/icons/brand-3.png",
    rating: 4.6,
    minDeposit: "£10",
    methods: ["Visa", "Skrill", "PayPal"],
    bonus: "100% up to £200",
    link: "https://affiliates.highbonuses.com/click?pid=183&offer_id=3270",
  },
  {
    name: "SwiftCasino",
    icon: "./assets/icons/brand-1.svg",
    rating: 4.9,
    minDeposit: "£10",
    methods: ["Visa", "MasterCard", "PayPal"],
    bonus: "100% up to £75 + 50 free spins",
    link: "https://affiliates.highbonuses.com/click?pid=183&offer_id=3239",
  },
  {
    name: "MrVegas",
    icon: "./assets/icons/brand-2.svg",
    rating: 4.7,
    minDeposit: "£10",
    methods: ["Visa", "Skrill", "PayPal"],
    bonus: "100% up to £200",
    link: "https://affiliates.highbonuses.com/click?pid=183&offer_id=3269",
  },
  {
    name: "Videoslots",
    icon: "./assets/icons/brand-3.png",
    rating: 4.6,
    minDeposit: "£10",
    methods: ["Visa", "Skrill", "PayPal"],
    bonus: "100% up to £200",
    link: "https://affiliates.highbonuses.com/click?pid=183&offer_id=3270",
  }
];

const containerCasino = document.querySelector(".cards");

containerCasino.innerHTML = casinos
  .map(
    (c, i) => `
      <div class="card">
        <div class="card-header">
          <img src="${c.icon}" alt="${c.name}">
          <span class="rank">#${i + 1}</span>
        </div>

        <div class="rating">
          ⭐⭐⭐⭐⭐ <span>${c.rating}/5</span>
        </div>

        <div class="bonus-box">
          <p>WELCOME BONUS</p>
          <h3>${c.bonus}</h3>
        </div>

        <div class="meta">
          <p>MIN DEPOSIT</p>
          <h4>${c.minDeposit}</h4>
        </div>

        <ul class="features">
          ${c.methods.map((m) => `<li>✔ ${m}</li>`).join("")}
        </ul>

        <a class="play-btn" href="${c.link}" target="_blank">PLAY NOW</a>
        <p class="note">18+ | T&Cs Apply | Play Responsibly</p>
      </div>
    `
  )
  .join("");