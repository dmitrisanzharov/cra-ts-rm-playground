import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
};


// Low-level module
const UserApi = {
    async fetchUsers(): Promise<User[]> {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        return response.json();
    }
};


// High-level module
export function useUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        UserApi.fetchUsers()
            .then(data => setUsers(data))
            .finally(() => setLoading(false));
    }, []);

    return {
        users,
        loading
    };
}