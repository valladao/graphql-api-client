document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("/data")
  const text = await response.text()
  alert(text)
})
