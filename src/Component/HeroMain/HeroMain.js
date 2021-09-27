import React, { useEffect, useState } from 'react';
import Caart from '../Hero-Cart/Caart';
import Heero from '../Hero/Heero';
import "./HeroMain.css"

const HeroMain = () => {
    const [Heros, setHeros] = useState([]);
    const [programmers, setProgrammers]=useState([]);

    useEffect(() => {
        fetch("./herosData.JSON")
            .then(res => res.json())
            .then(data => setHeros(data))
    }, [])
    const handleAddToProgrammer =(programmer)=>{
        // console.log(programmer);
        const newProgrammer =[...programmers,programmer];
        setProgrammers(newProgrammer);
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    

                    <div className="row">
                        {
                            Heros.map(Hero => <Heero
                             key={Hero.name} Hero={Hero} handleAddToProgrammer={handleAddToProgrammer}>

                            </Heero>)
                        }
                    </div>
                </div> 
                <div className="col-md-3 border border-dark">
                   
                    <Caart programmers={programmers}></Caart>
                </div>
            </div>
        </div>

    );
};

export default HeroMain;
