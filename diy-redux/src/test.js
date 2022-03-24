import {useState} from 'react';
import { ReduxHooksStore  , useCreateStore } from './hooks/useHooks'
import  {CompA, CompB,CompC, CompD } from './persent'

function  Index(){
    const [ isShow , setShow ] = useState(true)
    console.log('index 渲染')
    return <div>
        <CompA />
        <CompB />
        <CompC />
        {isShow &&  <CompD />}
        <button onClick={() => setShow(!isShow)} >点击</button>
    </div>
}

export const Root = () =>{
    const store = useCreateStore(function(state,action){
            const { type , payload } =action
            if(type === 'setA' ){
                return {
                    ...state,
                    mesA:payload
                }
            }else if(type === 'setB'){
                return {
                    ...state,
                    mesB:payload
                }
            }else if(type === 'clear'){ //清空
                return  { mesA:'',mesB:'' }
            }
            else{
                return state
            }
    },
    { mesA:'111',mesB:'111' })
    return <div>
        <ReduxHooksStore.Provider value={store} >
            <Index/>
        </ReduxHooksStore.Provider>
    </div>
}