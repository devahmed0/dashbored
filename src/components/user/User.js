import React from 'react';
import { Link } from 'react-router-dom'
import img1 from '../../img/1.jpg'
 
const User = () => {

 
  return (
    < >
    
      <div className="table_user">
        <button className="but_user"> <i className="fas fa-plus"></i><Link to={'/admin/users/add'}> Add User</Link></button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Emaile</th>
              <th>Role</th>
              <th>Image</th>
              <th>Function</th>
            </tr>
          </thead>
          {/* {users.updatedAt} */}
         
           


<tbody >
              <tr>
                <td data-column=" Name">ahmed </td>
                <td data-column=" Email">ahmed</td>
                <td data-column="Role">

                </td>
                <td data-column="Image"> <img className="img_user" src={img1} /></td>
                <td data-column="Role" className="td">
                  <span className="fas fa-trash"  />
                  <span  /><Link to={`/admin/users/edit/1`} className="fas fa-edit" > </Link></td>
              </tr>

            </tbody>
       

        </table>
        {/* {users.length === 0 ? <h1 className="no_user">There are no users in the database.</h1> : null} */}

      </div>
    </>
  )
}

export default User
