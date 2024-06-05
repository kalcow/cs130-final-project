/// <reference types="svelte" />
/// <reference types="vite/client" />

interface GameState {
    id: string;
    tiles: tile[][];
    winner: "Server" | "Client" | "None"
    difficulty: "easy" | "medium" | "hard"
}

type tile = "x" | "o" | "_";