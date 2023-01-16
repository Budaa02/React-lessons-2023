export default function Register () {
    return (
        <div>
            <h1>Its is Register page</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" type="email"/>
                <br></br>
                <label htmlFor="firstname">Firstname:</label>
                <input htmlFor="firstname" type="text"/>
                <br></br>
                <label htmlFor="lastname">Lastname:</label>
                <input type="lastname" type="text"/>
                <br></br>



                <label htmlFor="password">Password:</label>
                <input type="password" name="password"></input>
                <br></br>
                <label htmlFor="password">Confirm Password:</label>
                <input type="password" name="password"></input>
                <button>
                    Register
                </button>
            </form>
        </div>
    )
}