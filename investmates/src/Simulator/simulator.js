import LeftRightLayout from '../components/LeftRightColumn/LeftRightLayout.js';
import LeftComponent from './LeftComponent.js'; // Import your left component
import RightComponent from './RightComponent.js'; // Import your right component


export const Simulator=()=>{
    return (
        <div className="column-container">
            <LeftRightLayout
                leftComponent={<LeftComponent />}
                rightComponent={<RightComponent />}
                />
        </div>
    )
};