import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../config/databsae'; // Correct the import spelling

// Define the attributes interface
interface AccessListAttributes {
    id?: number; // Optional because it is auto-incremented
    staffId: number; // Fixed the typo from `saffId` to `staffId`
    accessId: number;
    createdAt?: Date;
    updatedAt?: Date;
}

// Define the attributes used for creating a record
interface AccessListCreationAttributes extends Optional<AccessListAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

// Extend the Model class with your attributes interface
class AccessList extends Model<AccessListAttributes, AccessListCreationAttributes> implements AccessListAttributes {
    public id!: number;
    public staffId!: number;
    public accessId!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
}

// Initialize the model using `init`
AccessList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        staffId: { // Corrected field name
            type: DataTypes.INTEGER,
            allowNull: false
        },
        accessId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize, // Sequelize instance
        tableName: 'accesslists', // Table name
        timestamps: true // Enable timestamps (createdAt, updatedAt)
    }
);

export default AccessList;


// import { Model, Optional, DataTypes } from "sequelize"
// import {sequelize} from "../config/databsae"

// interface AccessListAttributes {
//     id: number;
//     staffId?: number;
//     accessId?: number;
//     createdAt?: Date;
//     updatedAt?: Date;
// }
// interface AccessListAttributesCreation extends Optional<AccessListAttributes, 'id' | 'createdAt' | 'updatedAt'> { }

// export const accesslist = sequelize.define<Model<AccessListAttributes, AccessListAttributesCreation>>(
//     "accesslist", {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     staffId: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     accessId: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     }
// },
//     {
//         timestamps: true
//     }
// );
