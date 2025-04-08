import { ModalRadix } from "../ModalRadix/ModalRadix.tsx"
import { Button } from "../Button/Button.tsx"

type Props = {
  open: boolean
  onClose: () => void
}

export const DeletePostModal = ({ open, onClose }: Props) => {
  return (
    <ModalRadix open={open} onClose={onClose} modalTitle={'Delete Post'} >
      Are you sure you want to delete this post?
      <div>
        {/*Будем использовать обычные кнопки*/}
        <Button variant={'primary'} onClick={onClose} asChild>
          <a href="#">Yes</a>
        </Button>
         <Button variant={'primary'} onClick={onClose} asChild>
          <a href="#">Yes</a>
        </Button>
        <Button variant={'secondary'} onClick={onClose}>No</Button>
      </div>
    </ModalRadix>
  )
}