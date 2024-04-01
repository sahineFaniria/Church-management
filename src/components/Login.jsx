import React, { useState } from "react";
import axios from 'axios';
import {Chip, Input, Button} from "@nextui-org/react";
import { NavLink } from "react-router-dom";



const Login = ({close}) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        // e.preventDefault();
        postData();
        console.log(username, email, password)
    }

    const postData = () => {
        axios.post(`http://localhost:3000/user/`, {
            username,
            email,
            password
        })
    }

    const neutre = (e) => {
        e.stopPropagation();
    }

    return(
        <div onClick={close} className="absolute top-0 w-full h-full  z-20 gradient">
            <div onClick={neutre} className=" pt-20 shadow-md text-black rounded-2xl w-unit-7xl h-unit-8xl bg-white mx-auto text-center top-2/4 absolute left-2/4 -translate-x-2/4 -translate-y-2/4">
                <Chip size="sm" color="primary" onClose={close} variant="flat" className=" absolute right-1 top-2">
                    
                </Chip>
                <h1 className=' text-2xl font-bold text-center'>Créer un compte</h1> 
                
            
            <form className=" px-8 pt-6 pb-8 mb-4" action="post" onSubmit={handleSubmit}>

                <div className="mb-4">
                    <Input size="sm" type="text" label="Nom" value={username} onChange={(e)=>setUsername(e.target.value)} />
                </div>
                <div className="mb-4">
                    <Input size="sm" type="password" label="Password" value={password} onChange={(e)=>(e.target.value)} />
                </div>
                
                <div  className="flex items-center justify-between mt-5">
                <Button color="primary">
                    <NavLink to='/dashboard'>Login</NavLink>
                </Button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
                       Mot de passe oublier?
                    </a>
                </div>


                </form>
           </div>
        </div>
    )
}


export default Login;