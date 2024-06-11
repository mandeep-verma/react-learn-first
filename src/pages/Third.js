import React from 'react';
import ThirdComponents from './components/ThirdComponents';

const Third = () => {

    let obj = {
        imgId: 3,
        title: "Component With Hook TRUE OBJ",
        msg: "This is props MSg TRUE Part OBJ",
        bg: "blue",
        verified: true,
    }

    // ////////////
    let objArray = [{
        imgId: 4,
        title: "Component With Hook TRUE OBJ  First",
        msg: "This is props MSg TRUE Part OBJ First",
        bg: "blue",
        verified: true,
    }, {
        imgId: 5,
        title: "Component With Hook False OBJ SECOND",
        msg: "This is props MSg False Part OBJ SECOND",
        bg: "blue",
        verified: false,
    }, {
        imgId: 6,
        title: "Component With Hook TRUE OBJ  Third",
        msg: "This is props MSg TRUE Part OBJ Third",
        bg: "blue",
        verified: true,
    }, {
        imgId: 7,
        title: "Component With Hook False OBJ Four",
        msg: "This is props MSg False Part OBJ Four",
        bg: "blue",
        verified: false,
    }];

    return (
        <div className='container'>
            <h3>Conditional Rendring</h3>
            <br />
            <ThirdComponents title="Component With Hook TRUE" imgId="1" msg="This is props MSg TRUE Part" bg="green" verified={true} />
            /////////////////////////////////////////////
            <ThirdComponents title="Component With Hook FALSE" imgId="2" msg="This is props MSg FALSE Part" bg="red" verified={false} />
            /////////////////////////////////////////////

            <ThirdComponents {...obj} />

            /////////////////////////////////////////////

            {
                objArray.map(data => <ThirdComponents key={data.imgId} title={data.title}  imgId={data.imgId} msg={data.msg} bg={data.bg} verified={data.verified} />)
            }

        </div>
    );
}

export default Third;
