const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... database query to fetch user data based on userId ...
    const user = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
    if (!user || user.rowCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user.rows[0]);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// ... other routes ...

app.listen(3000, () => console.log('Server listening on port 3000'));