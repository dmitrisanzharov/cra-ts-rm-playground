import React from "react";

type User = {
    name: string;
    role: "admin" | "editor" | "viewer" | 'moderator';
};

type PropsNew = {
    type: "success" | "error";
};

type Props = {
    user: User;
};

const Notification = ({ type }: PropsNew) => {
    if (type === "success") {
        return <div style={{ color: "green" }}>Success!</div>;
    }

    if (type === "error") {
        return <div style={{ color: "red" }}>Error!</div>;
    }

    return null;
};

const notificationsObject = {
    success: { message: "Success!", color: "green" }, error: { message: "Error!", color: "green" },
}

const Notification2 = ({ message, color }: any) => {
    return <div style={{ color }}>{message}</div>;
}





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