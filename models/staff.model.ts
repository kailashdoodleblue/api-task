import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../config/databsae'; // Ensure the path is correct
import AccessList from './accesslist.model';

// Define the attributes interface
interface StaffAttributes {
    id?: number;
    name: string;
    mobileno: bigint;
    email: string;
    employeecode: number;
    createdAt?: Date;
    updatedAt?: Date;
}

interface StaffCreationAttributes extends Optional<StaffAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

class Staff extends Model<StaffAttributes, StaffCreationAttributes> implements StaffAttributes {
    public id!: number;
    public name!: string;
    public mobileno!: bigint;
    public email!: string;
    public employeecode!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Staff.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mobileno: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        employeecode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        }
    },
    {
        sequelize,
        tableName: 'staffs',
        timestamps: true 
    }
);

Staff.hasMany(AccessList, { foreignKey: 'staffId' });
AccessList.belongsTo(Staff,{foreignKey: 'staffId'})

export default Staff;



// import {Model,Optional,DataTypes} from "sequelize"
// import {sequelize} from '../config/databsae'

// interface StaffAttributes{
//     id?:number;
//     name:string;
//     mobileno:bigint;
//     email:string;
//     employeecode:number;
//     createdAt?:Date;
//     updatedAt?:Date;
// }
// interface StaffAttributesCreation extends Optional<StaffAttributes, 'id'|'createdAt'|'updatedAt'> {}

// const staff = sequelize.define<Model<StaffAttributes,StaffAttributesCreation>>(
  
//     "staff",{
//         id:{
//             type:DataTypes.INTEGER,
//             autoIncrement:true,
//             primaryKey:true
//         },
//         name:{
//             type: DataTypes.STRING,
//           allowNull: false
//           },
//           mobileno:{
//             type: DataTypes.BIGINT,
//           allowNull: false
//           },
//           email:{
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true
//           },
//           employeecode:{
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             unique: true
//           }
//     }
// );
// export default staff
