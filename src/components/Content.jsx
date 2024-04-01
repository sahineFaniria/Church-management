import React, { useState } from "react";
import Tab from "./Tab";
import Profile from "./Profile";



const Content = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true)
    }

    console.log(show)

    return(
        <div className=" absolute left-12 lg:left-60 bg-yellow-100  w-[90%] lg:w-4/5 mt-5 ml-4 h-[92%] rounded-xl shadow-2xl flex flex-wrap flex-row overflow-hidden">
            <Tab show={handleShow}/>
            <Profile share={show}/>
        </div>
    )
}



export default Content;