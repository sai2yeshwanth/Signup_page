import * as userDal from '../../db/dal/UserDAL'
import {GetAllUserFilters} from '../../db/dal/types'
import {UserInput,UserOutput} from '../../db/models/User'


export const create = (payload: UserInput): Promise<UserOutput> => {
    return userDal.create(payload)
}


export const update = (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
    return userDal.update(id, payload)
}


export const getById = (id: number): Promise<UserOutput> => {
    return userDal.getById(id)
}


export const deleteById = (id: number): Promise<boolean> => {
    return userDal.deleteById(id)
}


export const getAll = (filters: GetAllUserFilters): Promise<UserOutput[]> => {
    return userDal.getAll(filters)
}