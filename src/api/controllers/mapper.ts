import {User} from '../Interface/user.interface'
import {UserOutput} from '../../db/models/User' 

export const toUser = (user: UserOutput): User => {
    return {
        id: user.id,
        lastname: user.lastname,
        firstname:user.firstname,
        username: user.username,
        eamilId: user.eamilId,
        mobilenumber: user.mobilenumber,
        password: user.password,


        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
    }
}