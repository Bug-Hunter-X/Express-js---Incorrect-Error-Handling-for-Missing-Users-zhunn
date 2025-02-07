const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data based on userId ...
  if (!user) {
    return res.status(404).send('User not found'); // Correct way to handle not found
  }
  res.send(user); // Sending the user data
});

// ... other routes ...

app.listen(3000, () => console.log('Server listening on port 3000'));