import './style.css'
import {useHistory} from "react-router-dom";
import {useState} from "react";
import useError from "../../hooks/useError";

function Step4() {
    const history = useHistory();
    const [value, setValue] = useState('');
    const [error, setError] = useError();

    const action = (e) => {
        e.preventDefault();

        if(value.toLowerCase() === '9657') {
            history.push('/3f21bdc2-af2d-11eb-8529-0242fdf31425')
        } else {
            setError();
        }
    };

    return (
        <div className={`screen ${error ? 'error' : ''}`}>
            <div className="item">

                <div className="big-text">你好</div>
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

export default Step4;
