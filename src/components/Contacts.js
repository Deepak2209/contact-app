import React, { useEffect, useState } from 'react'
import ContactForm from './ContactForm'
import firebaseDb from "../firebase";

const Contacts = () => {

    const [contactObject, setContactObject] = useState({})
    const [currentId, setCurrentId] = useState('')

    useEffect(()=>{
        firebaseDb.child('contacts').on('value', snapshot=>{
           if(snapshot.val()!== null) {
            setContactObject({
                ...snapshot.val()
            })
           }else {
            setContactObject({})
           }
        })
    },[])

    const addOrEdit = (obj) => {
        if(currentId == '') {
            firebaseDb.child('contacts').push(
                obj,
                err => {
                    if(err){
                        console.log(err)
                    }else {
                        setCurrentId('')
                    }
                    
                }
            )
        }else {
            firebaseDb.child(`contacts/${currentId}`).set(
                obj,
                err => {
                    if(err){
                        console.log(err)
                    }
                    else{
                        setCurrentId('')
                    }
                    
                }
            )           
        }
    }

    const onDelete = (key) => {
        if(window.confirm('Are you sure to delete this record ?')) {
            firebaseDb.child(`contacts/${key}`).remove(
                err => {
                    if(err){
                        console.log(err)
                    }
                    else{
                        setCurrentId('')
                    }
                    
                }
            )             
        }
    } 

    return (
        <>
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">Contact Register</h1>
            </div>
            </div> 

            <div className="row">
                <div className="col-md-5">
                    <ContactForm {...({addOrEdit, currentId, contactObject})} />
                </div>

                <div className="col-md-7">
                    <table className="table table-borderless table-striped">
                        <thead className="thead-light">
                            <tr>
                                <td>Name</td>
                                <td>Mobile</td>
                                <td>Email</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObject).map((id, index)=>{
                                    return (
                                      <tr key={index}>
                                          <td>{contactObject[id].fullname}</td>
                                          <td>{contactObject[id].mobile}</td>
                                          <td>{contactObject[id].email}</td>
                                          <td>
                                              <a className="btn text-primary" onClick={()=>{setCurrentId(id)}}><i className="fas fa-pencil-alt"></i></a>
                                              <a className="btn text-danger" onClick={() => { onDelete(id)}}><i className="fas fa-trash-alt"></i></a>
                                        </td>
                                      </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>  
        </>
    )
}

export default Contacts
