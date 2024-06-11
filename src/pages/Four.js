import React from 'react';
import FourComponentsButton, { FourComponentsSecond, FourComponentsThirdUseState } from './components/FourComponents';
const Four = () => {
    return (
        <div className='container'>
            <h3>EVENT (Keyboard and mouse)</h3>
            <br />

            {/* onClick  only event not call -------   onClick ka function pass kiya h propes me  */}
            {/* <FourComponentsButton message="first button click" onClick={() => console.log('First Button')}  >play1 </FourComponentsButton> */}


            <FourComponentsButton message="first button click" onSmash={() => console.log('First Button')}  >Button 1 </FourComponentsButton>
            <FourComponentsButton message="second button click" onSmash={() => alert('Second Button')} > Button 2 </FourComponentsButton>


            <FourComponentsSecond message="first button click" onPlay={() => console.log('Play Button Press')} onPause={() => console.log('Pause Button Press')} > Button </FourComponentsSecond>


            <FourComponentsThirdUseState message="first button click" onPlay={() => console.log('Play Button Press')} onPause={() => console.log('Pause Button Press')} > Button State </FourComponentsThirdUseState>


        </div>
    );
}

export default Four;
