export default function Login () {
    return (
        <div>
            <h1>Its is Login page</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" type="email"/>
                <br></br>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password"/>
                <br></br>
                <button>
                    Sign in 
                </button>
            </form>
        </div>
    )
}