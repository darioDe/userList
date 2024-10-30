import { useState, useEffect } from 'react';
import { UserProps } from '../types';

export const useUsers = (apiUrl: string) => {
    // State to store users, initialized as an empty array
    const [users, setUsers] = useState<UserProps[]>([]);

    // Function to save users to local storage
    const saveUsersToLS = (users : UserProps[]) => {
        localStorage.setItem('users', JSON.stringify(users));
    };

    // useEffect to fetch user on initial load or when apiUrl changes
    useEffect(() => {
        const storedUsers= localStorage.getItem('users'); // Retrieve users from LS

        if (!storedUsers) {
            // If no stored users, fetch from Api
            fetch(apiUrl)
            .then(response => response.json())
            .then((data: UserProps[]) => {
                setUsers(data)
                
                saveUsersToLS(data)
            })
            .catch(error => console.error('Error fetching users', error));
        } else {
            setUsers(JSON.parse(storedUsers) as UserProps[]);
        }

    }, [apiUrl]);

    // useEffect to save users to LS whenever users changes
    useEffect(() => {
        if (users.length > 0) {
            saveUsersToLS(users)
        };
    }), [users];



    return { users, setUsers }
}