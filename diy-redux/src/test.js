import {useState} from 'react';
import { useCreateStore, ReduxContext } from './hooks/useHooks'
import  {CompA, CompB,CompC, CompD } from './persent'

function Index () {
    const [ isShow , setShow ] = useState(true)
    const onClick = () => {
        console.log('点击操作执行成功');
        setShow(!isShow)
    }
    console.log('index 渲染')
    return <div>
        <CompA />
        <CompB />
        <CompC />
        {isShow &&  <CompD />}
        <button onClick={onClick} >点击</button>
    </div>
}

export function TestDemo () {
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
                console.log('我生效了')
                return  { mesA:'',mesB:'' }
            }
            else{
                return state
            }
    },
    { mesA:'111',mesB:'111' })
    return <div>
        <ReduxContext.Provider value={store} >
            <Index/>
        </ReduxContext.Provider>
    </div>
}