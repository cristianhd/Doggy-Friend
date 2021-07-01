import React from 'react';
import { useSelector } from 'react-redux';
import Dog from './Dog';
import DogSearch from './DogSearch';

function Dogs({dogs}) {
    const state = useSelector(state=>state)

    return (

        dogs.map((dog,index)=>(
            <div  key = {index}>
                {state.dataSearch !== undefined ? 
                (
                    <DogSearch
                        id = {dog.id}
                        breed = {dog.name}
                        idimg = {dog}
                        temperaments = {dog.temperament}
                    />
                )
                :
                (
                    <Dog
                        id = {dog.id}
                        breed = {dog.name}
                        idimg = {dog.image ? dog.image.id : dog}
                        temperaments = {dog.temperament}
                    />
                )}
            </div>
        ))
    );
}

export default Dogs;