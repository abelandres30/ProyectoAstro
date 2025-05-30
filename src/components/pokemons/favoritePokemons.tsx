import { For, createSignal } from "solid-js";
import { FavoritePokemonCard } from "./favoritePokemonCard";

interface favoritePokemons {
    name: string;
    id: string;
}

const getLocalStoragePokemons = (): favoritePokemons[] => {
    const favoritePokemons = JSON.parse(localStorage.getItem('favoritePokemons') || '[]');
    return favoritePokemons;
}

export const FavoritePokemons = () => {
    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons())
    
    return (
        <div class="grid grid-cols-2 sm:grid-cols-4 ">
            <For each={pokemons()}>
                {(pokemon) => (
                    <FavoritePokemonCard name={pokemon.name} id={pokemon.id}/>
                )}
            </For>
        </div>
    )
}