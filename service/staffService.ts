import staff from "../models/staff.model"
import  accesslist  from "../models/accesslist.model";
import access  from "../models/access.model";

export class StaffServices{
     async getallstaff() {
        return  staff.findAll();
    }

    async createStaff(data:any){
        const {name,mobileno,email,employeecode}=data
        const dataa={name,mobileno,email,employeecode}
        const staffdetail = await staff.create(dataa)
        const staffid=staffdetail.id
        console.log(staffid)
        const accessobject=data.access
        for (const [key, value] of Object.entries(accessobject)) {
            if (value === true) {
              console.log(key);
              
              const accessnames=await access.findOne({ where: { accessName: key } })
              const accessid=accessnames?.id
              const accesslistdata={staffId:staffid,accessId:accessid??0}
              await accesslist.create(accesslistdata)
            }
          }
          
        return staffdetail

    }

    async staffDetails(id: number){
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
}