import { useState } from "react";
import { ModalProps } from "../types";

export default function Modal({setOpenModal}: ModalProps) {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        gender: '',
    });


    return (

        <div>
            <button onClick={() => setOpenModal(false)}>X</button>
            <h2> Crear Usuario</h2>
            <form action="">
                <label htmlFor="">Nombre</label>
                <input type="text" name="" id="" />

                <label htmlFor="">Email</label>
                <input type="text" name="" id="" />

                <label htmlFor="">Género</label>
                <select name="" id="">
                    <option value="">male</option>
                    <option value="">female</option>
                </select>
            </form>
            <button onClick={() => setOpenModal(false)}>Cancelar</button>
            <button type="submit" >Guardar</button>
        </div>
    )
}