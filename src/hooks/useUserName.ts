import { nanoid } from "nanoid";
import { useEffect, useState } from "react";



export const useUserName = () => {
    const [userName, setUserName] = useState<string>('');
    useEffect(() => {

        if (userName) {
            return;
        }
        async function main() {
            let clientId = await localStorage.getItem("clientId");

            if (!clientId) {
                clientId = nanoid(12);
                await localStorage.setItem("clientId", clientId);
                setUserName(clientId);
                return;
            }
            setUserName(clientId);
            return;
        }
        main();
    });

    return [userName];
}