import React from 'react';
import SecondComponents, { SecondComponentsHooks, SecondComponentsHooksNew } from './components/SecondComponents';

const Second = () => {


    let obj = {
        title: "component with obj",
        msg: "this is props message with obj",
        bg: "blue",
    }
    return (
        <div className='container'>
            <h3>function / component (Props)</h3>
            <br />
            ////////////////////////////////////////////////////////////////////////
            <SecondComponents />
            ////////////////////////////////////////////////////////////////////////
            <SecondComponentsHooks title="Component With Hook" msg="This is props MSg" bg="red" />
            ////////////////////////////////////////////////////////////////////////
            <SecondComponentsHooksNew title="Component With Hook Without Props" msg="This is props MSg With out props" bg="green" />

            ////////////////////////////////////////////////////////////////////////

            {/* {...obj}    // this is spread opration */}

            <SecondComponentsHooks {...obj}> </SecondComponentsHooks>

        </div>
    );
}

export default Second;
