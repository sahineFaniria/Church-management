import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalContent,Switch, cn, Button, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import { UserContext } from './MyContext';
// const AuthContext = React.createContext(null);




const Landing = ({change}) => {

  const {isOpen, onOpen,  onOpenChange} = useDisclosure();
  const {onLogin} = useContext(UserContext);

    return(
        <div className=' w-full relative top-48  px-2 py-3  rounded-3xl  '>
            <div className=' container mx-auto px-4'>
                <h1 className=' text-black text-4xl font-bold'>Keeping your <br /> church connected.</h1>
                <p className=' mt-4 text-neutral-700'>Church social gives congregations a safe <br /> place  online to communicate, share <br /> information, and manage  membership.</p>
                
                <Button className=' mt-10' color="danger"  onPress={onOpen}>
                   Se connecter
                </Button>
              
                <div className='hidden md:block'>
                    <Switch 
                        className='absolute right-4 top-[40%] anime'
                        onClick={change}
                        classNames={{
                            base: cn(
                            "inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center",
                            "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                            // "data-[selected=true]:border-primary",
                            ),
                            wrapper: "p-0 h-4 overflow-visible",
                            thumb: cn("w-6 h-6 border-2 shadow-lg",
                            "group-data-[hover=true]:border-primary",
                            //selected
                            "group-data-[selected=true]:ml-6",
                            // pressed
                            "group-data-[pressed=true]:w-7",
                            "group-data-[selected]:group-data-[pressed]:ml-4",
                            ), 
                        }}
                    >
                    <div className="flex flex-col gap-1 ">
                        <p className="text-medium">God bless us</p>
                        <p className="text-tiny text-default-400">
                        Fa ny fahasoavan'Andriamanitra no nahatoy izao ahy
                        </p>
                    </div>
                    </Switch>
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
              <ModalHeader className="flex flex-col gap-1">Se connecter</ModalHeader>
              <ModalBody>
               
                <Input
                  autoFocus
                  endContent={
                    <FontAwesomeIcon className=" mb-2" icon={faEnvelope}/>
                    
                  }
                  label="Email"
                  placeholder="Enter your email"
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
                  <Link color="primary" href="#" size="sm">
                    Mot de passe oublier?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Fermer
                </Button>
                <Button color="primary" onClick={onLogin} onPress={onClose}>
                  Se connecter
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  

        </div>
    )
}


export default Landing;