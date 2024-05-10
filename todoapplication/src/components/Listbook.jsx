import React, { useEffect, useState } from 'react'
import { deleteBook, getAllBooks, getBookDetailsById } from '../services/allApi'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Listbook(uploadBookStatus) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [allTodo,setAllTodo] = useState([])
  const [eachTodoValue,setEachTodoValue] = useState({
    bookName: "",
    bookDescription:""
  })
  const getAllTodoItem = async()=>{
    const response = await getAllBooks();
    const {data} = response;
    setAllTodo(data)
    console.log("all items");
    console.log(allTodo);
  }
  const removeTodo = async(id)=>{
    const result = await deleteBook(id)
    alert("successfully delete the task")
    getAllTodoItem();
  }
  useEffect(()=>{
    getAllTodoItem();
  },[uploadBookStatus])
  const getTaskDetails = async(id)=>{
    handleShow();
    const res = await getBookDetailsById(id);
    console.log("===item details by id===");
    console.log(res);
  }
  return (
    <>
    <div className='mt-5'>
      <table className='table'>
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
          {
            allTodo?.length >0?
            allTodo.map((item)=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.bookName}</td>
                    <td>{item.bookDescription}</td>
                    <td>
                      <Button onClick={()=>getTaskDetails(item.id)}>
                        <i class="fa-solid fa-pen-to-square"></i>
                      </Button>
                      <Button className='ms-3' onClick={()=>removeTodo(item.id)}>
                      <i class="fa-solid fa-trash"></i>
                      </Button>
                      
                    </td>
                </tr>
            )):
            <p>No Todo Items</p>
          }
        </tbody>
      </table>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='mt-3'>
        <input type="text" className='form-control mt-3 border border-primary rounded'placeholder='book name' />
        </div>
        
        <div className='mt-3'>
        <textarea name="" id="" cols="30" rows="2" className='form-control mt-3 border border-primary rounded'placeholder='books Description'>

        </textarea>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Listbook