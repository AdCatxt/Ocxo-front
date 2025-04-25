'use client';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@heroui/react";
import { ReactNode } from "react";
import { LuPenTool } from "react-icons/lu";

export default function UpdateLocation({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color='primary'><LuPenTool size='20' /></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="bg-red-600 flex flex-col gap-1">Actualizar Tienda</ModalHeader>
              <ModalBody className='bg-red-600'>
                {children}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
