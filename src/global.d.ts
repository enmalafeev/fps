interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}

interface Item {
    x: number;
    y: number;
    type: "health_pack" | "ammo";
    radius: number;
    value: number;
}


interface Сharacter {
    x: number;
    y: number;
    angle: number;
    health: number;
}

interface Enemy extends Сharacter { 
    ai?: number;
    type: 'zombie' | 'flyguy' | 'soldier' | 'commando' | 'tank' | 'slayer';
    attack: number;
    sprite: string;
    radius: number;
}

type LevelMap = number[][];

interface Level {
    map: LevelMap;
    textures: Record<number, string>;
    player: Сharacter;
    music?: string;
    enemies?: Enemy[];
    items?: Item[];
    exit?: {
        x: number;
        y: number;
    };
    world: {
        colors: {
            top: Color;
            bottom: Color;
        }
    }
}

interface TexturePreset {
    id: string;
    url: string;
}

interface SpritePreset {
    id: string;
    url: string;
}

interface SoundPreset {
    id: string;
    url: string;
    volume?: number;
}

interface AnimationSpritePreset {
    id: string;
    frames: string[]
}

interface TextureBitmap {
    width: number;
    height: number;
    colors: Color[][];
}

interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}

type Sprite = Texture