import React, { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
    email: string;
};


export default function UserDashboard() {

    const [search, setSearch] = useState("");
    const { users, loading } = useUsers();
    

    const filteredUsers = filterUsers(users, search);

    return (
        <div>
            {/* 4. Input handling */}
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search users..."
            />

            {/* 5. UI rendering */}
            {loading && <p>Loading...</p>}

            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {formatEmail(user.email)}
                    </li>
                ))}
            </ul>
        </div>
    );
}


function useUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchUsers() {
            setLoading(true);

            const res = await fetch("/api/users");
            const data = await res.json();

            setUsers(data);
            setLoading(false);
        }

        fetchUsers();
    }, []);

    return { users, loading };
}


export function filterUsers(users: User[], search: string) {
    const query = search.toLowerCase();

    return users.filter(user =>
        user.name.toLowerCase().includes(query)
    );
}


function formatEmail(email: string) {
    return email.trim().toLowerCase();
}


function Button({
    children,
    style,
}: {
    children: React.ReactNode;
    style?: React.CSSProperties;
}) {
    return <button style={style}>{children}</button>;
}