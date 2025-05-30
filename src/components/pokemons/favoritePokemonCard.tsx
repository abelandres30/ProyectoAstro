import { createSignal, Show, type Component } from "solid-js";

interface Props {
    name: string;
    id: string;
}

export const FavoritePokemonCard: Component<Props> = (props) => {
    const { name, id } = props;
    const [isVisible, setIsVisible] = createSignal(true);

    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png` 

    const handleDelete = () => {
        const favoritePokemons = JSON.parse(localStorage.getItem('favoritePokemons') || '[]');
        const newFavoritePokemons = favoritePokemons.filter((pokemon: { name: string }) => pokemon.name !== name);
        localStorage.setItem('favoritePokemons', JSON.stringify(newFavoritePokemons));
        setIsVisible(false);
    }

    return (
        <Show when={isVisible()}>
            <div class="flex flex-col justyfi-center items-center">
                <a class="text-white" href={`/pokemons/${name}`}>
                    <img 
                        src={imageSrc} 
                        alt={name} 
                        width={96} 
                        height={96}
                        style={`view-transition-name: ${name}-image`}
                    />
                    <p>#{id} {name}</p>
                </a>

                <button class="cursor-pointer" style={{color:'#FF4500'}}
                    onClick={handleDelete}>
                    Borrar
                </button>
            </div>
        </Show>
    )
}