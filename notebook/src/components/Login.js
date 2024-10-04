import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login(props) {
    const [credentials, setcredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate()
    const handlesubmit = async (e) => {
        e.preventDefault()
        //Api call
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            //save the auth -token and reidirect 
            localStorage.setItem('token', json.authtoken)
            navigate("/")
            props.showAlert("Account Created Successsfully", "success")

        }
        else {

            props.showAlert("invalid details", "danger")

        }
    }
    const onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        // <div>
        //     <form onSubmit={handlesubmit}>
        //         <div className="mb-3">
        //             <label htmlFor="email" className="form-label">Email address</label>
        //             <input type="email" class="form-control" name="email" id="email" value={credentials.email} onChange={onchange} aria-describedby="emailHelp" />

        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="password" className="form-label">Password</label>
        //             <input type="password" className="form-control" name="password" value={credentials.password} onChange={onchange} id="password" />
        //         </div>

        //         <button type="submit" className="btn btn-primary" >Submit</button>
        //     </form>
        // </div>
        <div class="container">
            <div class="row login-container">

                {/*Left side (Image or graphic)*/}
                <div class="col-md-6 p-0">
                    <div class="login-image">
                        {/* You can place the surfing image here */}
                        <img src="login image.jpg" class="img-fluid" alt="Surfing Image" />
                    </div>
                </div>

                {/*Right side (Login form)*/}
                <div class="col-md-6">
                    <div class="login-form mt-4">

                        <form onSubmit={handlesubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" class="form-control" name="email" id="email" value={credentials.email} onChange={onchange} aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" value={credentials.password} onChange={onchange} id="password" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="rememberMe" />
                                <label class="form-check-label" for="rememberMe">Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-primary " >Login</button>
                        </form>
                        <div class="d-flex justify-content-between mt-3">
                            <a href="#" class="text-decoration-none text-small">Forgot Password?</a>
                            <a href="#" class="text-decoration-none text-small">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

