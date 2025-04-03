import React from "react";
import './form.css';

import {Link} from 'react-router-dom'
const Form = () => {
    const handlesubmit = (event) => {
        event.preventDefault(); // Prevent page reload
        alert('Thanks for choosing our website!');
    };
   
    return (
        <div>
            <form className="main" onSubmit={handlesubmit}> {/* Added onSubmit to form */}
                <div>
                    <label>Name</label>
                    <input type="text" required/>
                </div>
                <div>
                    <label>Select the Date</label>
                    <input type="date" required/>
                </div>
                <div>
                    <label>Select the place</label>
                    <select name="Places" required>
                        <option value="">Select the city</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Madurai">Madurai</option>
                        <option value="Trichy">Trichy</option>
                        <option value="Tirunelveli">Tirunelveli</option>
                        <option value="Thoothukudi">Thoothukudi</option>
                    </select>
                </div>
                <div>
                    <label>Select your budget</label>
                    <select name="Price" required>
                        <option value="">Select Your Budget</option>
                        <option value="1-5">1000-5000</option>
                        <option value="5-10">5000-10000</option>
                        <option value="10-15">10000-15000</option>
                        <option value="15-20">15000-20000</option>
                    </select>
                </div>

                    <div className="button-container">
                    <Link to='/'><button type="button" className="back">Back</button></Link>
                    <button type="submit" className="submit">Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default Form;
