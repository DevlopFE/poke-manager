

import {useState, useEffect} from 'react'

export const useImage = (url) => {
  const [pokeData, setPokeData] = useState({id:'',name:'', image:'', baseExperience:'', height:'', weight:''})


  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(res => {
        setPokeData(
          {id:res.id,
            name:res.name,
           image: res.sprites.front_default,
           baseExperience:res.base_experience,
           height:res.height, 
           weight:res.weight}
        )
      });
  }, [url])

  return {pokeData}
}  

