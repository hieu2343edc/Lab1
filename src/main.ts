
import { getAll } from './api/pokemon'
import Pokemon from './models/pokemon'
import './style.css'

async function fetchPokemonData(){
  const data = await getAll()
  return data.data
}

document.addEventListener("DOMContentLoaded", () =>{
    let generateBtn = document.querySelector('#pokemon');
    generateBtn?.addEventListener('click', async function() {
      const pokemons = await fetchPokemonData()
      console.log(pokemons)
      renderPokemon(pokemons)
    })
})
 
function renderPokemon(pokeData: Pokemon[]){
  const _content =  /*html*/`
    <div class="container mx-auto grid grid-cols-5 gap-3">
      ${pokeData.map(poke => /*html*/`
        <div class="px-8">
          <img src="${poke.image}"/>
          <h3 class="flex">${poke.name}</h3>
          <div class="flex px-8">
            ${poke.type.map(t => /*html*/`
              <div class="${t.type.name} px-8 ">
                ${t.type.name}
              </div>`).join('|')}
          </div>
        </div>
      `).join('')}
    </div>
    `
    if(document.getElementById('app')) {
      document.getElementById('app').innerHTML = _content;
    }
 
}
