import React from 'react'

const CounterApp = () => {
    const [count, setCount] = React.useState(0);
    function inc(){
        setCount(count+1);
    }
    function dec(){
        setCount(count-1);
    }
  return (
    <div style={{
        border:'5px solid red'
    }}>
        <h1>
            CCounter App
        </h1>
        <br/>
        <button on click={inc} style={{padding:'30px', margin:'20px'}}></button>
        <span> {count} </span>
        <button style={{padding:'10px', margin:'20px'}}></button>
        <button on click={dec} style={{padding:'10px', margin:'20px'}}></button>
    </div>
  )
}

export default CounterApp