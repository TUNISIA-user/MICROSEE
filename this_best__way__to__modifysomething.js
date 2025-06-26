const cards = [
  { nameCards: "power", DescriptionCard: "Strong as a horse at dinner. Stronger after. 🐎", price: 50, check: false },
  { nameCards: "focus", DescriptionCard: "Monk-level focus... unless TikTok opens. 🤫", price: 35, check: false },
  { nameCards: "stealth", DescriptionCard: "Hide from duties for 24 hours. 🕵️‍♂️", price: 70, check: false },
  { nameCards: "romance", DescriptionCard: "Talk like a poet. Risk: love overflow. ❤️", price: 40, check: false },
  { nameCards: "sleep", DescriptionCard: "Sleep like a rock. Even during exams. 😴", price: 55, check: false },
  { nameCards: "speed", DescriptionCard: "So fast, even your Wi-Fi stutters. ⚡", price: 60, check: false }
];
  
cards[0]  = {...cards[0],check:true}
console.log(cards)
