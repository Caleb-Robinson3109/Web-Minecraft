import { TextureLoader } from "three";

import { images } from './images';

const diamondTexture = new TextureLoader(diamondImg);
const dirtTexture = new TextureLoader(dirtImage);
const glassTexture = new TextureLoader(glassImg);
const grassTexture = new TextureLoader(grassImg);
const woodTexture = new TextureLoader(woodImg);

const groundTexture = new TextureLoader(grassImg);

const textures = {
    diamondTexture,
    dirtTexture,
    glassTexture,
    grassTexture,
    woodTexture,
    groundTexture,
}

export default textures;