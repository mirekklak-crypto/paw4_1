'use strict';

const express = require('express');
const app = express();

// Com4_1.2 — pole i obwód prostokąta
app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = Number(req.params.width);
  const height = Number(req.params.height);

  if( !Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0){
    return res.status(400).json({error: "invalid input"});
  }


  const area = width*height;
  const perimeter = 2*(width+height);
  res.json({area, perimeter});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
