import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons';

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";



const Header = () => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

 
    return( 
        <header className="top-0 fixed w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow ">
            <div className=" container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="">
                    <p className="font-bold text-lg text-black">ChurchSocial</p>
                </div>
                <div>
                    <ul className="flex flex-wrap gap-9 text-neutral-700 font-semibold">
                        <li className=" cursor-pointer hover:text-neutral-950  hover:font-semibold transition-all" ><Button className=" bg-transparent cursor-pointer hover:text-neutral-950  hover:font-bold transition-all " ><Link className="text-black" to="/dashboard">Security</Link></Button></li>
                        <li className=" cursor-pointer hover:text-neutral-950  hover:font-semibold transition-all" ><Button className=" bg-transparent cursor-pointer hover:text-neutral-950  hover:font-bold transition-all" >About</Button></li>
                        <li className=" cursor-pointer hover:text-neutral-950  hover:font-semibold transition-all" ><Button className=" bg-transparent cursor-pointer hover:text-neutral-950  hover:font-bold transition-all" onPress={onOpen} >Login</Button></li>
                        
                        <li  className=" cursor-pointer hover:text-neutral-950 hover:font-semibold transition-all">
                            <Button radius="full" className="bg-gradient-to-tr from-blue-500 to-green-500 text-white shadow-lg" onPress={onOpen}>
                                Sign up
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
            <>
                <Modal 
                    isOpen={isOpen} 
                    onOpenChange={onOpenChange}
                    placement="top-center"
                >
                    <ModalContent>
                        {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Administrateur</ModalHeader>
                            <ModalBody>
                            <Input
                                autoFocus
                                endContent={
                                    <FontAwesomeIcon className=" mb-2" icon={faUser}/>
                                    
                                }
                                label="User"
                                placeholder="Admin"
                                variant="bordered"
                            />
                            <Input
                                endContent={
                                <svg className=" w-4 h-4 mb-2" xmlns="http://www.w3.org/2000/svg" id="pass" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                                }
                                label="Password"
                                placeholder="Enter your password"
                                type="password"
                                variant="bordered"
                            />
                            <div className="flex py-2 px-1 justify-between">
                                <Checkbox
                                classNames={{
                                    label: "text-small",
                                }}
                                >
                                Remember me
                                </Checkbox>
                                
                            </div>
                            </ModalBody>
                            <ModalFooter>
                            <Button color="danger" variant="flat" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                Sign up
                            </Button>
                            </ModalFooter>
                        </>
                        )}
                    </ModalContent>
                </Modal>
            </>
        
     
        

          
        </header>
    )
}


export default Header;