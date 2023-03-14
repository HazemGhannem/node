const express = require('express');
const router = express.Router()
const {addStudent,getStudent,getallStudent,deleteStudent,updateStudent,grow,upgrade} =require('../controller/controller.js')


router.route('/add').post(addStudent)
router.route('/getall').get(getallStudent)
router.route('/get/:id').get(getStudent).delete(deleteStudent).put(updateStudent)
router.route('/getgrow').get(grow)
router.route('/upgrade').get(upgrade)




module.exports=router