import Pokemon from "../models/pokemon";
import instance from "./config";

export const getAll = () => {
    const url = "/pokemons"
    return instance.get(url)
}

export const create = (data: Pokemon) => {
    const url = "/pokemons"
    return instance.post(url, data)
}