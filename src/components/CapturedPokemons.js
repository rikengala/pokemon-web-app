import React,{ useContext} from 'react';
import { PokemonContext } from '../PokemonContext';
import { listPokemons } from './listPokemons.js';

const CapturedPokemons = () =>{
    // const [pokemons] = useState([]);
    const { capturedPokemons, release } = useContext(PokemonContext);
 
    return (
        <div className = "captured-pokemons">
            <h2>Captured Pokemons</h2>
            <table>
            <thead>
                <tr>
                    <th>Pokemon</th>
                    <th>Release</th>
                </tr>
            </thead>
                <tbody>
                {listPokemons({
                    pokemons:capturedPokemons,
                    onClick:release,
                    buttonLabel: '-'
                })}
            </tbody>
            </table>
        </div>
    );

}
export default CapturedPokemons;