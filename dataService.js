module.exports = {

    getOfficeList : () => {
        return [{
                Info: {
                    Name: "Random Office",
                    LastUpdated: new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
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
                TotalUsers: "43"
            },
            {
                Info: {
                    Name: "Random Office",
                    LastUpdated: new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
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
                    LastUpdated: new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                },
                Phone: [{
                    "PhoneType": "100",
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
                    LastUpdated: new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                },
                Phone: [{
                    "PhoneType": "100",
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
    },
    formatResponseForList : (results) => {
        return {
            Response: {
                Code: 200,
                Message: "Success"
            },
            Data: {
                Offset: 0,
                Count: 0,
                TotalRecords: results.length,
                TotalFilteredRecords: results.length,
                Results: results
            }
        }
    }
}