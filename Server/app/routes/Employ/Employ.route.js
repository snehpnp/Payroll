
"use strict"

const router = require("express").Router()
const { add_employ, get_emlpoy,emp_delete,emp_update ,get_one_emp}= require('../../controllers/Employ/EmpInfo.cotroller')

router.post('/add_employ',add_employ)
router.get('/get_employ',get_emlpoy)
router.delete('/delete_emp/:id',emp_delete)
router.post('/update/:id',emp_update)
router.get('/emp_1/:id',get_one_emp)
module.exports = router;

