import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments } from '../../../actions/index.js';
import {FormS, FormWrapper, Wrapper, Container, Label, Input, Input2, Input3, GridContainer, GridWrapper, Submit, Area, ImgWrapper, HeaderForm} from './FormStyled.js'
import buttonAdd from '../../../assets/ButtonAdd.svg'
import huella from '../../../assets/huella.svg'
import Select from '../Select/Select.js';
import Lists from '../Select/Lists.js';
import {v4} from 'uuid';
import { createBreed } from '../../../actions/index.js'
 
function Form() {
    const state = useSelector(state=>state);
    const dispatch = useDispatch()
    const [filters,setFilters] = useState([])
    const [form, setForm] = useState({
        name: '',
        lmin:'',
        lmax:'',
        wmin:'',
        wmax:'',
        hmin:'',
        hmax:'',
        addT:'',
        temperaments : []
      });
    const listFilters = filters.map((filter,index)=>(
        <ul key={index}>{filter.name}
        (<span onClick={()=>{handlerOnClick(filter.id,filter.name)}}>x</span>)
        </ul>
    ));

    useEffect(()=>{
        dispatch(getTemperaments());
    },[dispatch])

    function handlerOnClick(id,name){
        setFilters(item=>item.filter(f => f.id !== id))
        var aux = filters.filter(f => f.id !== id)
        var aux2 = aux.map(item=>item.name)
        if(!id.includes('-')){
            dispatch({type:'REMOVE_FILTER', payload: {aux2,remove: {id,name}}})
        }
    }

function UpperCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function handlerOnClickTemp(e){
    e.preventDefault()
    const name = UpperCase(form.addT)

    if(name!==""){
        setFilters([...filters,{id: v4(), name}])
    }
    setForm({
        ...form,
        addT:""
    })
}


function handleOnChange(e) {
    const name = e.target.name
    const value = e.target.value
        setForm({
            ...form,
            [name]: UpperCase(value), 
        });
  }

  function handleOnSubmit(e){
    e.preventDefault()
    dispatch(createBreed(
        {...form,
        temperaments:filters.map((item)=>item.name)}
    ));
    setFilters([])
    setForm({
        name: '',
        lmin:'',
        lmax:'',
        wmin:'',
        wmax:'',
        hmin:'',
        hmax:'',
        addT:'',
        temperaments : []
    });
    alert("Created Breed")
}

    return (
        <Container>
            <Wrapper>
                <FormWrapper>
                    <HeaderForm>
                        <div id="h3">
                            <h3>Create own your Breed</h3>
                            <div id="h5">
                                <h5>Doggy Friend let's you create your own breed. ENJOY!!!</h5>
                                <p>*Required Field</p>
                            </div>
                        </div>
                        <img src={huella} alt="huella"/>
                    </HeaderForm>

                    <FormS onSubmit={(e)=>handleOnSubmit(e)}>
                        <div id="Body">
                            <Label>Name Breed*</Label>
                            <Input
                                name="name"
                                value={form.name}
                                type="text"
                                placeholder="Breed"
                                autoComplete = "off"
                                required
                                onChange={(e)=>{handleOnChange(e)}}
                            />
                        </div>

                        <div id="Body">
                            <Label>Life Span</Label>
                                <div>
                                    <Input2
                                        name="lmin"
                                        value={form.lmin}
                                        type="text"
                                        placeholder="Min"
                                        autoComplete = "off"
                                        onChange={(e)=>{handleOnChange(e)}}
                                    />
                                    <Input2
                                        name="lmax"
                                        value={form.lmax}
                                        type="text"
                                        placeholder="Max"
                                        autoComplete = "off"
                                        onChange={(e)=>{handleOnChange(e)}}
                                    />
                                </div>
                        </div>

                        <div id="Body">
                            <Label>Weight*</Label>
                            <div>
                                <Input2
                                    name="wmin"
                                    value={form.wmin}
                                    type="text"
                                    placeholder="Min"
                                    autoComplete = "off"
                                    required
                                    onChange={(e)=>{handleOnChange(e)}}
                                />
                                <Input2
                                    name="wmax"
                                    value={form.wmax}
                                    type="text"
                                    placeholder="Max"
                                    autoComplete = "off"
                                    required
                                    onChange={(e)=>{handleOnChange(e)}}
                                />
                            </div>
                        </div>

                        <div id="Body">
                            <Label>Height*</Label>
                            <div>
                                <Input2
                                    name="hmin"
                                    value={form.hmin}
                                    type="text"
                                    placeholder="Min"
                                    autoComplete = "off"
                                    required
                                    onChange={(e)=>{handleOnChange(e)}}
                                />
                                <Input2
                                    name="hmax"
                                    value={form.hmax}
                                    type="text"
                                    placeholder="Min"
                                    autoComplete = "off"
                                    required
                                    onChange={(e)=>{handleOnChange(e)}}
                                />
                            </div>
                        </div>

                        <GridContainer>
                            <div>
                                <Label>Temperaments</Label>
                                <div id="Input">
                                <Input3
                                    name="addT"
                                    value={form.addT}
                                    type="text"
                                    placeholder="Add a Temperament:  Ex: Smiling"
                                    autoComplete = "off"
                                    onChange={(e)=>{handleOnChange(e)}}
                                />

                                <ImgWrapper>
                                    <input 
                                        type="image" 
                                        src={buttonAdd} 
                                        alt="buttonAdd"
                                        onClick={(e)=>handlerOnClickTemp(e)}
                                    />
                                </ImgWrapper>
                            </div>
                                <Area>
                                    <Lists
                                        filters ={filters}
                                        listFilters={listFilters}
                                        form ={true}
                                    />
                                </Area>
                            </div>
                                <GridWrapper>

                                <div id="Box">
                                    <Select 
                                        temperaments={state.temperaments}
                                        filters={filters}
                                        setFilters={setFilters}
                                    />
                                </div>
                            </GridWrapper>
                                    <Submit 
                                        type="submit"
                                        value="Create Breed"
                                    />
                        </GridContainer>
                    </FormS>
                </FormWrapper>
            </Wrapper>
        </Container>
    );
}

export default Form;