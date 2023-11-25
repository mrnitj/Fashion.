import axios from "axios";
import { useRef } from "react";

interface dealerData {
    email: string;
    password: string;
}

export const DealerLogin = () => {
    const emailRef: React.RefObject<HTMLInputElement> = useRef(null);
    const passwordRef: React.RefObject<HTMLInputElement> = useRef(null);

    const adminLoginHandler = async () => {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (email && password) {
            const dealerData: dealerData = {
                email: email,
                password: password,
            };

            const response = await axios.post("https://ecommerce-api.bridgeon.in/login", dealerData);

            localStorage.setItem("dealerToken", response.data.data.token);

            console.log(response.data.data.token);
        }
    };

    return (
        <div>
            <label htmlFor="">admin emila</label>
            <input type="email" ref={emailRef} />
            <label htmlFor="">password</label>
            <input type="password" ref={passwordRef} />

            <button onClick={adminLoginHandler}>add</button>
        </div>
    );
};
