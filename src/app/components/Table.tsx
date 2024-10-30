// Table.tsx
import { UserProps, TableProps } from '../types';

export default function Table({ users }: TableProps) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Género</th>
                    <th>Estatus</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.status}</td>
                        <td>Acciones</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

