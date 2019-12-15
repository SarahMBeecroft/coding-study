const router = require("express").Router();
const links = require("./links");
// const comments = require("./comments");

// const beerSearch = require("./beersearch");
// const breweryMapSearch = require("./brewerymapsearch");

// DB routes
router.use("/links", links);
// router.use("/comments", comments);

// External routes
// router.use("/beersearch", beerSearch);
// router.use("/brewerymapsearch", breweryMapSearch);

module.exports = router;
