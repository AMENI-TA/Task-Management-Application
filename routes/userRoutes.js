

/*const express = require ('express');
const router = express.Router();

const {getAllUsers,createUser,findUser,updateUser,deleteUser}= require('../controllers/userController')

router.get('/', getAllUsers );
router.post('/', createUser);
router.get('/:id', findUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser)


// HTTP:// localhost:3005/users:id  */


const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Exemple de route d'enregistrement
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  await user.save();
  res.status(201).json({ message: 'User created' });
});

module.exports = router;






