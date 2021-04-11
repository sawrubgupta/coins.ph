"use strict";

const Coins = require("../lib");

let client = new Coins({
  key: "khguo6qklxkE9ItHATbiBeN9SyO3sJJAi3b7Ft8N"
  , secret: "tVktBIphk9GJtOlxKFqe5jTlqJZaLj94toljNLRn4cjjBjSqyW"

  // This is optional
  , host: process.env.COINS_HOST || "https://coins.ph/"
});


exports.newApiDevelopedByLeo = async (req, res, next) => {
  client.cryptoAccounts({}, (err, data) => {
    res.status(200).json({
      data: data,
    })
  });
}



exports.transfers = async (req, res, next) => {
  client.createTransferRequest(req.body, (err, data) => {
    res.status(200).json({
      data: data,
    })
  });
}



exports.createBuyorder = async (req, res, next) => {
  client.createUser({}, (err, data) => {
    if (data != '') {
      res.status(200).json({
        status: "success",
        data: data,
        message: "buyorder"
      })
    }
    else {
      res.status(404).json({
        status: "fail",
        data: data,
        message: "buyorder not found"
      })

    }
  });
}

exports.buyorder = async (req, res, next) => {
  console.log("hello");
  client.buy + order({}, (err, data) => {
    if (data != '') {
      res.status(200).json({
        status: "success",
        data: data,
        message: "buyorder get by id"
      })
    }
    else {
      res.status(404).json({
        status: "fail",
        data: null,
        message: "buyorder not found"
      })

    }
  });
}
exports.markBuyorderPaid = async (req, res, next) => {
  client.markBuyorderPaid({}, (err, data) => {

    if (data != null) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "markBuyorderPaid"
      })
    }
    else {
      res.status(404).json({
        status: "fail",
        data: null,
        message: "Order cannot be marked as paid"
      })

    }
  });
}
exports.createTransferRequest = async (req, res, next) => {
  try {
    client.createBuyorder(req.body, (err, data) => {
      if (data != '') {
        res.status(200).json({
          status: "success",
          data: err,
          message: "buyorder"
        })
      }
      else {
        res.status(404).json({
          status: "fail",
          data: err,
          message: "buyorder not found"
        })
  
      }
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

exports.getAccountInfo = async (req, res, next) => {
  try {
    client.balanceStatement(req.params, (err, data) => {
      res.status(200).json({
        status: "success",
        data: data,
        message: "balanceStatement"
      })
    });
  } catch (err) {
    next(err);
  }
}
