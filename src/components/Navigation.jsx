import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChurch, faHouse, faRightToBracket, faInbox, faChartSimple,faFilePdf, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import { UserContext } from "./MyContext";
import { Button } from "@nextui-org/react";


const Navigation = () => {

    const {onLogout, token} = useContext(UserContext);

    useEffect(() => {
        const currentNav = localStorage.getItem('activeNav') || 'accieul';
        setActiveNav(currentNav);
    }, []);

    const [activeNav, setActiveNav] = useState('accieul');

    const handleSetActiveNav = (nav) => {
        setActiveNav(nav);
        localStorage.setItem('activeNav', nav);
    };



    return(
        <div className=" fixed top-0 left-0 w-[58px] lg:w-60  h-full  overflow-hidden ">
            <div className=" font-bold text-xl h-9 flex items-center z-10 ml-5  py-8">
                <div className="flex gap-3">
                    <FontAwesomeIcon className=" mt-[2px] " icon={faChurch}/>
                    <p>EGLISE</p>
                </div>
            </div>

            <ul className=" w-full mt-16">
                <li className=" h-12 bg-transparent  ml-1 p-1"><NavLink to="/dashboard/accieul" className={`   w-full h-full flex items-center text-lg font-semibold hover:bg-yellow-200 rounded-lg ${activeNav === 'accieul' && 'text-green-800' }`} onClick={() => handleSetActiveNav('accieul')}><FontAwesomeIcon className=" px-4" icon={faHouse}/> Accueil</NavLink></li>
                <li className=" h-12 bg-transparent  ml-1 p-1"><NavLink to="/dashboard/entrant" className={`   w-full h-full flex items-center text-lg font-semibold hover:bg-yellow-200 rounded-lg ${activeNav === 'entrant' && 'text-green-800' }`} onClick={() => handleSetActiveNav('entrant')}><FontAwesomeIcon className="px-4" icon={faRightToBracket}/> Entrant</NavLink></li>
                <li className=" h-12 bg-transparent  ml-1 p-1"><NavLink to="/dashboard/sortant" className={`   w-full h-full flex items-center text-lg font-semibold hover:bg-yellow-200 rounded-lg ${activeNav === 'sortant' && 'text-green-800' }`} onClick={() => handleSetActiveNav('sortant')}> <FontAwesomeIcon className="px-4" icon={faInbox}/> Sortant</NavLink></li>
                <li className=" h-12 bg-transparent  ml-1 p-1"><NavLink to="/dashboard/histo" className={`   w-full h-full flex items-center text-lg font-semibold hover:bg-yellow-200 rounded-lg ${activeNav === 'histo' && 'text-green-800' }`} onClick={() => handleSetActiveNav('histo')}> <FontAwesomeIcon className="px-4" icon={faChartSimple}/> Histogramme</NavLink></li>
                <li className=" h-12 bg-transparent  ml-1 p-1"><NavLink to="/dashboard/pdf" className={`   w-full h-full flex items-center text-lg font-semibold hover:bg-yellow-200 rounded-lg ${activeNav === 'pdf' && 'text-green-800' }`} onClick={() => handleSetActiveNav('pdf')}> <FontAwesomeIcon className="px-4" icon={faFilePdf}/> Gérer PDF</NavLink></li>
            </ul>

            {token && (
                <div className=" mt-64 w-full ml-5 ">
                <FontAwesomeIcon   icon={faRightFromBracket}   />
                <Button className="mr-2 bg-transparent" onClick={onLogout}>Déconnecter</Button>
                
            </div>
            )}

        </div>
    )
}


export default Navigation;