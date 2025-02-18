const express = require('express');
const {
  getAllStaffs,
  getStaffById,
  createStaff,
  updateStaff,
  deleteStaff,
} = require('../controllers/staffController');

const router = express.Router();

// Routes
router.get('/', getAllStaffs);    
router.get('/:id', getStaffById); 
router.post('/', createStaff); 
router.put('/:id', updateStaff);   
router.delete('/:id', deleteStaff);  

module.exports = router;
