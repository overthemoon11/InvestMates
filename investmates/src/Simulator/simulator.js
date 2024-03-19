import LeftRightLayout from '../components/LeftRightColumn/LeftRightLayout.js';
import ComponentA from './ComponentA.js'; // Import your left component
import ComponentB from './ComponentB.js'; // Import your right component


export const Simulator=()=>{
    return (
        <div className="column-container">
            <LeftRightLayout
                leftComponent={<ComponentA />}
                rightComponent={<ComponentB />}
                />
        </div>
    )
};