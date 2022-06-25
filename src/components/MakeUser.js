import { async } from '@firebase/util';
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { db } from './Firebase'
import { Navigate } from "react-router-dom"

function MakeUser() {

    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [setPassword, setNewPassword] = useState("");
    const [setAge, setNewAge] = useState(0);

    const [updateName, setUpdateName] = useState("");

    const [ users, setUsers ] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const createUser=async() => {
        await addDoc(usersCollectionRef, {name: newName, email: newEmail, password: setPassword, age: Number(setAge)});
    }

    const updateUser=async(id, name) => {
        const userDoc = doc(db, "users", id);
        const newFields = {name: updateName};
        await updateDoc(userDoc, newFields);
        alert("Updated: " + name);
    }

    const deleteUser=async(id, name) => {
        const deletedName = name;
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc)
        return(alert("Deleted: " + deletedName));
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getUsers();
    }, [])

    return (
        <div className='makeUserBorder'>
            <div className='createUserBorder'>
                <div className='createUser'>
                <h1>Create user</h1>

                <input placeholder='Name' onChange={(e) => { setNewName(e.target.value);}}></input>
                <input placeholder='Email' onChange={(e) => { setNewEmail(e.target.value); }}></input>
                <input type="password" placeholder='Password' onChange={(e) => { setNewPassword(e.target.value); }}></input>
                <input type="number" placeholder='Age' onChange={(e) => { setNewAge(e.target.value); }}></input>

                <br />
                <button onClick={createUser}>Create user</button>
                </div>
            </div>
            <div className='userTable-Container'>
            {users.map((user) => {
                return(
                    <div className='userTable'>
                        <h3 id='name'>{user.name}</h3>
                        <h3 id='email'>Email: {user.email}</h3>
                        <h3 id="age">Age: {user.age}</h3>
                        <h3 id="password">Password: {user.password}</h3>
                        <input placeholder={user.name} onChange={(e) => { setUpdateName(e.target.value); }}></input>
                        <button id='update' onClick={
                            () => { updateUser(user.id, user.name) && <Navigate to="/MakeUser" /> }
                        }>Update name</button>
                        <button id='delete' onClick={() => { deleteUser(user.id, user.name) && <Navigate to="/MakeUser" /> }}>Delete user</button>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default MakeUser