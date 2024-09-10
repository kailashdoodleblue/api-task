import staff from "../models/staff.model"
import { accesslist } from "../models/accesslist.model";
import access from "../models/access.model";
import { Op } from "sequelize";

export class StaffServices {
  async getallstaff(page: number, size: number ,sortasc:number,filterValue:string) {
    const limit = size;
    const offset = (page - 1) * size;
    const inactiveStatus = { [Op.ne]: 4 }
    let query:any = { where: { status: inactiveStatus }, limit, offset }
    if (sortasc == 1) {
      console.log("if")
      let orderby = ['name', 'ASC']
     query["order"]=[orderby]
    }
     if (filterValue) {
      let likeconditon = { [Op.like]: `%${filterValue}%` }
      query.where.name=likeconditon
      // query = { where: { status: inactiveStatus, name: likeconditon }, limit, offset }
    }
    console.log(query)
    // process.exit(1)
    return staff.findAndCountAll(query);
  }


  async createStaff(data: any) {
    const { name, mobileno, email, employeecode } = data
    const dataa = { name, mobileno, email, employeecode }
    const staffdetail: any = await staff.create(dataa)
    const staffid = staffdetail.id
    // console.log(staffid)
    const accessobject = data.access
    for (const [key, value] of Object.entries(accessobject)) {
      if (value === true) {
        console.log(key);

        const accessnames: any = await access.findOne({ where: { accessName: key } })
        const accessid = accessnames?.id
        const accesslistdata = { staffId: staffid, accessId: accessid ?? 0 }
        await accesslist.create(accesslistdata)
      }
    }

    return staffdetail

  }

  async staffDetails(id: number) {
    const staffDetails = await staff.findAll({
      where: { id: id },
      attributes: ['id', 'name', 'mobileno', 'email', 'employeecode'],
      include: [
        {
          model: accesslist,
          attributes: ['id'],
          include: [
            {
              model: access,
              attributes: ['accessName'],
            }
          ]
        }
      ]
    });

    return staffDetails;
  }

  async deleteStaff(id: number) {
    const getstaffdetails: any = await staff.findByPk(id)
    const status = 4
    return getstaffdetails.update({ status: status })
  }
}