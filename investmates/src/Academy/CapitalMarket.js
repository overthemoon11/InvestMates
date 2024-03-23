import { useEffect } from 'react';
import { Beginner } from "./BeginnerBasics";

export const Capital = () => {
    useEffect(() => {
        alert("To access exclusive premium content and unlock a world of valuable insights, subscribe now!");
    }, []); // Empty dependency array ensures the effect runs only once after the component mounts

    return (
        <div>
            <Beginner />
        </div>
    );
};