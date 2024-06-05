import { get } from "svelte/store";
import { gameState } from "../stores/GameState";

const requestURL = (path: TemplateStringsArray, id?: string) => {
    if (id) {
        return `http://34.83.209.181:80/game/${path[0]}/${id}`
    }
    return `http://34.83.209.181:80/game/${path}`;
}

export async function start(): Promise<GameState> {
    const _ = await fetch(requestURL`start`);
    const response = await _.json() as GameState;

    gameState.set(response)

    return response;
}

export async function update(r: 0 | 1 | 2, c: 0 | 1 | 2): Promise<GameState> {
    gameState.update((state) => {
        let { tiles } = state;
        tiles[r][c] = "o";
        return state;
    })

    
    const { id, tiles } = get(gameState);
    
    console.log(id)

    const _ = await fetch(`http://34.83.209.181/game/update/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'moveR': tiles[0],
            'moveC': tiles[1], 
        })
    });

    const response = await _.json();

    console.log(response);

    return response as GameState;
}