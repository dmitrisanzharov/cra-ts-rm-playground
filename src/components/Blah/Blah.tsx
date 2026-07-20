import { useEffect, useState } from 'react';

type User = {
    id: number;
    name: string;
    email: string;
};

export default function UserDashboard() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadUsers();
    }, []);

    async function loadUsers() {
        setLoading(true);

        const response = await fetch('/api/users');
        const data = await response.json();

        // Business logic
        const activeUsers = data.filter((user: any) => user.active);

        // Sorting logic
        activeUsers.sort((a: User, b: User) => a.name.localeCompare(b.name));

        setUsers(activeUsers);
        setLoading(false);
    }

    function exportToCsv() {
        const csv = users.map((user) => `${user.name},${user.email}`).join('\n');

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'users.csv';
        link.click();
    }

    function logVisit() {
        console.log('Dashboard visited');
    }

    useEffect(() => {
        logVisit();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Users</h2>

            <button onClick={exportToCsv}>Export CSV</button>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
}
