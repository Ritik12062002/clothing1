import { useState } from "react"

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    ConfirmPassword:""
}

const EmailLSignup = ()=>{
    const [Fields,setFields ] = useState(defaultFormFields);
    const {displayName, email, password, ConfirmPassword} = Fields;
    console.log(Fields);

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFields({...Fields, [name]: value});
    }

    return (
        <div>
        <h1>Sign UP with Email and Password</h1>
        <form onSubmit={()=>{}}>
        <label>DisplayName</label>
        <input type="name" required  onChange={handleChange} name ="displayName" value={displayName}/>
        <label>Email</label>
        <input type="email" required onChange={handleChange} name="email" value={email} />
        <label>Password</label>
        <input type="password" required onChange={handleChange} name="password" value={password}  />
        <label>Confirm Password</label>
        <input type ="password" required onChange={handleChange} name="ConfirmPassword" value={ConfirmPassword} />
        <button>Submit</button>
        </form>
        </div>
    )
}

export default EmailLSignup