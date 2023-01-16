export default function Register () {
    return (
        <div>
            <h1>Its is Register page</h1>
            <form>
                <label for="email">Email:</label>
                <input type="email" type="email"/>
                <br></br>
                <label for="firstname">Firstname:</label>
                <input type="firstname" type="text"/>
                <br></br>
                <label for="lastname">Lastname:</label>
                <input type="lastname" type="text"/>
                <br></br>



                <label for="password">Password:</label>
                <input type="password" name="password"></input>
                <br></br>
                <label for="password">Confirm Password:</label>
                <input type="password" name="password"></input>
                <button>
                    Register
                </button>
            </form>
        </div>
    )
}