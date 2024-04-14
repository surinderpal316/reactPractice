import { UserContext } from "../context/UserContext";
import { useContext } from "react";

 export default function Dashboard ( )  {
    const{user} = useContext(UserContext)

    return (
        <>
        <h1>
            Dashboard
        </h1>
        <p>
            {!!user &&  (<h2>Hi{user.name}</h2>)}
        </p>
        </>
    )

 }