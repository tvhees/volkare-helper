// Fisher-Yates algorithm adapted for Typescript from
// Cristoph's implementation: https://stackoverflow.com/a/962890

export default function shuffle<T>(array: T[]) {
    let tmp: T, current: number, top = array.length;

    if (top) while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }

    return array;
}