
interface PayloadPushDataLayer {
    event?: string;
    category?: string;
    action?: string;
    label?: string;
    value?: number;
    [key: string]: any;
}
const googleTagManager = (win: any) => {
    /**
     * 
     * @param {PayloadPushDataLayer} payload 
     */
    const push = (payload: PayloadPushDataLayer) => {
        try {
            if(!(win?.dataLayer)) {
                console.warn("dataLayer object isn't defined");
            }
            if(typeof win?.dataLayer?.push === "function") {
                win?.dataLayer?.push(payload);
            } else {
                console.warn("push method dosen't exist in dataLayer intance");
            }
            
        } catch (error) {
            console.warn('Warn: ', error || 'There is a problem with Data Layer push method.');
        }
    }
    return { push }
}

export default googleTagManager;