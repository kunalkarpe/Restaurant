const express = require("express")
const router = express.Router()
// const app = use(express())
const app =express()
const PORT = 5000

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(PORT, () => {
    console.log("App is running on port ", PORT)
})