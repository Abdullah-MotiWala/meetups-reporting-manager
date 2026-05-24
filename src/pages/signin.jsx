import { useRef } from "react"
import { CREDENTIALS } from "../constants/dummyData"
import { useNavigate } from "react-router-dom"

export default function Signin() { //default export
    const emailRef = useRef()
    const pwdRef = useRef()
    const navigate = useNavigate()

    function siginClickHandler() {
        const password = pwdRef.current.value
        const email = emailRef.current.value

        if ((email !== CREDENTIALS.email) || (password !== CREDENTIALS.password)) {
            alert("Credential not found")
            return;
        }
        alert("Login Successfully")
        navigate("/dashboard")
    }

    return <div>
        <input name="email" ref={emailRef} placeholder="email" />
        <input type="password" ref={pwdRef} placeholder="password" />
        <button onClick={siginClickHandler}>Sign in </button>
    </div>
}
// export { Signin } //named export
