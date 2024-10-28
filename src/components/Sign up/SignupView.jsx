fetch("https://my-flix-app-7899.onrender.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Username, Password, Email })
  })
  .then(response => response.json())
  .then(data => {
    if (data) { /* Handle successful signup */ }
  });
  