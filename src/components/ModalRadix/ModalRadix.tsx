
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from "@radix-ui/react-icons";
import s from "./ModalRadix.module.css";
import type { ComponentPropsWithoutRef } from "react"
import clsx from "clsx"

type ModalSize = 'lg' | 'sm' | 'md'  | 'xl'

type Props = {
  open: boolean
  onClose: () => void

  modalTitle: string
  size?: ModalSize
} & ComponentPropsWithoutRef<'div'>

export const ModalRadix = (props:Props) => {

  const {onClose,open,modalTitle,className,children,size='md',...rest} = props;

  const classNames = clsx(s.Content,s[size],className);


 return  <Dialog.Root open={open} onOpenChange={onClose} {...rest}>
   <Dialog.Portal>
     <Dialog.Overlay className={s.Overlay} />
     <Dialog.Content className={classNames}>
       <Dialog.Title className={s.Title}>{modalTitle}</Dialog.Title>
       <hr />
       {children}
       <Dialog.Close asChild>
         <button className={s.IconButton} aria-label="Close">
           <Cross2Icon />
         </button>
       </Dialog.Close>
     </Dialog.Content>
   </Dialog.Portal>
 </Dialog.Root>
};


