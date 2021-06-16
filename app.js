const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/data", (req, res) => {
  res.end("Response from the API!")
})

app.listen(3000, () => console.log("Server ready"))
