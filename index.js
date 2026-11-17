'use strict';

const express = require('express');
const app = express();

// Com4_1.3 — potęga + opcjonalny pierwiastek (?root=true)
app.get('/math/power/:base/:exponent', (req, res) => {
  const base = Number(req.params.base);
  const exponent = Number(req.params.exponent);

  if (!Number.isFinite(base) || !Number.isFinite(exponent)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const result = Math.pow(base, exponent);
  const response = { result };

  if (req.query.root === 'true') {
    response.root = Math.sqrt(base);
  }

  res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
