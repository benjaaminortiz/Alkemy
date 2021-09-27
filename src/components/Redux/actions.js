import axios from 'axios';
import { API_KEY } from '../Home';
import { ALL_HEROES, ADD_HERO, DELETE_HERO } from '../Redux/constants'

const filterHeroes = (res, array) => {
  if(res.data.biography.alignment === 'good' && array.length <= 3){
    array.push(res.data)
  } else if (res.data.biography.alignment === 'bad' && array.length <= 5){
    array.push(res.data)
  }
}

export const allHeroes = () => {
    return async function (dispatch) {
        let data = [];
        for (let i = 1; i < 16; i++)  {
             await axios.get(`https://superheroapi.com/api/${API_KEY}/${i}`)
                    .then(res => filterHeroes(res, data)
                    ).catch(err => console.log(err));
                      
        } console.log(data)
        return dispatch({ type: ALL_HEROES, payload: data })
    }
}


export function addHero(hero){
    return function(dispatch){
      return dispatch({type: ADD_HERO, payload: hero})
    }
  }
  export function deleteHero(hero){
    return function(dispatch){
      return dispatch({type: DELETE_HERO, payload: hero})
    }
  }