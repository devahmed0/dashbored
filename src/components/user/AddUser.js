import React  from 'react';


const AddUser = () => {

    
   
    return (
<>
        <div className="wrapper">
            <div className="title">     
                Add New User       
        </div>
            <div className="form">
                <div className="inputfield">
                    <label>First Name</label>
                    <input type="text" className="input" name="name" required />
                </div>
                <div className="inputfield">
                    <label>Email Address</label>
                    <input type="email" className="input"  name="email" required />
                </div>
                <div className="inputfield">
                    <label>Password</label>
                    <input type="password" className="input"   required/>
                </div>

                <div className="inputfield">
                    <label>Gender</label>
                    <div className="custom_select">
                        <select name="" required>
                            <option value={1}>Select</option>
                            <option value={2}>Male</option>
                            <option value={3}>Female</option>
                        </select>
                    </div>
                </div>


                <div className="inputfield">
                    <label> Image</label>
                    <input type="file" className="input" required/>
                </div>
                <div className="inputfield">
                    <input type="submit" value="Add User" className="btn"  />
                </div>
            </div>
        </div>
      
        </>
    )
}

export default AddUser
