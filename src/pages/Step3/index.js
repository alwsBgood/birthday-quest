import Pic1 from '../../images/1.jpg'
import Pic2 from '../../images/2.jpg'
import Pic3 from '../../images/3.jpg'
import Pic4 from '../../images/4.jpg'
import Pic5 from '../../images/5.jpg'
import Pic6 from '../../images/6.jpg'

import './style.css'
import {useHistory} from "react-router-dom";
import {useState} from "react";
import useError from "../../hooks/useError";

function Step3() {
    const history = useHistory();
    const [value, setValue] = useState('');
    const [error, setError] = useError();

    const action = (e) => {
        e.preventDefault();

        if(value.toLowerCase() === '5187') {
            history.push('/2fa20e38-af2d-11eb-8529-0242ac130003')
        } else {
            setError();
        }
    };

    return (
        <div className={`screen ${error ? 'error' : ''}`}>
            <div className="item">
                <div className="image-wrap">
                    <img src={Pic1} alt="img1"/>
                    <img src={Pic2} alt="img1"/>
                </div>
                <div className="image-wrap">
                    <img src={Pic3} alt="img1"/>
                    <img src={Pic4} alt="img1"/>
                </div>
                <div className="image-wrap">
                    <img src={Pic5} alt="img1"/>
                    <img src={Pic6} alt="img1"/>
                </div>
            </div>

            <div className="item">
                <form onSubmit={action}>
                    <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
                    <button onClick={action}>Enter</button>
                </form>
            </div>
        </div>
    );
}

export default Step3;
