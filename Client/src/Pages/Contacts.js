import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { deleteContact, getContact } from "../Redux/Actions/contactAction"
import {Table,Button} from 'react-bootstrap'
import AddContact from '../Components/AddContact'
import EditContact from '../Components/EditContact'
const Contacts = () => {
  const contacts = useSelector(state => state.contactReducer.contacts)
  console.log(contacts)
   const dispatch = useDispatch()  
   useEffect(() => {
 dispatch(getContact())
 
   }, [])
  return (
        <div className="contactTable">
        <AddContact/>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        {contacts.map((contact,key)=>
          
          
        <tbody>
          <tr>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td className="actionBtn">
          <EditContact contact={contact}/>

            <Button variant="outline-danger" className="btn1" onClick={()=>{dispatch(deleteContact(contact._id))}}>
              Delete  
            </Button>
            

          </td>
          </tr>

        </tbody>)}
        
      </Table>
        </div>
    )
}

export default Contacts
