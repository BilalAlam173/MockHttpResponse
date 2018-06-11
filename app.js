const express = require('express')
const app = express()
const officeList = [{
        name: "Random Office",
        lastUpdated: {
            date: "10/04/2017",
            time: "11:37 AM",
        },
        phoneNumber: "617-128-1272",
        Address: {
            street: "67 Butler Ave.",
            city: "Wakefield",
            state: "MA",
            zipCode: "21009"
        },
        email: "email@email.com",
        users: "43"
    },
    {
        name: "Random Office",
        lastUpdated: {
            date: "10/04/2017",
            time: "11:37 AM",
        },
        phoneNumber: "617-128-1272",
        Address: {
            street: "67 Butler Ave.",
            city: "Wakefield",
            state: "MA",
            zipCode: "21009"
        },
        email: "email@email.com",
        users: "43"
    },
    {
        name: "Random Office",
        lastUpdated: {
            date: "10/04/2017",
            time: "11:37 AM",
        },
        phoneNumber: "617-128-1272",
        Address: {
            street: "67 Butler Ave.",
            city: "Wakefield",
            state: "MA",
            zipCode: "21009"
        },
        email: "email@email.com",
        users: "43"
    },
    {
        name: "Random Office",
        lastUpdated: {
            date: "10/04/2017",
            time: "11:37 AM",
        },
        phoneNumber: "617-128-1272",
        Address: {
            street: "67 Butler Ave.",
            city: "Wakefield",
            state: "MA",
            zipCode: "21009"
        },
        email: "email@email.com",
        users: "43"
    }
]

app.get('/officeList', (req, res) => {
    res.json(officeList);
})

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port ' + process.env.PORT || 3000))