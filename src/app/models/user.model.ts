import { Url } from "url"
import { Role } from "."

export default interface User {
    id: string
    photo: Url
    api_key: string
    name: string
    role: Role
    email: string
    counter: number
    createdAt: Date
    updatedAt: Date
}