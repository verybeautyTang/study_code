import {useState} from 'react';
import { useConnect  } from './hooks/useHooks'
function CompA(){
  const [ value ,setValue ] = useState('')
  const [state ,dispatch ] = useConnect((state)=> ({ mesB : state.mesB }) )
  return <div className="component_box" >
      <p> 组件A</p>
      <p>组件B对我说 ： {state.mesB} </p>
      <input onChange={(e)=>setValue(e.target.value)}
          placeholder="对B组件说"
      />
      <button onClick={()=> dispatch({ type:'setA' ,payload:value })} >确定</button>
  </div>
}

function CompB(){
  const [ value ,setValue ] = useState('')
  const [state ,dispatch ] = useConnect((state)=> ({ mesA : state.mesA }) )
  return <div className="component_box" >
      <p> 组件B</p>
      <p>组件A对我说 ： {state.mesA} </p>
      <input onChange={(e)=>setValue(e.target.value)}
          placeholder="对A组件说"
      />
      <button onClick={()=> dispatch({ type:'setB' ,payload:value })} >确定</button>
  </div>
}

function CompC(){
  const [state  ] = useConnect((state)=> ({ mes1 : state.mesA,mes2 : state.mesB }) )
  return <div className="component_box" >
      <p>组件A ： {state.mes1} </p>
      <p>组件B ： {state.mes2} </p>
  </div>
}

function CompD(){
  const [ ,dispatch  ] = useConnect()
  console.log('D 组件更新')
  const onClick = () => {
    console.log('点击清除按钮');
    dispatch({ type:'clear' });
  }
  return <div className="component_box" >
    <button onClick={onClick} > 清空 </button>
  </div>
}
export {
  CompA,
  CompB,
  CompC,
  CompD,
}