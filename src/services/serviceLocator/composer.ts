import { Connection } from "mysql2"
import {DependencyLocator} from './dependenciesLocator';
import database from '../database'
import { UsersUtils } from '../../utils/users';

const di = DependencyLocator.getInstance();

const types = {
    database: "database-conexion",
    users: "users-utils"
}

function getDatabase (): Connection {
    return di.get(types.database)
}


function init (){
    di.bindLazySingleton(types.database, () => database); //agregar la bd al servicelocator
    di.bindFactory(types.users, () => new UsersUtils(
        getDatabase()
    ))
}
