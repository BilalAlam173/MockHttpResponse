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
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                    "Value": 0
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                    "Value": 0
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                    "Value": 0
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                    "Value": 0
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                    "Value": 0
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                    "Value": 0
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                    "Value": 0
                }
            ],
            "LoadsTimeline": [{
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                    "Value": 0
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                    "Value": 0
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                    "Value": 0
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                    "Value": 0
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                    "Value": 0
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                    "Value": 0
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                    "Value": 0
                },
                {
                    "Date": new Date(Date.UTC(96, 1, 2, 3, 4, 5)),
                    "Value": 0
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