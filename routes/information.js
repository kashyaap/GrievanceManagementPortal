const express = require('express')
const router = express.Router()
var fetcher = require(../fetcher);

router.get(/fetch-data',fetcher.fetchData);

module.exports = router;
