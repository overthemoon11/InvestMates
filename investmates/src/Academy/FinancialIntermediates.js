import Alert from "./Alert";
import { Beginner } from "./BeginnerBasics";

export const FinancialIntermediates=()=>{
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