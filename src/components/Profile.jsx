import React from "react";
import pdp from "../images/eglise1.png";
import about from "../images/eglise.jpg";


const Profile = ({share}) => {
    return(
        <div className={` md:w-[30%] mt-10 translate-x-[320px] lg:translate-x-0 ${share && 'translate-x-0 z-10'}`}>

            <div className=" flex items-center justify-center flex-col">
                <img className=" w-24 h-24 rounded-full bg-yellow-200" src={pdp} alt="pdp"/>
                <p className=" text-xl font-bold">Eglise Catholique</p>
                <p>Tanambao, Finarantsoa</p>
            </div>

            <div className=" my-10 bg-black">
                <hr className="bg-black" />
            </div>

            <div className=" px-4">

                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold">Mouvement de caisse</h2>
                    <p className=" bg-white w-7 h-7 flex items-center justify-center rounded-3xl">+</p>
                </div>
   
                <div className="">
                    <div className=" mt-4 w-full rounded bg-neutral-50 flex justify-between">
                        <div className="ml-1 flex ">
                            <p className="bg-yellow-200 w-10 h-10 rounded-lg m-1 text-yellow-500 flex items-center justify-center">$</p>
                            <div className="ml-2">
                                <p className="text-md font-bold">Entrant</p>
                                <p className="text-sm">Mouvement d'entrer</p>
                            </div>
                        </div>
                        <p className=" mr-4 font-bold rotate-90">...</p>
                    </div>
                    <div className=" mt-4 w-full rounded bg-neutral-50 flex justify-between">
                        <div className="ml-1 flex ">
                            <p className="bg-red-200 w-10 h-10 rounded-lg m-1 text-red-500 flex items-center justify-center">-$</p>
                            <div className="ml-2">
                                <p className="text-md font-bold">Sortant</p>
                                <p className="text-sm">Mouvement de sortie</p>
                            </div>
                        </div>
                        <p className=" mr-4 font-bold rotate-90">...</p>
                    </div>
                    
                </div>
                <div className=" hidden  lg:flex items-center justify-center pt-6" >
                    <img className="w-full h-36 rounded-xl object-cover" src={about} alt="egli" />
                </div>
            </div>
        </div>
    )
}


export default Profile;