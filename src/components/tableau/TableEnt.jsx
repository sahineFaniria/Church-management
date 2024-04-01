import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Chip,  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input,} from "@nextui-org/react";



const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
    },
  ];
  
  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "role",
      label: "ROLE",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];
  

const TableEnt = () => {

    const [selectedKeys, setSelectedKeys] = React.useState(new Set([""]));

    return(
        <>
            <div className=" mt-8">
                    <div className="flex justify-between mb-2 ">
                        <h1 className="font-bold text-xl">Solde entrant</h1>
                        <Chip size="sm" color="success" variant="flat">Voir+</Chip>
                    </div>
                    <div>
                        <Table 
                            aria-label="Controlled table example with dynamic content"
                            selectionMode="multiple"
                            selectedKeys={selectedKeys}
                            onSelectionChange={setSelectedKeys}
                            color="warning"
                            isStriped 
                            >
                            <TableHeader columns={columns}>
                                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                            </TableHeader>
                            <TableBody items={rows}>
                                {(item) => (
                                <TableRow key={item.key}>
                                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                </TableRow>
                                )}
                        </TableBody>
                    </Table>
                    </div>
            </div>

        </>
    )
}


export default TableEnt;