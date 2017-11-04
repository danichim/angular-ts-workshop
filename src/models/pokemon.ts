import { Equals } from './equals';
import { Gender, validateGender } from '../constants/Gender';

export class Pokemon implements Equals<Pokemon> {
    public id?: string;
    public name: string;
    public height: string;
    public weight: string;
    public gender: Gender;
    public abilities: string;

    constructor(maybePokemon: Pokemon) {
        this.id = maybePokemon.id
        this.name = maybePokemon.name
        this.height = maybePokemon.height
        this.weight = maybePokemon.weight
        validateGender(maybePokemon.gender)
        this.gender = maybePokemon.gender
        this.abilities = maybePokemon.abilities
    }

    /**
     * canEquals: Pokemon
     */
    public canEquals(that: Pokemon): boolean {
        return this.name === that.name
    }

    /**
     * equal: Pokemon
     */
    public equals(that: Pokemon): boolean {
        return this.canEquals(that)&& this.abilities === that.abilities
    }
}
