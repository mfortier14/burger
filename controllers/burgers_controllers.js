const express = require("express");
const burger = require("../models/burger");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function (req, res) {
    burger.create(["type"], [req.body.type], function(result) {
        res.json({ id: result.insertId});
    });
});

router.put("api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(
        {
            type: req.body.type
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;