import React,{useState} from 'react'
import {Modal,Button,Form} from "react-bootstrap"
import {useDispatch} from 'react-redux'
import { postContact } from '../Redux/Actions/contactAction'

const AddContact = () => {
    //modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //to add
    const dispatch = useDispatch()
    const [newContact, setnewContact] = useState({
        name:'',
        email:'',
        phone:''
    })

const handlechange =(e) =>{
    setnewContact({...newContact,[e.target.name]:e.target.value})
}
const handleAdd =()=>{
    dispatch(postContact(newContact))
    handleClose()
}



    return ( 
        <div>
            <div className="btnModal">
                <Button className="btmodal" onClick={handleShow} >
                Add New Contact
                </Button>
          </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Add New contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" onChange={(e)=>handlechange(e)} nameplaceholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onChange={(e)=>handlechange(e)} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" name="phone" onChange={(e)=>handlechange(e)} placeholder="Enter phone Number" />
            </Form.Group>  
                </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddContact
