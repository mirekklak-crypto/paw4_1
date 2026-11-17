'use strict';

const express = require('express');
const app = express();

// Com4_1.1 — pole i obwód koła
app.get('/math/circle/:r', (req, res) => {
  const r = Number(req.params.r);

  if (!Number.isFinite(r) || r <= 0) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const area = (Math.PI * r * r).toFixed(2);
  const circumference = (2 * Math.PI * r).toFixed(2);

  res.json({ area, circumference });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
