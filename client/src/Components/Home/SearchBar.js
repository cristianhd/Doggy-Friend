import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogs, getSearch } from '../../actions';
import { Container } from './SrchBarStyled';
import lupa from '../../assets/Lupa.svg'


function SearchBar() {
    const [breed,setBreed] = useState("")
    const dispatch = useDispatch();
    

function UpperCase(str) {
    
  return str.charAt(0).toUpperCase() + str.slice(1);
}



    function handlerOnClick(e){
        const str = breed.split(" ").map(item=>UpperCase(item)); // no generar error en la bs por capitalizacion
        const strUpper= str.join(" ")
        console.log(strUpper);
        dispatch(getSearch(strUpper))
    }
    
    function handlerOnChange(e){
        setBreed(e.target.value);
        
       if(e.target.value===""){
           dispatch(getDogs())
           
       }

    }

    return (
        <Container>
        
        <input
            id ='search'
            name= 'search'
            type = 'search'
            placeholder = 'Search by breed'
            autoComplete='off'
            onChange={(e)=>handlerOnChange(e)}
            value={breed}
        />
        
        <input
            id='button'
            type = "image"
            src={lupa}
            alt="lupa"
            onClick={(e)=>handlerOnClick(e)}
        >

        </input>
    

        </Container>

    );
}

export default SearchBar;