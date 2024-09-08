import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../config/databsae'; // Fixed the spelling
import AccessList from './accesslist.model';

// Define the attributes interface
interface AccessAttributes {
    id?: number; // Optional because it's auto-generated
    accessName: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// Define the attributes used for creating a record
interface AccessCreationAttributes extends Optional<AccessAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

// Extend the Model class with your attributes interface
class Access extends Model<AccessAttributes, AccessCreationAttributes> implements AccessAttributes {
    public id!: number;
    public accessName!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

// Initialize the model using `init`
Access.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        accessName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize, // Sequelize instance
        tableName: 'accesses', // Table name
        timestamps: true // Enable timestamps (createdAt, updatedAt)
    }
);

Access.hasMany(AccessList, { foreignKey: 'accessId' });
AccessList.belongsTo(Access, { foreignKey: 'accessId' });


export default Access;



// import { Model, Optional, DataTypes } from "sequelize"
// import {sequelize} from "../config/databsae"

// interface AccessAttributes {
//     id: number;
//     accessName: string;
//     createdAt?: Date;
//     updatedAt?: Date;
// }
// interface AccessAttributesCreation extends Optional<AccessAttributes, 'id' | 'createdAt' | 'updatedAt'> { }

// const access = sequelize.define<Model<AccessAttributes, AccessAttributesCreation>>(
//     "access", {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     accessName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// },
//     {
//         timestamps: true
//     }
// );

// export default access