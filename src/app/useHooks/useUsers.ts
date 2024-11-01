import { useState, useEffect } from 'react';
import { UserProps } from '../types';

export const useUsers = (apiEndpoint: string) => {
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
            fetch(apiEndpoint)
            .then(response => response.json())
            .then((data: UserProps[]) => {
                setUsers(data)
                
                saveUsersToLS(data)
            })
            .catch(error => console.error('Error fetching users', error));
        } else {
            setUsers(JSON.parse(storedUsers) as UserProps[]);
        }

    }, [apiEndpoint]);

    // useEffect to save users to LS whenever users changes
    useEffect(() => {
        if (users.length > 0) {
            saveUsersToLS(users)
        };
    }), [users];

    const addUsers = async (newUser: UserProps) => {
        const userWithId: UserProps = {
            ...newUser,
            id: '',
            status: '',

        }

        try {
            const response = await fetch(apiEndpoint, {
                method:'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(userWithId),
            });

            if(!response.ok) {
                throw new Error('Error to adding user');
            }

            const addedUser: UserProps = await response.json();
            setUsers((prev) => [...prev, addedUser])
        } catch (error) {
            console.error('Error adding user', error);
            
        }
    }



    return { users, setUsers }
}