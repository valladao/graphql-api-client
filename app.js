const express = require("express")
const fetch = require("node-fetch")

const app = express()
app.use(express.static("public"))

app.get("/data", async (req, res) => {
  const query = `{ viewer { login } }`
  const url = "https://api.github.com/graphql"
  let response

  const options = {
    method: "post",
    headers: {
      "content-type": "application/json",
      authorization: "bearer " + process.env.APIKEY,
    },
    body: JSON.stringify({ query: query }),
  }

  try {
    response = await fetch(url, options)
  } catch (error) {
    console.error(error)
  }
  const data = await response.json()
  console.log(data)

  res.json(data)
})

app.listen(3000, () => console.log("Server ready"))
