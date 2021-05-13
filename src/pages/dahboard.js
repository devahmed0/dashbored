import React, { Component } from "react";
import SilderBar from "../components/SilderBar";
import Header from "../components/Header";
import User from '../components/user/User';
import Main from "../components/main";
import AddUser from '../components/user/AddUser'
import EditUser from '../components/user/EditUser'
// import BlogList from './blog/BlogList'
// import BlogAdd from './blog/BlogAdd'
// import BlogId from './blog/BlogId'
// import PrivateRoute from '../../services/wAuth';
// import BlogEdit from './blog/BlogEdit';
import { Route } from "react-router-dom";

class Dahboard extends Component {
  render() {
    return (
      <>
        <SilderBar />
        <div className="main_content">
          <Header />
          <main>
            <Route path="/admin" exact component={Main} />{" "}
            <Route path="/admin/users"  exact component={User}/>
            <Route path="/admin/users/add" exact  component={AddUser} />
            <Route path="/admin/users/edit/:id" exact  component={EditUser} />

            {/*  />
              
                <PrivateRoute path="/admin/blog" exact  component={BlogList} />
                <PrivateRoute path="/admin/blog/add" exact  component={BlogAdd} />
                <PrivateRoute path="/admin/blog/edit/:id" exact  component={BlogId} />
                <PrivateRoute path="/admin/blog/add/:id" exact  component={BlogEdit} /> */}
          </main>{" "}
        </div>
      </>
    );
  }
}

export default Dahboard;
