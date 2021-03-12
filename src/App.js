import React,{useState} from 'react'
import './App.css';

function App() {
  const [value,setValue]=useState()
  const [list,setList]=useState()
  let array =['Betty', 'Judith','Christian','Emma','Gabi','Steve','Tom','Bob','Jane','Maria'];
  let newArray =[]

  const setInputValue=(e,x)=>{
      setValue(x)
  }

  const complete=(e)=>{
    setValue(e.target.value)
    array.forEach(x=>{
      if(x.substr(0, e.target.value.length).toUpperCase()===e.target.value.toUpperCase()){
        newArray.push(x)
        console.log(newArray)
        setList(
          newArray.map((x,id)=>{
            return <p key={id} onClick={e=>setInputValue(e,x)}>{x}</p>
          })
        )
      }
      if(e.target.value.length===0)
      setList('')
    })
  }


  return (
    <div className='container'>
      <input type="text" className='autocomplete' onChange={e=>complete(e)} value={value} />
      <div>
        <p>{list}</p>
      </div>
    </div>
  );
}

export default App;
