import React from "react";

type User = {
    name: string;
    role: "admin" | "editor" | "viewer" | 'moderator';
};

type Props = {
    user: User;
};

const UserActions = ({ user }: Props) => {

    const handleAction = (action: string) => {
        if (action === "delete") {
            console.log(`Deleting user ${user.name}`);
        }

        if (action === "edit") {
            console.log(`Editing user ${user.name}`);
        }

        if (action === "view") {
            console.log(`Viewing user ${user.name}`);
        }

        if (action === "ban") {
            console.log(`Banning user ${user.name}`);
        }

        if (action === "approve") {
            console.log(`Approving user ${user.name}`);
        }

        if (action === "add_guest") {
            console.log(`Adding guest user ${user.name}`);
        }
    };


    return (
        <div>
            {user.role === "admin" && (
                <>
                    <button onClick={() => handleAction("delete")}>
                        Delete
                    </button>

                    <button onClick={() => handleAction("ban")}>
                        Ban
                    </button>
                </>
            )}

            {user.role === "editor" && (
                <button onClick={() => handleAction("edit")}>
                    Edit
                </button>
            )}

            {user.role === "viewer" && (
                <button onClick={() => handleAction("view")}>
                    View
                </button>
            )}

            {user.role === 'moderator' && (
                <>
                    <button onClick={() => handleAction("approve")}>
                        Approve
                    </button>
                    <button onClick={() => handleAction("add_guest")}>
                        Add guest
                    </button>
                </>
            )}
        </div>
    );
};

export default UserActions;