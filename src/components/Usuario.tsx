import { useState } from "react";

interface User {
    uid: String;
    name: String;
}

const tempUser: User = {
    uid: "xyz789",
    name: "Juan",
}

export const Usuario = () => {
    const [user, setUser] = useState<User>(tempUser);

    const login = () => {
        setUser({
            uid: "ABC123",
            name: "John Smith", 
        })
    }

    return (
    <div className="mt-5">
        <h3>User: useState</h3>

        <button
        onClick={login}  
        className="btn btn-outline-primary">
        Login
        </button>
        {
            (!user)//condicion ternaria
            ?   <pre> No existe el ususario</pre>
            :   <pre>{JSON.stringify( user )} </pre>
        }
        
        

    </div>
    )
};
