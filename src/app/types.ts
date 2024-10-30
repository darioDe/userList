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