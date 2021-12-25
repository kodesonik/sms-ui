export default interface Payement {
    id: string
    amount: number
    provider: string
    method: string
    reference: string
    createdAt: Date
    confirmedAt: Date
    status: string
}