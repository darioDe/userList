import { ButtonProps } from "../types";


export default function Button ({ openModal, setOpenModal } : ButtonProps) {
    

    const handleClick = () => {
        if (openModal === true) {
            setOpenModal(false);
            console.log(openModal);
            
        } else {
            setOpenModal(true)
            console.log(openModal);
            
        }
    }

    return (
        <button onClick={handleClick}>
            Nuevo Usuario
        </button>
    )
}