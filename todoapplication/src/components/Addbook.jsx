import React, { useState } from 'react'
import { uploadBook } from '../services/allApi';

function Addbook({setUploadBookStatus}) {
  const [todoValue,setToDoValue] = useState({
    bookName: "",
    bookDescription:""
  })
  const handleAddTodo = async()=>{
    const response = await uploadBook(todoValue)
    setUploadBookStatus(response.data)
    setToDoValue({
      bookName:"",
      bookDescription:""
    })
    alert("successfully inserted the task")
    // uploadTodo();
    todoValue.bookDescription="";
    todoValue.bookName="";
  }
  return (
    <>
    <div>
      <h3 className='text-primary mt-5 mb-3'>BOOK STORE APP</h3>
      <div>
      <div className='mt-3'>
        <input value={todoValue.bookName}
        onChange={(e)=>setToDoValue({ ...todoValue,bookName: e.target.value})}
         type="text" className='form-control mt-3 border border-primary rounded'placeholder='Book name' />
        </div>
        
        <div className='mt-3'>
        <textarea name="" id="" cols="30" rows="2"
        value={todoValue.bookDescription}
        onChange={(e)=>setToDoValue({ ...todoValue,bookDescription:e.target.value})}
         className='form-control mt-3 border border-primary rounded'placeholder='Book Description'>

        </textarea>
        </div>
        <button className='btn btn-primary w-100 mt-3' onClick={handleAddTodo}>ADD BOOK</button>
      </div>
    </div>
    </>
  )
}

export default Addbook