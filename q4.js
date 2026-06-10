db.employees.insertMany([{
  name: "Amy Covington",
  email: "amy@gmail.com",
  department: "Admin",
  salary: 3407,
  location: ["FL", "OH"],
  date: Date()
},
{ name: "Shawn",
  email: "shawn@gmail.com",
  department: "IT",
  salary: 5000,
  location: ["AZ", "FL"],
  date: Date()
}])

db.employees.find()