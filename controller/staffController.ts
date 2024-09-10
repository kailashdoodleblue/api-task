import { StaffServices } from "../service/staffService";
import { Request, Response } from "express";

const staffService = new StaffServices()

export class StaffController {

    static async getallstaff(req: Request, res: Response) {
        const page= parseInt(req.query.page as string);
        const size= parseInt(req.query.size as string);
        const sortasc:any=req.query.sortasc
        const filterValue:any=req.query.filterValue
        const staffs = await staffService.getallstaff(page,size,sortasc,filterValue)
        res.json(
            {
                totalItems:staffs.count,
                totalPage:Math.ceil(staffs.count/size),
                currentPage:page,
                data:staffs.rows
            }
        ).status(200)
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

    static async deleteStaff(req:Request,res:Response){
        try {
            const id = parseInt(req.params.id, 10);
            await staffService.deleteStaff(id)
            res.json({message :"Staff deleted"}).status(200)
        }
        catch (err: any) {
            res.json({ message: err.message }).status(400)
        }
    }



}