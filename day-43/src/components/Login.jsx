export default function Login () {
    return (
        <div>
            <h1>Its is Login page</h1>
            <form>
                <label for="email">Email:</label>
                <input type="email" type="email"/>
                <br></br>
                <label for="password">Password:</label>
                <input type="password" name="password"/>
                <br></br>
                <button>
                    Sign in 
                </button>
            </form>
        </div>
    )
}