export interface Equals<T> {
    equals(that: T): boolean
    canEquals(that: T): boolean
}
