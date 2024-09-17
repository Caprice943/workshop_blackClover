export interface Mage {
    id: number;
    name: string;
    picture: string;
    life: number;
    damage: number;
    team: [string, string?, string?]; //Taureau Noir, Aube d'Or
    created: Date;
}

export type MageList = Mage[];
