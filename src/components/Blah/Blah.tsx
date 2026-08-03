import { useEffect, useState } from 'react';


const messageType: Record<string, any> = {
    email: {
        type: 'email',
        text: 'email'
    },
    sms: {
        type: 'sms',
        text: 'sms'
    }
};

function messageTypeWithFallBack(type: string){
    return messageType[type]?.text || 'unknown';
}

function useNotification(userId: number, type: string) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (type === 'email') {
            setMessage(`Sending email notification to user ${userId}`);
        }

        if (type === 'sms') {
            setMessage(`Sending SMS notification to user ${userId}`);
        }
    }, [userId, type]);

    return message;
}

function useNotification2(userId: number, type: string) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        setMessage(`Sending ${messageTypeWithFallBack(type)} notification to user ${userId}`);
    }, [userId, type]);

    return message;
}

export default function UserNotification() {
    const message = useNotification(123, 'email');

    return <div>{message}</div>;
}
