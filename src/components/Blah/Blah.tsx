import React, { useState } from 'react';

const saveUserToDatabase = (name: string) => {
    console.log(`Saving ${name} to the database...`);
};

type User = {
    saveUserToDatabase: (name: string) => void
}

const UserProfile = ({ saveUserToDatabase }: User) => {
    const [name, setName] = useState('');

    return (
        <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={()=> saveUserToDatabase(name)}>
                Save
            </button>
        </div>
    );
};

export default UserProfile;