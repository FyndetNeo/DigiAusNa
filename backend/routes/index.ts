//IMPORT NPMS
import express from 'express'

//EXPORT
export const router = express.Router();

//SETUP
router.get('/', function(req, res) {
  res.send('<h1 style="font-size: 120px">this is backend!!!</h1>');
});


