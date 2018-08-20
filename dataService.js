module.exports = {

    getOfficeList: () => {
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
    getOfficeDetail: () => {
        return {
            "Name": "Random Office",
            "ImageUrl": null,
            "Email": "email@email.com",
            "Phone": {
                "Id": 21,
                "Phone": "(123) 456-7898",
                "PhoneType": "200",
                "PhoneExtension": "(11116878)",
                "Source": null
            },
            Address: {
                Street: "67 Butler Ave.",
                City: "Wakefield",
                State: "MA",
                ZipCode: "21009"
            },
            "LastLogin": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
            "DAT": "123455",
            "TruckStop": "654322",
            "ModifiedDate": new Date(Date.UTC(96, 1, 2, 3, 4, 5))
        }
    },
    getofficeOverview: () => {
        return {
            "AverageLoads": 0,
            "AverageMargin": 0,
            "TotalBid": 0,
            "TotalLoads": 0,
            "BidsTimeline": [{
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                    "Value": 0
                },
                {
                    "Date": new Date(Date.UTC(98, 1, 2, 3, 4, 5)),
                    "Value": 10
                },
                {
                    "Date": new Date(Date.UTC(196, 1, 2, 3, 4, 6)),
                    "Value": 20
                },
                {
                    "Date": new Date(Date.UTC(296, 1, 2, 3, 4, 7)),
                    "Value": 30
                },
                {
                    "Date": new Date(Date.UTC(396, 1, 2, 3, 4, 8)),
                    "Value": 40
                },
                {
                    "Date": new Date(Date.UTC(496, 1, 2, 8, 4, 8)),
                    "Value": 50
                },
                {
                    "Date": new Date(Date.UTC(896, 1, 2, 5, 4, 9)),
                    "Value": 60
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 10)),
                    "Value": 60
                }
            ],
            "LoadsTimeline": [{
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                    "Value": 0
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 6)),
                    "Value": 30
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 7)),
                    "Value": 32
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 8)),
                    "Value": 35
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 9)),
                    "Value": 37
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 10)),
                    "Value": 39
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 11)),
                    "Value": 41
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 12)),
                    "Value": 45
                }
            ]
        }
    },
    getAuditLogs: () => {
        return [{
                "Type": 1540,
                "ActionType": 200,
                "ClassName": "Fusion.Core.DataTransferObjects.CustomEvents.UnMarkLoadPriorityLog, Fusion.Core.DataTransferObjects, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                "Name": "UnMarkLoadPriorityLog",
                "LoadId": 14,
                "LoadPrimaryReference": "4360900416",
                "OfficeName": "Random Office",
                "UserAccountId": "e152e5d2-8de8-4fed-bb88-075f489cc9a9",
                "UserFirstName": "Riaz",
                "UserLastName": "Raza",
                "References": [
                    "Office15",
                    "Load4360900416",
                    "Usere152e5d2-8de8-4fed-bb88-075f489cc9a9"
                ],
                "id": "580f9cc8-543a-4db1-b414-b9aa98c229d4",
                "DateTime": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                "_ts": 1528719140
            },
            {
                "Type": 1530,
                "ActionType": 100,
                "ClassName": "Fusion.Core.DataTransferObjects.CustomEvents.MarkLoadPriorityLog, Fusion.Core.DataTransferObjects, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                "Name": "MarkLoadPriorityLog",
                "LoadId": 14,
                "LoadPrimaryReference": "4360900416",
                "OfficeName": "Random Office",
                "FirstName": null,
                "LastName": null,
                "UserAccountId": "e152e5d2-8de8-4fed-bb88-075f489cc9a9",
                "UserFirstName": "Riaz",
                "UserLastName": "Raza",
                "References": [
                    "Office15",
                    "Load4360900416",
                    "Usere152e5d2-8de8-4fed-bb88-075f489cc9a9"
                ],
                "id": "4bb22fc1-c64b-4207-967a-d196742fd2eb",
                "DateTime": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                "_ts": 1528718224
            },
            {
                "Type": 1530,
                "ActionType": 300,
                "ClassName": "Fusion.Core.DataTransferObjects.CustomEvents.MarkLoadPriorityLog, Fusion.Core.DataTransferObjects, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                "Name": "MarkLoadPriorityLog",
                "LoadId": 14,
                "LoadPrimaryReference": "4360900416",
                "OfficeName": "Random Office",
                "FirstName": null,
                "LastName": null,
                "UserAccountId": "471b5fcc-1e8d-4cfc-9c1e-90d17d12126e",
                "UserFirstName": "mudassir",
                "UserLastName": "dadad",
                "References": [
                    "Office15",
                    "Load4360900416",
                    "User471b5fcc-1e8d-4cfc-9c1e-90d17d12126e"
                ],
                "id": "97f6578b-15bb-4707-bca2-a323337070f2",
                "DateTime": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                "_ts": 1528717646
            },
            {
                "Type": 1530,
                "ActionType": 100,
                "ClassName": "Fusion.Core.DataTransferObjects.CustomEvents.MarkLoadPriorityLog, Fusion.Core.DataTransferObjects, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                "Name": "MarkLoadPriorityLog",
                "LoadId": 14,
                "LoadPrimaryReference": "4360900416",
                "OfficeName": "Random Office",
                "FirstName": null,
                "LastName": null,
                "UserAccountId": "471b5fcc-1e8d-4cfc-9c1e-90d17d12126e",
                "UserFirstName": "mudassir",
                "UserLastName": "dadad",
                "References": [
                    "Office15",
                    "Load4360900416",
                    "User471b5fcc-1e8d-4cfc-9c1e-90d17d12126e"
                ],
                "id": "3c364d94-66d1-45aa-9945-a46d296fa79b",
                "DateTime": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                "_ts": 1528717589
            },
            {
                "Type": 1530,
                "ActionType": 200,
                "ClassName": "Fusion.Core.DataTransferObjects.CustomEvents.MarkLoadPriorityLog, Fusion.Core.DataTransferObjects, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
                "Name": "MarkLoadPriorityLog",
                "LoadId": 14,
                "LoadPrimaryReference": "4360900416",
                "OfficeName": "Random Office",
                "FirstName": null,
                "LastName": null,
                "UserAccountId": "471b5fcc-1e8d-4cfc-9c1e-90d17d12126e",
                "UserFirstName": "mudassir",
                "UserLastName": "dadad",
                "References": [
                    "Office15",
                    "Load4360900416",
                    "User471b5fcc-1e8d-4cfc-9c1e-90d17d12126e"
                ],
                "id": "0be7c40e-21f6-4cfa-a407-9178407e01df",
                "DateTime": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                "_ts": 1528717587
            }
        ]
    },
    getOfficeUsers: () => {
        return [{
                "Id": "76cb4894-1f57-4d4f-8c48-faeb95bd03f9",
                "Info": {
                    "FirstName": "aaa",
                    "LastName": "aaa",
                    "ModifiedDate": "2018-06-13T09:52:30",
                    "LastLogin": new Date(Date.UTC(96, 1, 2, 3, 4, 5))
                },
                "Status": 100,
                "Email": "random@email.com",
                "Role": "Dispatcher",
                "TotalBooked": 0,
                "TotalLoads": 0,
            },
            {
                "Id": "76cb4894-1f57-4d4f-8c48-faeb95bd03f9",
                "Info": {
                    "FirstName": "aaa",
                    "LastName": "aaa",
                    "ModifiedDate": "2018-06-13T09:52:30",
                    "LastLogin": new Date(Date.UTC(96, 1, 2, 3, 4, 5))
                },
                "Status": 100,
                "Email": "random@email.com",
                "Role": "Dispatcher",
                "TotalBooked": 0,
                "TotalLoads": 0,
            },
            {
                "Id": "76cb4894-1f57-4d4f-8c48-faeb95bd03f9",
                "Info": {
                    "FirstName": "aaa",
                    "LastName": "aaa",
                    "ModifiedDate": "2018-06-13T09:52:30",
                    "LastLogin": new Date(Date.UTC(96, 1, 2, 3, 4, 5))
                },
                "Email": "random@email.com",
                "Role": "Dispatcher",
                "Status": 300,
                "TotalBooked": 0,
                "TotalLoads": 0,
            },
            {
                "Id": "76cb4894-1f57-4d4f-8c48-faeb95bd03f9",
                "Info": {
                    "FirstName": "aaa",
                    "LastName": "aaa",
                    "ModifiedDate": "2018-06-13T09:52:30",
                    "LastLogin": new Date(Date.UTC(96, 1, 2, 3, 4, 5))
                },
                "Email": "random@email.com",
                "Role": "Dispatcher",
                "Status": 200,
                "TotalBooked": 0,
                "TotalLoads": 0,
            }
        ]
    },
    /*@params: {
        100:num of objects,
        200:num of objects,
        300:num of objects,
        400:num of objects,
        500:num of objects,
        600:num of objects,
        650:num of objects,
        700:num of objects,
        800:num of objects,
        550:num of objects,
    }
     * 
     */
    getSources: (params) => {
        let sources = [];

        for (let key in params) {
            switch (key) {
                case '100':
                    {
                        if (!isNaN(params[key])) {
                            for (let i = 0; i < params[key]; i++) {
                                sources.push({
                                    Type: "Backhaul",
                                    TypeCode: 100,
                                    LoadId: 123,
                                    Destination: {
                                        Street: "67 Butler Ave.",
                                        City: "Wakefield",
                                        State: "MA",
                                        ZipCode: "21009"
                                    },
                                    TargetDeliveryDate: new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                                })
                            }
                        }
                        break;
                    }
                case '200':
                    {
                        if (!isNaN(params[key])) {
                            for (let i = 0; i < params[key]; i++) {
                                sources.push({
                                    Type: "Inbound",
                                    TypeCode: 200,
                                    LoadId: 123,
                                    Destination: {
                                        Street: "67 Butler Ave.",
                                        City: "Wakefield",
                                        State: "MA",
                                        ZipCode: "21009"
                                    },
                                    TargetDeliveryDate: new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                                })
                            }
                        }
                        break;
                    }
                case '300':
                    {
                        if (!isNaN(params[key])) {
                            for (let i = 0; i < params[key]; i++) {
                                sources.push({
                                    Type: "DAT",
                                    TypeCode: 300,
                                    Origin: {
                                        Street: "67 Butler Ave.",
                                        City: "Wakefield",
                                        State: "MA",
                                        ZipCode: "21009"
                                    },
                                    Equipment: "test",
                                    PhoneNumber: 12345678910,
                                    AvailableDate: new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                                    Destination: {
                                        Street: "67 Butler Ave.",
                                        City: "Wakefield",
                                        State: "MA",
                                        ZipCode: "21009"
                                    },
                                })
                            }
                        }
                        break;
                    }
                case '400':
                    {
                        if (!isNaN(params[key])) {
                            for (let i = 0; i < params[key]; i++) {
                                sources.push({
                                    Type: "Truckstop",
                                    TypeCode: 400,
                                    Origin: {
                                        Street: "67 Butler Ave.",
                                        City: "Wakefield",
                                        State: "MA",
                                        ZipCode: "21009"
                                    },
                                    Equipment: "test",
                                    PhoneNumber: 12345678910,
                                    AvailableDate: new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                                    Destination: {
                                        Street: "67 Butler Ave.",
                                        City: "Wakefield",
                                        State: "MA",
                                        ZipCode: "21009"
                                    },
                                })
                            }
                        }
                        break;
                    }
                case '500':
                    {
                        if (!isNaN(params[key])) {
                            for (let i = 0; i < params[key]; i++) {
                                sources.push({

                                    Type: "Historical",
                                    TypeCode: 500,
                                    LoadCount: 123,
                                    AverageRate: 123
                                })
                            }
                        }
                        break;
                    }
                case '550':
                    {
                        if (!isNaN(params[key])) {
                            for (let i = 0; i < params[key]; i++) {
                                sources.push({

                                    Type: "Bid History",
                                    TypeCode: 550,
                                    LoadCount: 123,
                                    AverageRate: 123
                                })
                            }
                        }
                        break;
                    }
                case '600':
                    {
                        if (!isNaN(params[key])) {
                            for (let i = 0; i < params[key]; i++) {
                                sources.push({
                                    Type: "Dark Capacity",
                                    TypeCode: 600,
                                    Source: "test",
                                    SearchCount: 100,
                                    DestinationPercentage: 30
                                })
                            }
                        }
                        break;
                    }
                case '650':
                    {
                        if (!isNaN(params[key])) {
                            for (let i = 0; i < params[key]; i++) {
                                sources.push({
                                    Type: "Dark Capacity",
                                    TypeCode: 650,
                                    Source: "test",
                                    PostCount: 100,
                                    DestinationPercentage: 30
                                })
                            }
                        }
                        break;
                    }
                case '700':
                    {
                        if (!isNaN(params[key])) {
                            for (let i = 0; i < params[key]; i++) {
                                sources.push({
                                    Type: "Prefferred Lane",
                                    TypeCode: 700,
                                    LastUpdated: new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                                })
                            }
                        }
                        break;
                    }
                case '800':
                    {
                        if (!isNaN(params[key])) {
                            for (let i = 0; i < params[key]; i++) {
                                sources.push({
                                    Type: "Home based",
                                    TypeCode: 800,
                                    Address: {
                                        Street: "67 Butler Ave.",
                                        City: "Wakefield",
                                        State: "MA",
                                        ZipCode: "21009"
                                    },
                                })
                            }
                        }
                        break;
                    }
            }
        }

        return sources;
    },
    formatResponseForList: (results) => {
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
    },
    formatResponseForSources: (results) => {
        return {
            Response: {
                Code: 200,
                Message: "Success"
            },
            data: {
                Data: results
            }
        }
    },
    formatResponse: (results) => {
        return {
            Response: {
                Code: 200,
                Message: "Success"
            },
            Data: results,
        }
    }
}