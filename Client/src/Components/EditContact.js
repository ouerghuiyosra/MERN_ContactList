import React,{useState} from 'react'
import {Modal,Button,Form} from "react-bootstrap"
import {useDispatch} from 'react-redux'
import { updateContact } from '../Redux/Actions/contactAction'


const EditContact = ({contact:{name,email,phone,_id}}) => {
    //modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //update
    const dispatch = useDispatch()

    const [data, setdata] = useState({name,email,phone})
const handlechange = (e)=>{
    setdata({...data,[e.target.name]:e.target.value})

}
const handleEdit = () =>{
    dispatch(updateContact(_id,data))
    handleClose()
}

    return ( 
        <div>
         <Button variant="outline-info" className="btn1" onClick={handleShow}>
         Edit
       </Button>

      <Modal show={show} >
        <Modal.Header >
          <Modal.Title>Update contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder={name} onChange={(e)=>handlechange(e)}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email"  placeholder={email}   onChange={(e)=>handlechange(e)}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" name="phone" placeholder={phone} onChange={(e)=>handlechange(e)}  />
            </Form.Group>  
                </Form>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default EditContact
