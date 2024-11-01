export interface UserProps {
    id: string,
    name: string,
    email: string,
    gender: string,
    status: string,
};

export interface TableProps {
    users: UserProps[],
};

export interface ButtonProps {
    openModal: boolean;
    setOpenModal: (value: boolean) => void;
};

export interface ModalProps {
    setOpenModal: (value: boolean) => void;
};