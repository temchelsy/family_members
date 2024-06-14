import pool from './db.js';
import express from 'express'
const Family = express();
const PORT = process.env.PORT || 3000;

Family.use(express.json());

let family_members = [];

Family.post('/family_members', (req, res) => {
  
   db.pool('INSERT INTO family_members (name, age) VALUES ($1, $2)', [req.body.name, req.body.age]);
  res.status(201).json({ message: 'Family member added successfully' });
});

Family.put('/family_members/:id', (req, res) => {
  const memberId = req.params.id

   db.pool('UPDATE family_members SET job = $1, salary = $2 WHERE id = $3 RETURNING *', [req.body.job, req.body.salary, memberId]);
  res.status(200).json({ message: 'Family member updated successfully' });
});

Family.delete('/family_members/:id', (req, res) => {
   const memberId = req.params.id
   db.pool('DELETE family_members WHERE id = $1 RETURNING *', [memberId])
   res.json({ message: 'Family member deleted successfully' });
})

Family.get('/family_members', (req, res) => {
   db.pool('FETCH family_members')
})

Family.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);


});

export default Family