import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChurch, faUser, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";



const Header = () => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

 
    return( 
        <header className="top-0 fixed w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow ">
            <div className=" container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="flex gap-2">
                    <FontAwesomeIcon className=" mt-[4px]" icon={faChurch}></FontAwesomeIcon>
                    <p className="font-bold text-lg text-black">ChurchSocial</p>
                </div>
                <div>
                    <ul className="flex flex-wrap gap-0 md:gap-9 text-neutral-800 ">
                        <li className=" hidden md:block cursor-pointer" ><Button className=" bg-transparent  hover:text-neutral-950  hover:font-bold font-bold transition-all" >Accueil</Button></li>
                        <li className=" hidden md:block cursor-pointer" ><Button className=" bg-transparent  hover:text-neutral-950  hover:font-bold  transition-all" >Sécurité</Button></li>
                        <li className=" hidden md:block cursor-pointer" ><Button className=" bg-transparent  hover:text-neutral-950  hover:font-bold transition-all" >A propos</Button></li>
                        <li className=" block md:hidden cursor-pointer" ><Button className=" bg-transparent  hover:text-neutral-950  hover:font-bold transition-all" >
                            <Dropdown backdrop="blur">
                                <DropdownTrigger>
                                    <FontAwesomeIcon className=" hover:rotate-90 transition ease-in-out delay-150 duration-300" icon={faBarsStaggered}></FontAwesomeIcon>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Example with disabled actions" >
                                    <DropdownItem key="new">Security</DropdownItem>
                                    <DropdownItem key="copy">About</DropdownItem>
                                    <DropdownItem key="edit" className="text-danger" color="danger">Help</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Button></li>
                        
                        <li  className=" cursor-pointer hover:text-neutral-950 hover:font-semibold transition-all">
                            <Button radius="full" className="bg-gradient-to-tr from-blue-500 to-green-500 text-white shadow-lg" onPress={onOpen}>
                                S'inscrire
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
                            <ModalHeader className="flex flex-col gap-1">S'inscrire</ModalHeader>
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
                             <Input
                                endContent={
                                <svg className=" w-4 h-4 mb-2" xmlns="http://www.w3.org/2000/svg" id="pass" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                                }
                                label="Password"
                                placeholder="Confirm your password"
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
                                Fermer
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                S'inscrire
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