const express =require('express');
const router =express.Router();

const usersController =require('../controllers/users');

router.get('/', usersController.getALL);

router.get('/:id', usersController.getSingle);

// Routes are here

router.post('/', usersController.addUser);

router.put('/:id', usersController.updateUser);

router.delete('/:id', usersController.deleteUser);


module.exports = router;