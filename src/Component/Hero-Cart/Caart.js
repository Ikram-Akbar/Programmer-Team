import React from 'react';

const Caart = (props) => {
    console.log(props.programmers);
    const {programmers}= props;
    let total=0;
    for(const programmer of programmers){
        let salry = parseInt(programmer.salary);
        total = total + salry;
    }
    
    return (
        <div>
            <h2>
                Programmer : {props.programmers.length}
                <br />
                Total : $ {total} 
            </h2>
        </div>
    );
};

export default Caart;