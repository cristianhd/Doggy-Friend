import React, { useEffect } from 'react';
import { Wrapper } from './DetailsStyled.js';
import DogDetails from '../Dogs/DogDetails.js'
import { Container } from './DetailsStyled.js';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../../actions/index.js';
import { useParams } from 'react-router';

function Details() {
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    const dog = state.details;
    let {id} = useParams();
    let{temperaments} =useParams();
   

    useEffect(()=>{
        dispatch(getDetails(id,[temperaments]))
    },[])

    return (
        <Container>
            <Wrapper>
               {dog !== undefined ? 
               (
                    <div id="dog">
                        <DogDetails dog ={dog}/>
                    </div>
               ):
               (
                   <>Cargando...</>
               )}
            </Wrapper>
        </Container>
    );
}

export default Details;