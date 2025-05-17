// server.js
const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

let sites = [
  { id: 1, name: "Site 1", description: "Description 1" },
  { id: 2, name: "Site 2", description: "Description 2" },
];

app.get("/api/sites", (req, res) => {
  res.json(sites);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
