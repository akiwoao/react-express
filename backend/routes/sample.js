var express = require("express");
var router = express.Router();
const mysql = require("mysql");

const con = mysql.createConnection({
    host: "db",
    user: "root",
    password: "password",
    database: "main",
});

router.get("/", function (req, res, next) {
    var resultData;
    var promise = [];
    const stock_query = "select * from stocks";
    const price_query = `select date, open, high, low, close from prices where stock_id = ? and date between '2021-01-01' and '2021-01-31'`;
    const predict_query =
        "select date, predict, up_down, propriety from predicts where date between '2021-01-01' and '2021-01-31'";

    con.query(stock_query, (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
            resultData = results;

            results.map((item) => {
                promise.push(
                    new Promise((resolve, reject) => {
                        con.query(
                            price_query,
                            item["id"],
                            function (error, results) {
                                if (error) throw error;

                                if (results.length > 0) {
                                    item["prices"] = results;
                                } else {
                                    item["items"] = [];
                                }
                                resolve();
                            }
                        );
                    })
                );
            });

            Promise.all(promise).then(() => {
                res.send(resultData);
            });
        } else {
            resultData = "";
            return resultData;
        }
    });
});

module.exports = router;
