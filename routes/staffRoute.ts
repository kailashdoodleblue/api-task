import express from 'express';

import { StaffController } from '../controller/staffController';

const route=express.Router()

route.get('/',StaffController.getallstaff)
route.post('/addstaff',StaffController.createStaff)
route.get('/staffdetails/:id',StaffController.getstaffbyid)

export default route