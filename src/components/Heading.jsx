import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Heading() {
    const { user } = useContext(UserContext);
    const {setTheme}=useContext(ThemeContext)

    return (
        <div className="heading">
            <p>
                Welcome, {user.name}, &nbsp;
                <a href="#" onClick={() => { setUser(null) }}>Log out</a>
            </p>
            <hr/>
            <p>Switch theme</p>
            <select onChange={(event)=>setTheme (event.target.value)}>
                <option value="light-blue">Light blue</option>
                <option value="dark-green" >Dark green</option>
            </select>
            <hr/>
        </div>
    );
}