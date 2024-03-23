import { Beginner } from "./BeginnerBasics";
import Alert from "./Alert";

export const Capital = () => {
    const handleAlert = () => {
        Alert(); // Call the Alert function
    };
    
    return (
        <div>
            {handleAlert()} {/* Call the function and render the result */}
            <Beginner />
        </div>
    );
};