import { Model, Optional, DataTypes } from "sequelize"
import {sequelize} from "../config/databsae"
import {accesslist} from './accesslist.model';


interface AccessAttributes {
    id: number;
    accessName: string;
    createdAt?: Date;
    updatedAt?: Date;
}
interface AccessAttributesCreation extends Optional<AccessAttributes, 'id' | 'createdAt' | 'updatedAt'> { }

const access = sequelize.define<Model<AccessAttributes, AccessAttributesCreation>>(
    "access", {
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
        timestamps: true
    }
);


access.hasMany(accesslist, { foreignKey: 'accessId' });
accesslist.belongsTo(access, { foreignKey: 'accessId' });

export default access


// import { Model, Optional, DataTypes } from 'sequelize';
// import { sequelize } from '../config/databsae'; 
// import {accesslist} from './accesslist.model';

// interface AccessAttributes {
//     id?: number; 
//     accessName: string;
//     createdAt?: Date;
//     updatedAt?: Date;
// }

// interface AccessCreationAttributes extends Optional<AccessAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

// class Access extends Model<AccessAttributes, AccessCreationAttributes> implements AccessAttributes {
//     public id!: number;
//     public accessName!: string;
//     public createdAt!: Date;
//     public updatedAt!: Date;
// }

// Access.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         accessName: {
//             type: DataTypes.STRING,
//             allowNull: false
//         }
//     },
//     {
//         sequelize, 
//         tableName: 'accesses', 
//         timestamps: true 
//     }
// );

// Access.hasMany(AccessList, { foreignKey: 'accessId' });
// AccessList.belongsTo(Access, { foreignKey: 'accessId' });


// export default Access;



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