import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);
    console.log(user);

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button onClick={ () => setUser({ id: 123, name: 'Santiago', email: 'pelaezas@google.com' }) } className="btn btn-primary">
                    Set User
            </button>
            
        </>
    )
}
