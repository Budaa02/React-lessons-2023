import { useState } from 'react';
// onChange={e => setUsers(e.target.value)}
export default function Forms() {

    const [users, setUsers] = useState([])
    function handleRegister(event) {
        event.preventDefault()
        console.log(event.target.firstname.value);
        console.log(users);
        const user = {
            firstname:event.target.firstname.value,
            lastname:event.target.lastname.value,
            password:event.target.password.value
        }
       setUsers([...users, user])
    }


    // console.log(Users);
    // console.log(book);
    return (
        <div>

        
        <form onSubmit={handleRegister}>
            <label >Firstname: </label>
            <input type="text" name="firstname" 
            
            />

            <br />
            <label>
                Lastname:
                <input type="text" name="lastname" />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <br />
            <label>
                Confirm Password:
                <input type="password" name="confirm" />
            </label>
            <button
              
            >
                Register</button>
            {/* <label htmlFor="">
                Register:
                <button onSubmit={() => {
                    setUsers("");
                    setBook([...book, { id: nextId++, name: Users }])
                }}>Send</button>
            </label> */}



        </form>
        <h2> User Preview</h2>
        {users.map(u => {
            return(
                <div>
                    <div>{u.firstname}</div>
                    <div>{u.lastname}</div>
                </div>
            )
        })}
        </div>
    )
}





