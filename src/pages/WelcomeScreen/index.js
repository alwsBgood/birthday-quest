import { useHistory } from 'react-router-dom';
import {useState} from "react";
import useError from "../../hooks/useError";

function WelcomeScreen() {
    const history = useHistory();
    const [value, setValue] = useState('');
    const [error, setError] = useError();

    const action = (e) => {
        e.preventDefault();

        if(value.trim().toLowerCase() === 'mellon' || value.trim().toLowerCase() === 'friend') {
            history.push('/df9ef054-83e0-44da-8f8f-dc571c840378')
        } else {
            setError();
        }
    };

    return (
        <div className={`screen ${error ? 'error' : ''}`}>
            <div className="item">
                Welcome. <br />
                So, I've heard it's your birthday?<br />
                I won't just give you a present.<br />
                I'm giving you an opportunity to earn one.<br />
                The only question is will you dare to try?<br />
                Speak friend and enter.
            </div>
            <div className="item">
                <form onSubmit={action}>
                    <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
                    <button onClick={action}>Start</button>
                </form>
            </div>
        </div>
    );
}

export default WelcomeScreen;
