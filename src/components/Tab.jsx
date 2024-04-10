import React, { useState } from "react";
import about from "../images/about.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChurch, faLinesLeaning, faBarsStaggered, faUser } from '@fortawesome/free-solid-svg-icons';
import { Card, CardHeader, CardBody, CardFooter, Link, Divider, Image, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import {Outlet} from 'react-router-dom';




const Tab = () => {

    

    return(

        <div className="bg-white rounded-s-xl w-[100%] md:w-[70%] h-full px-6 py-6 overflow-x-hidden  overflow-y-auto scroo ">
                <div>
                     <Dropdown backdrop=" blur" >
                        <DropdownTrigger>
                            <FontAwesomeIcon className=" absolute right-6 block md:hidden hover:cursor-pointer hover:rotate-0 rotate-90 transition ease-in-out delay-150 duration-300" icon={faLinesLeaning}></FontAwesomeIcon>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Example with disabled actions" >
                            <DropdownItem key="edit" className="text-warning" color="warning">Catholique Tanambao <FontAwesomeIcon className=" bg-yellow-200 p-1 rounded-xl" icon={faUser} /> </DropdownItem> 
                            <DropdownItem key="new">Entrée</DropdownItem>
                            <DropdownItem key="copy">Sortie</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
               
                <div>
                    <p className=" text-2xl font-bold">Tabeau de bord</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit laboriosam magni cumque fugit labore.</p>
                </div>
                <div className=" w-full mt-8 flex flex-col gap-4 md:flex-row ">
                    <Card className=" h-48 w-[400px] md:w-auto bg-yellow-400" width={200}>
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">Catholique</p>
                            <small className="text-default-500">12 Tracks</small>
                            <h4 className="font-bold text-large">Gestion de caisse</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <Image
                            alt="Card background "
                            className="object-cover h-24 rounded-xl"
                            src={about}
                            width={270}
                            
                            />
                        </CardBody>
                    </Card>
                    <Card className="w-[400px] h-48">
                        <CardHeader className="flex gap-3">
                            <div    className="bg-black flex justify-center items-center text-xl text-white font-bold w-10 h-10 rounded-lg ">
                                $
                            </div>
                            <div className="flex flex-col">
                                <p className="text-md">Montant</p>
                                <div className="flex flex-wrap gap-1 items-center justify-start">
                                    <p className="text-small text-default-500">Solde actuel : </p>
                                    <span  className="text-red-600 font-bold text-sm  rounded bg-red-300 px-2 py-1"> 2 000 000 ar</span>
                                </div>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <p>Entrant: <span className="font-bold">1 000 000ar</span> </p>
                            <p>Sortant: <span className="font-bold">500 000ar</span> </p>
                        </CardBody>
                        <Divider/>
                        <CardFooter>
                            <Link
                            isExternal
                            showAnchorIcon
                            href=""
                            >
                            Visiter la page qui contient plus de details...
                            </Link>
                        </CardFooter>
                    </Card>
                    
                </div>
                
                <Outlet/>
                
                
               
       
            
            
        </div>
    )
}


export default Tab;

