import React from 'react';

const ThirdComponents = ({ title, msg, verified, imgId }) => {

    let detailsJSX, bg;

    // true  // bg green and blue
    // false // bg orange and red

    if (verified) {
        bg = "green"
        detailsJSX = <div className='mt-2' style={{ backgroundColor: bg, color: 'white' }} > {msg} ✔️</div>;
    } else {
        bg = "red"
        detailsJSX = <div className='mt-2' style={{ backgroundColor: bg, color: 'white' }} > {msg}  ❌ </div>;

    }
    return (
        <div className='mt-2'>
            <p> {title}</p>
            <img
                src={`https://picsum.photos/id/${imgId}/100/100`}
                alt="Katherine Johnson"
            />


            {/* ====== Variable ke throw ====== */}


            {/* {detailsJSX} */}
            {/* {verified ? <div className='mt-2' style={{ backgroundColor: 'blue', color: 'white' }} > {msg} ✔️</div> : <div className='mt-2' style={{ backgroundColor: 'orange', color: 'white' }} > {msg}  ❌ </div>} */}
            {/* User Ternay operator */}
            {/* {verified ? '✔️' : '❌'} */}
            {/* {verified && '✔️'} */}


            {/* ====== Variable ke throw ====== */}



            {/* User Ternay operator */}

            <div className='mt-2' style={{ backgroundColor: bg, color: 'white' }} > {msg} {verified ? '✔️' : '❌'}</div>




        </div>
    );
}

export default ThirdComponents;
