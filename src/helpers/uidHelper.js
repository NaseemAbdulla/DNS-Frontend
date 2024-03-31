import { customAlphabet } from 'nanoid';

export function createNanoId(length = 8) {

    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_'
    const nanoid = customAlphabet(alphabet, length)

    return nanoid()
}