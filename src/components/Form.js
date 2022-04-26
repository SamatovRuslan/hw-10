import React, { useState } from 'react'
import './Form.css'

export default function Form(props) {

  const[first, setFirst] = useState('FIRST')
  const[second, setSecond] = useState()
  const[third, setThird] = useState()


  function firstInputHandler(event) {
      setFirst(event.target.value)
  }
  function secondInputHandler(event) {
    setSecond(event.target.value)
  }

  function thirdInputHandler(event) {
      setThird(event.target.value)
  }


  function sumbitHandler(event){
      event.preventDefault()
      const secondData = {
          secondData: second,
          
      }
      const thirdData ={
          thirdData: third
      }
      props.onAdd(secondData)
      props.onSave(thirdData)
  }
  
  return (
    <form onSubmit={sumbitHandler}>
        <input className='first' type='text' onChange={firstInputHandler}></input>
        <h3>First input: {first}</h3>
        <br/>
        <input className='second' type='text' onChange={secondInputHandler}></input>
        <br/>
        <input className='third' type='text' onChange={thirdInputHandler}></input>
        <br/>
        <button>click</button>
    </form>
   
  )
}
