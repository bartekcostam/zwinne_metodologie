require("dotenv").config()
const { faker } = require("@faker-js/faker")
const db = require("./database")

const randomName = faker.name.firstName()
const randomSurname = "Kowalski"
const age = Math.floor(Math.random() * 100)
const email = faker.internet.email() // Kassandra.Haley@erich.biz
const password = faker.internet.password()
const username = faker.animal.type()
const phoneNo = Math.floor(Math.random() * 1000000)

const courses = [1, 2, 3, 4]
const randomCourses = Math.floor(Math.random() * courses.length)

;(async () => {
    await db
        .promise()
        .query(`INSERT INTO users (username,password, email,phone_number,is_Admin) VALUES(?,?,?,?,?)`, [
            username,
            password,
            email,
            phoneNo,
            0,
        ])

    const newUser = (await db.promise().query(`SELECT * FROM users WHERE email = ?`, [email]))[0]
    console.log(newUser)
})()