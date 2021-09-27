import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserNinja } from '@fortawesome/free-solid-svg-icons';
import "./Hero.css"

const Heero = (props) => {
    // console.log(props);
    const { id, age, email, first_name, salary, img, gender } = props.Hero;
    const element = <FontAwesomeIcon icon={faUserNinja} />
    // console.log(img)
    return (
        <div className="col-md-4 shadow border border-secondary py-2">
            <div className="card-group">
                <div className="card p-1">
                    <img src={img} className="card-img-top img-thumbnail hero-img" alt="..." />
                    <div className="card-body">
                        <p><small>ID: {id}</small></p>
                        <h2>Name: {first_name}</h2>
                        <p>Age: {age}</p>
                        <p>Gender: {gender}</p>
                        <h5>Rate: {salary} $USD</h5>
                        <p>Email: {email}</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={() => props.handleAddToProgrammer(props.Hero)}
                            className="btn btn-outline-secondary">{element}  Hire Me </button>
                    </div>
                </div>

            </div>
        </div>);
};

export default Heero;