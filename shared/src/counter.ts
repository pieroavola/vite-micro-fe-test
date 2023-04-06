import {atom, useAtom} from "jotai";


const counter = atom(0);

export const useCount: () => [number, (n: number) => void] = () => useAtom(counter);
