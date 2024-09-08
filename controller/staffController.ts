import { StaffServices } from "../service/staffService";
import { Request, Response } from "express";

const staffService = new StaffServices()

export class StaffController {

    static async getallstaff(req: Request, res: Response) {
        const staffs = await staffService.getallstaff()
        res.json(staffs).status(200)
    }

    static async createStaff(req: Request, res: Response) {
        try {
            const staff = await staffService.createStaff(req.body)
            res.json(staff).status(200)
        }
        catch (err: any) {
            res.json({ message: err.message }).status(400)
        }

    }

    static async getstaffbyid(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const staffs = await staffService.staffDetails(id)
            res.json(staffs).status(200)
        }
        catch (err: any) {
            res.json({ message: err.message }).status(400)
        }
    }



}