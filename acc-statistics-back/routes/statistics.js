var express = require("express");
var router = express.Router();

/* GET statistics listing. */
router.get("/", function(req, res, next) {
  res.json(data);
});

const data = [
  {
    username: "andrada",
    name: "Andrada",
    acc6: 112,
    "acc6%": 5.8,
    acc7: 13,
    "acc7%": 0.7,
    acc8: 0,
    "acc8%": 9.32,
    bar1: 11,
    bar2: 33,
    bar3: 9
  },
  {
    username: "mas",
    name: "Más",
    acc6: 112,
    "acc6%": 5.8,
    acc7: 13,
    "acc7%": 0.7,
    acc8: 0,
    "acc8%": 9.32,
    bar1: 11,
    bar2: 33,
    bar3: 9
  },
  {
    username: "buffarini",
    name: "Buffarini",
    acc6: 112,
    "acc6%": 5.8,
    acc7: 13,
    "acc7%": 0.7,
    acc8: 0,
    "acc8%": 9.32,
    bar1: 11,
    bar2: 33,
    bar3: 9
  },
  {
    username: "lopez",
    name: "Lopez",
    acc6: 112,
    "acc6%": 5.8,
    acc7: 13,
    "acc7%": 0.7,
    acc8: 0,
    "acc8%": 9.32,
    bar1: 11,
    bar2: 33,
    bar3: 9
  },
  {
    username: "izquierdoz",
    name: "Izquierdoz",
    acc6: 112,
    "acc6%": 5.8,
    acc7: 13,
    "acc7%": 0.7,
    acc8: 0,
    "acc8%": 9.32,
    bar1: 11,
    bar2: 33,
    bar3: 9
  },
  {
    username: "Marcone",
    name: "Marcone",
    acc6: 112,
    "acc6%": 5.8,
    acc7: 13,
    "acc7%": 0.7,
    acc8: 0,
    "acc8%": 9.32,
    bar1: 11,
    bar2: 33,
    bar3: 9
  },
  {
    username: "Benedetto",
    name: "Benedetto",
    acc6: 112,
    "acc6%": 5.8,
    acc7: 13,
    "acc7%": 0.7,
    acc8: 0,
    "acc8%": 9.32,
    bar1: 11,
    bar2: 33,
    bar3: 9
  },
  {
    username: "Nandez",
    name: "Nandez",
    acc6: 112,
    "acc6%": 5.8,
    acc7: 13,
    "acc7%": 0.7,
    acc8: 0,
    "acc8%": 9.32,
    bar1: 11,
    bar2: 33,
    bar3: 9
  },
  {
    username: "Campuzano",
    name: "Campuzano",
    acc6: 112,
    "acc6%": 5.8,
    acc7: 13,
    "acc7%": 0.7,
    acc8: 0,
    "acc8%": 9.32,
    bar1: 11,
    bar2: 33,
    bar3: 9
  }
];

module.exports = router;
