const express = require('express')
const app = express()
const officeList = [{
        Info: {
            Name: "Random Office",
            LastUpdated: {
                Date: "10/04/2017",
                Time: "11:37 AM",
            },
        },
        Phone: [{
            "PhoneType": "200",
            "Phone": "(123) 456-7898",
            "PhoneExtension": "(11116878)"
        }],
        Address: {
            Street: "67 Butler Ave.",
            City: "Wakefield",
            State: "MA",
            ZipCode: "21009"
        },
        Email: "email@email.com",
        Users: "43"
    },
    {
        Info: {
            Name: "Random Office",
            LastUpdated: {
                Date: "10/04/2017",
                Time: "11:37 AM",
            },
        },
        Phone: [{
            "PhoneType": "200",
            "Phone": "(123) 456-7898",
            "PhoneExtension": "(11116878)"
        }],
        Address: {
            Street: "67 Butler Ave.",
            City: "Wakefield",
            State: "MA",
            ZipCode: "21009"
        },
        Email: "email@email.com",
        Users: "43"
    },
    {
        Info: {
            Name: "Random Office",
            LastUpdated: {
                Date: "10/04/2017",
                Time: "11:37 AM",
            },
        },
        Phone: [{
            "PhoneType": "200",
            "Phone": "(123) 456-7898",
            "PhoneExtension": "(11116878)"
        }],
        Address: {
            Street: "67 Butler Ave.",
            City: "Wakefield",
            State: "MA",
            ZipCode: "21009"
        },
        Email: "email@email.com",
        Users: "43"
    },
    {
        Info: {
            Name: "Random Office",
            LastUpdated: {
                Date: "10/04/2017",
                Time: "11:37 AM",
            },
        },
        Phone: [{
            "PhoneType": "200",
            "Phone": "(123) 456-7898",
            "PhoneExtension": "(11116878)"
        }],
        Address: {
            Street: "67 Butler Ave.",
            City: "Wakefield",
            State: "MA",
            ZipCode: "21009"
        },
        Email: "email@email.com",
        Users: "43"
    },
    
]
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Cache-Control,authorization,x-frame-options, Accept");
    res.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST,DELETE");
    next();
});
app.get('/officeList', (req, res) => {
    res.json({
        Data: {
            Results: officeList
        }
    });
})

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port ' + process.env.PORT || 3000))