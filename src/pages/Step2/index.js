import { useHistory } from 'react-router-dom';
import {useState} from "react";
import useError from "../../hooks/useError";
import './style.css'

function Step2() {
    const history = useHistory();
    const [value, setValue] = useState('');
    const [error, setError] = useError();

    const action = (e) => {
        e.preventDefault();

        if(value.toLowerCase() === '6734') {
            history.push('/fe69d4ce-586a-443c-8935-188060d9423e')
        } else {
            setError();
        }
    };

    return (
        <div className={`screen ${error ? 'error' : ''}`}>
            <div className="item">Find me and I'll give you a Quick Response.</div>
            <div className="item">50.503178618326274, 30.42279539388039</div>

            <div className="item">
                <form onSubmit={action}>
                    <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
                    <button onClick={action}>Enter</button>
                </form>
            </div>
        </div>
    );
}

export default Step2;
