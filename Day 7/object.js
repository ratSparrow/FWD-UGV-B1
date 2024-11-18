const student1 = {
    id: 1,
    name: "A",
    phone: "109209",
    enrolled: true,
    courses: ["CSE", "EEE", "ME"],
    address: {
        city: "Dhaka",
        road: '2',
        home: '7',
        block: "D"
    }
}
const student2 = {
    id: 2,
    name: "B",
    phone: "19209",
    enrolled: true,
    courses: ["CS" , "ME"],
    address: {
        city: "Barisal",
        road: '2',
        home: '6',
        block: "E"
    }
}
const student3 = {
    id: 2,
    name: "B",
    phone: "19209",
    enrolled: true,
    courses: ["CS" , "ME"],
    address: {
        city: "Barisal",
        road: '2',
        home: '6',
        block: "E"
    }
}

// console.log(student1.name)
// console.log(student1.address.city)
// console.log(student2.address.city)

console.log(student2['courses'][1])

const students = [
    {
        id: 1,
        name: "A",
        phone: "109209",
        enrolled: true,
        courses: ["CSE", "EEE", "ME"],
        address: {
            city: "Dhaka",
            road: '2',
            home: '7',
            block: "D"
        }
    },
    {
        id: 2,
        name: "B",
        phone: "109209",
        enrolled: true,
        courses: ["CSE", "EEE", "ME"],
        address: {
            city: "Dhaka",
            road: '2',
            home: '7',
            block: "D"
        }
    },
    {
        id: 3,
        name: "C",
        phone: "109209",
        enrolled: true,
        courses: ["CSE", "EEE", "ME"],
        address: {
            city: "Dhaka",
            road: '2',
            home: '7',
            block: "D"
        }
    },
    {
        id: 1,
        name: "A",
        phone: "109209",
        enrolled: true,
        courses: ["CSE", "EEE", "ME"],
        address: {
            city: "Dhaka",
            road: '2',
            home: '7',
            block: "D"
        }
    },
    {
        id: 2,
        name: "B",
        phone: "109209",
        enrolled: true,
        courses: ["CSE", "EEE", "ME"],
        address: {
            city: "Dhaka",
            road: '2',
            home: '7',
            block: "D"
        }
    },
    {
        id: 3,
        name: "C",
        phone: "109209",
        enrolled: true,
        courses: ["CSE", "EEE", "ME"],
        address: {
            city: "Dhaka",
            road: '2',
            home: '7',
            block: "D"
        }
    },

]

for (var student of students){
    console.log(student['name'])
}