const users = [
    {
        id: 1,
        name: 'Ram',
        email: "ram@gmail.com",
        age: 24,
        address: {
            city: "Bengaluru",
            pin: "56478"
        },
        bank: [
            {
               accNo: 12234,
               bName: "SBI",
               type: "Savings" 
            },
            {
                accNo: 4535,
                bName: "HDFC",
                type: "current"
            },
        ],
    },
    {
        id: 2,
        name: "Jhon",
        email: "jhon@gmail.com",
        age: 26,
        address: {
            city: "Mumbai",
            pin: "57587",
        },
        bank: [
            {
                accNo: 87645,
                bName: "BOI",
                type: "Savings" 
            },
            {
                accNo: 9867,
                bName: "ICIC",
                type: "current"
            }
        ]
    }
]

export default users;