const connection = require("./connection");

var orm = {
    selectAll : function(whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function(err, req) {
            if(err) throw err;
            console.log(result);
        });
    },

    // insertOne: function(tableInput) {
    //     var queryString =
    // }
}

