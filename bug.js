const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // Instead of just logging, send a proper error response
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch user' });
    } else if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));