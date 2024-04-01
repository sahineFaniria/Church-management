import React from "react";
import Navigation from "./Navigation";
import Content from "./Content";


const Dashboard = () => {
    return(
        <div className="absolute top-0 w-full h-full bg-gradient-to-r from-yellow-300 overflow-hidden">
            <Navigation/>
            <Content/>
        </div>
    )
}



export default Dashboard;