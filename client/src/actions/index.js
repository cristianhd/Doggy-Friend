import axios from 'axios'

const 
    GET_DOGS = 'GET_DOGS',
    GET_TEMPERAMENTS ='GET_TEMPERAMENTS',
    GET_SEARCH='GET_SEARCH',
    GET_DETAILS='GET_DETAILS'

export function getDogs(){
    return (dispatch)=>{
        axios.get('http://localhost:3001/dogs')
            .then((res)=>{
                dispatch({type: GET_DOGS, payload: res.data})
        });
    }
}

export function getTemperaments(){
    return (dispatch)=>{
        axios.get('http://localhost:3001/temperaments')
            .then((res)=>{
                dispatch({type: GET_TEMPERAMENTS, payload: res.data})
        });
    }
}

export function getSearch(breed){
    return (dispatch)=>{
        axios.get(`http://localhost:3001/dogs?name=${breed}`)
            .then((res)=>{
                dispatch({type: GET_SEARCH, payload: {
                                                        search: breed ,
                                                        data : res.data
                                                        }
                                                    });
        });
    }
}

export function getDetails(id,temperament){
    return (dispatch)=>{
        axios.get(`http://localhost:3001/dogs/${id}`)
            .then((res)=>{
                dispatch({type: GET_DETAILS, payload: {
                                                        ...res.data,
                                                        temperament
                                                        }
                                                    });
        });

    }
}

export function createBreed(body){
    return (dispatch)=>{
        axios.post('http://localhost:3001/dog', body)
        .then((r)=>{
            console.log(r)
            dispatch({type: 'CREATE_DOG' , payload: body})
        })
    }
}