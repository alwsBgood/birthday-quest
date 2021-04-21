import { useHistory } from 'react-router-dom';
import {useState} from "react";
import useError from "../../hooks/useError";
import './style.css'

function Step3() {
    const history = useHistory();
    const [value, setValue] = useState('');
    const [error, setError] = useError();

    const action = (e) => {
        e.preventDefault();

        if(value.toLowerCase() === '6734') {
            history.push('./')
        } else {
            setError();
        }
    };

    return (
        <div className={`screen ${error ? 'error' : ''}`}>
            <div className="item">Good one, want some coffee?</div>

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
