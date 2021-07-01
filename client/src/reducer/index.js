

const intialState={
    data: [],
    dataTemp: [],
    dataRender: [],
    dataSearch: undefined,
    temperaments: [],
    addOrder: {
        order: "",
        typeOrder : true // true : ascendant / false: descendant
    },
    page:1,
    details: undefined
}

export function rootReducer(state= intialState, action){
    switch (action.type) {
        case 'GET_DOGS':
            return {
                ...state,
                data: action.payload,
                dataTemp: action.payload,
                dataRender: action.payload,
                dataSearch: undefined
            }
        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                temperaments: action.payload.sort((a,b)=>{
                    const titleA = a.name.toUpperCase()
                    const titleB= b.name.toUpperCase()
                    if(titleA > titleB ){return 1}
                    if(titleA < titleB ){return -1}
                    return 0
                })
            }
        case 'GET_SEARCH':
            return {
                ...state,
                dataTemp: (action.payload.data.length > 0) ? action.payload.data : [],
                dataRender: (action.payload.data.length > 0) ? action.payload.data : [],
                dataSearch: action.payload
            }
        case 'ADD_FILTER':
            return {
                ...state,
                dataTemp: state.dataTemp.filter((breed) => {
                    if(breed.temperament !== undefined) {
                        return breed.temperament.includes(action.payload.name)
                    }
                        return false;
                }),
                dataRender: state.dataTemp.filter((breed) => {
                    if(breed.temperament !== undefined) {
                        return breed.temperament.includes(action.payload.name)
                    }
                        return false;
                }),
                temperaments: state.temperaments.filter((temp) => (
                    temp.id !== action.payload.id
                ))
            }
            case 'REMOVE_FILTER':
            return {
                ...state,
                dataTemp: state.data.filter((breed) => {
                    if(breed.temperament !== undefined) {
                        return breed.temperament.includes(action.payload.aux2)
                    }
                        return false;
                }),
                dataRender: state.data.filter((breed) => {
                    if(breed.temperament !== undefined) {
                        return breed.temperament.includes(action.payload.aux2)
                    }
                        return false;
                    }),
                temperaments: [action.payload.remove , ...state.temperaments]
            }
        case 'ADD_ORDER':
        return {
            ...state,
            addOrder: {order: action.payload.order , typeOrder:!action.payload.typeOrder},
            dataRender: state.dataTemp.sort((a,b)=>{ // a , b elemento comparados                
                const nameA = a.name.toUpperCase()
                const nameB= b.name.toUpperCase()

                

                const [mA,MA] = a.weight.metric.split(" - ") // split "10 - 20" ["10","20"]
                const [mB,MB] = b.weight.metric.split(" - ")

                var minA = parseInt(mA)
                var maxA = parseInt(MA)
                var minB = parseInt(mB)
                var maxB = parseInt(MB)

                if(minA!== "NaN" && maxA!== "NaN") { var promA = (minA + maxA)/2;} else{
                    promA = minA;
                }
                if(minB!== "NaN" && maxB!== "NaN") { var promB = (minA + maxA)/2;} else{
                    promA = minA;
                }
                var promA = (minA + maxA)/2;
                var promB = (minB + maxB)/2;
                
                if(action.payload.order===""){return 0}

                if(action.payload.order==="Breed") {
                    
                        if(!action.payload.typeOrder){ //caso ascendente true
                            if(nameA > nameB ){return 1}
                            if(nameA < nameB ){return -1}
                            return 0
                        }else{ // caso descendente false
                            if(nameA > nameB ){return -1}
                            if(nameA < nameB ){return 1}
                            return 0
                        }
                    }else{


                            if(!action.payload.typeOrder){ //caso ascendente
                                if(promA > promB ){return 1}
                                if(promA < promB ){return -1}
                                return 0
                            }else{ // caso descendente false
                                if(promA > promB ){return -1}
                                if(promA < promB ){return 1}
                                return 0
                            }
                        }
            
                
                  
               
            })
            
        }
            
        case'SEARCH_PAGE':
            return {
                ...state,
                page: action.payload
            }
            
        case'GET_DETAILS':
        return {
            ...state,
            details: action.payload
        }
        case'CREATE_DOG':
        return {
            ...state,
            details: action.payload
        }

        
    
        default:
            return state;
    }
}

export default rootReducer;