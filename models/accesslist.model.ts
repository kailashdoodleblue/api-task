import { Model, Optional, DataTypes } from "sequelize"
import {sequelize} from "../config/databsae"

interface AccessListAttributes {
    id: number;
    staffId?: number;
    accessId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
interface AccessListAttributesCreation extends Optional<AccessListAttributes, 'id' | 'createdAt' | 'updatedAt'> { }

export const accesslist = sequelize.define<Model<AccessListAttributes, AccessListAttributesCreation>>(
    "accesslist", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    staffId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    accessId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        timestamps: true
    }
);


// import { Model, Optional, DataTypes } from 'sequelize';
// import { sequelize } from '../config/databsae'; 

// interface AccessListAttributes {
//     id?: number; 
//     staffId: number; 
//     accessId: number;
//     createdAt?: Date;
//     updatedAt?: Date;
// }

// interface AccessListCreationAttributes extends Optional<AccessListAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

// class AccessList extends Model<AccessListAttributes, AccessListCreationAttributes> implements AccessListAttributes {
//     public id!: number;
//     public staffId!: number;
//     public accessId!: number;
//     public createdAt!: Date;
//     public updatedAt!: Date;
// }

// AccessList.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         staffId: { 
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },
//         accessId: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         }
//     },
//     {
//         sequelize, 
//         tableName: 'accesslists', 
//         timestamps: true 
//     }
// );

// export default AccessList;


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
