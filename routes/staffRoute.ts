import express from 'express';

import { StaffController } from '../controller/staffController';

const route=express.Router()

route.get('/getAllStaffs',StaffController.getallstaff)
route.post('/addStaff',StaffController.createStaff)
route.get('/staffDetailsById/:id',StaffController.getstaffbyid)
route.delete('/deleteStaff/:id',StaffController.deleteStaff)

export default route