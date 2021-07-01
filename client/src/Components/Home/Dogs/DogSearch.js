import React from 'react';
import { Container, Wrapper } from './DogStyled';
import buttonMas from '../../../assets/ButtonMas.svg'
import { NavLink } from 'react-router-dom';


function DogSearch({id,breed,idimg,temperaments}) {

    
    const imgUrl = 'https://cdn2.thedogapi.com/images/'

    return (
        <Container id="div">

            <div id="img">
                <img
                    src = {`${imgUrl}${idimg.reference_image_id}.jpg`} 
                    alt={breed}
                />
            </div>

            <Wrapper id="hover">
                <h3>{breed}</h3>

                <div>
                    <div id="description">
                        <h4>Temperaments:</h4>
                        <h5>{temperaments}</h5>
                    </div>

                    <NavLink to={`home/details/${id}`}>
                        <input 
                            type="image"
                            src= {buttonMas}
                            alt="back"
                        ></input>
                    </NavLink>
                </div>

            </Wrapper>
        </Container>
    );
}

export default DogSearch;