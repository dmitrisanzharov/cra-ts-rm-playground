import React, { useEffect, useState } from "react";


type User = {
   id: number;
   name: string;
   email: string;
};


export default function UserDashboard() {
   const [users, setUsers] = useState<User[]>([]);

   const [loading, setLoading] = useState(false);
   
   const [search, setSearch] = useState("");


   useEffect(() => {
       async function fetchUsers() {
           setLoading(true);
           const res = await fetch("https://jsonplaceholder.typicode.com/users");
           const data = await res.json();
           setUsers(data);
           setLoading(false);
       }


       fetchUsers();
   }, []);


   const filteredUsers = users.filter(user =>
       user.name.toLowerCase().includes(search.toLowerCase())
   );


   const formatEmail = (email: string) => email.trim().toLowerCase();


   return (
       <div>
           <input
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               placeholder="Search users..."
           />


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
