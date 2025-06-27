const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 3001;

const checkJwt = auth({
  audience: "https://api.example.com",
  issuerBaseURL: "https://dev-be67vnz15ljwc5ll.us.auth0.com",
});

app.get("/api/public", (req, res) => {
  res.json({ message: "This is a public endpoint." });
});

app.get("/api/private", checkJwt, (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.decode(token);
  const roles = decoded.roles || [];

  if (!roles.includes("admin")) {
    return res.status(403).json({ message: "Access denied" });
  }

  res.json({ message: "Secure data for admin role only." });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
