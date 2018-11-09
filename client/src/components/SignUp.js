import React from 'react';

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSignUp(e) {
        const user = this.state;
        e.preventDefault();


        if(!window.indexedDB) {
            console.log("Not supported");
        }

        let request = window.indexedDB.open("LoginPage", 1),
            db,
            tx,
            store,
            index;

        request.onupgradeneeded = function(e) {
            let db = request.result,
            store = db.createObjectStore('UserDataStore', { keyPath: 'id', autoIncrement: true});
            index = store.createIndex("firstName", "firstName", { unique: false });
        }

        request.onerror = function(e) {
            console.log("There was an error: "+ e.target.errorCode);
        }

        request.onsuccess = function(e) {
            db = request.result;
            tx = db.transaction("UserDataStore", "readwrite");
            store = tx.objectStore("UserDataStore");
            index = store.index("firstName");
        
            db.onerror = function(e) {
                console.log("Error: "+e.target.errorCode);
            }

            store.put(user);

            let q1 = store.getAll();

            q1.onsuccess = function(e) {
                console.log(q1.result);
            }

            tx.oncomplete = function() {
                db.close()        
            }
        }

        // this.props.history.push('/');
        // window.location.reload();

//enable lines 72 to 98 to delete data from db
//     var request = window.indexedDB.open("LoginPage", 1),
//     db;

// request.onsuccess = function(e) {
//   db = request.result;
//   clearData();
// };

// function clearData() {
//   var tx = db.transaction(["UserDataStore"], "readwrite");

//   tx.oncomplete = function(e) {
//       console.log("deleted")
//   };

//   tx.onerror = function(e) {
//     console.log("Error: "+e.target.errorCode);
//   };
//   var store = tx.objectStore("UserDataStore");

//   // Make a request to clear all the data out of the object store
//   var objectStoreRequest = store.clear();

//   objectStoreRequest.onsuccess = function(e) {
//       console.log("created");
//   };
// };
    }

    handleCancel (e) {
        e.preventDefault();
        this.setState({
            email: "",
            password: "",
            confirmPassword: "",
            firstname: "",
            lastname: ""
        });
        let form = document.getElementById("login-page");
        form.reset();
    }

    render() {
        return (
            <div className="main">
                    <h2>Sign Up</h2>
                    <form id="login-page" onSubmit={this.handleSignUp}>
                        <label><b>First Name</b></label><br />
                        <input className="form-item" type="text" placeholder="Enter Firstname" name="firstName" onChange={this.handleChange} required/>
                        <br />

                        <label><b>Last Name</b></label><br />
                        <input className="form-item" type="text" placeholder="Enter Lastname" name="lastName" onChange={this.handleChange} />
                        <br />

                        <label><b>Email Id</b></label><br />
                        <input className="form-item" type="text" placeholder="Enter Email" name="email" onChange={this.handleChange} required/>
                        <br />

                        <label><b>Password</b></label><br />
                        <input className="form-item" type="password" placeholder="Enter Password" name="password" onChange={this.handleChange} required/>
                        <br />

                        <label><b>Confirm Password</b></label><br />
                        <input className="form-item" type="password" placeholder="Enter Password" name="confirmPassword" onChange={this.handleChange} required/>
                        <br />
                        <p className="err">{this.state.error}</p>
                        <button className="loginButton" type="submit" name="submit">SignUp</button>
                        <button className="cancelbtn" onClick={this.handleCancel}>clear</button>
                    </form>
            </div>
        )
    }
}





export default SignUp;