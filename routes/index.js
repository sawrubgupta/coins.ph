var express = require('express');
var router = express.Router();
const coins = require("../example/index");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/buyorder",coins.createBuyorder);

router.get("/buyorder/:id",coins.buyorder);




//new api with endpoint leoApi 

router.get("/leoApi",coins.newApiDevelopedByLeo);

router.post("/transfersCoins",coins.transfers);


router.get("/accountInfo",coins.getAccountInfo);



router.post("/createTransferRequest",coins.createTransferRequest);


router.put("/markBuyorderPaid/:id",coins.markBuyorderPaid);


module.exports = router;
