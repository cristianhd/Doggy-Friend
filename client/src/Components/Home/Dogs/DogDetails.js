import React from 'react';
import { Container, Wrapper } from './DogStyled';
import back from '../../../assets/Back.svg'
import { NavLink } from 'react-router-dom';

function DogDetails({dog}) {
    const imgUrl = 'https://cdn2.thedogapi.com/images/'

    return (
        <Container id="div">
            <div id="img">
                    <img
                    src = {`${imgUrl}${dog.reference_image_id}.jpg`} 
                    alt={dog.name}
                    />
            </div>
            
            <Wrapper id="hover">
                    <h3>{dog.name}</h3>
                <div>
                    <div id="description">
                        <h4>Temperaments:</h4>
                        <h5>{dog.temperament}</h5>
                        <h4>Life Span</h4>
                        <h5>{dog.life_span}</h5>
                        <h4>Weight</h4>
                        <h5>{dog.weight.metric} gr</h5>
                        <h4>Height</h4>
                        <h5>{dog.height.metric} cm</h5>
                    </div>

                    <NavLink to="/home">
                        <input 
                            type="image"
                            src= {back}
                            alt="back"
                        ></input>
                    </NavLink>
                </div>
            </Wrapper>
        </Container>
    );
}

export default DogDetails;