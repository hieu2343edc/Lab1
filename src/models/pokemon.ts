class Pokemon {
    abilities: any[];
    height: number;
    id: number;
    name: string;
    type: any[];
    weight: number;
    image: string;

    constructor(
        abilities: any[],
        height: number,
        id: number,
        name: string,
        type: any[],
        weight: number,
        image: string
    ){
        this.abilities = abilities;
        this.height = height;
        this.id = id;
        this.name = name;
        this.type = type;
        this.weight = weight;
        this.image = image;
    }
}
export default Pokemon;