import React, {useState, useEffect} from 'react'

const ContactForm = (props) => {
    const initialFieldValues = {
        fullname: '',
        mobile: '',
        email: '',
        address: ''
    }
    
    const [values, setValues] = useState(initialFieldValues);

    useEffect( () => {
        if(props.currentId == '') {
            setValues({...initialFieldValues})
        }
        else {
            setValues({...props.contactObject[props.currentId]})
        }
    },[props.currentId, props.contactObject])

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value})
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.addOrEdit(values)
    }
    
    return (
        <form autoComplete="off" onSubmit={handleOnSubmit}>

            <div className=" form-group input-group flex-nowrap">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="addon-wrapping"><i className="fas fa-user"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Full Name" name="fullname" value={values.fullname} onChange={handleInputChange}/>                
            </div>  



            <div className="form-row ">
                <div className="form-group  input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input type="text" className="form-control" placeholder="Mobile" name="mobile" value={values.mobile} onChange={handleInputChange}/>       
                </div>

                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input type="text" className="form-control" placeholder="Email" name="email" value={values.email} onChange={handleInputChange}/>                
                </div>
            </div>

            <div className="form-group input-group">
                <textarea  className="form-control" placeholder="Full Address" name="address" value={values.address} onChange={handleInputChange}/>               
            </div>
            <div className="form-group ">
              <input type="submit" value={props.currentId == "" ? 'Save' : 'Update'} className="btn btn-primary btn-block"/>
            </div> 
        </form>
    )
}

export default ContactForm
