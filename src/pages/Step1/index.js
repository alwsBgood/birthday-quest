import { useHistory } from 'react-router-dom';
import {useState} from "react";
import useError from "../../hooks/useError";
import './style.css'

function Step1() {
    const history = useHistory();
    const [value, setValue] = useState('');
    const [error, setError] = useError();

    const action = (e) => {
        e.preventDefault();

        if(value.trim().toLowerCase() === 'galadriel') {
            history.push('/e6394ca4-b004-4907-a37b-20787ff40d0d')
        } else {
            setError();
        }
    };

    return (
        <div className={`screen ${error ? 'error' : ''}`}>
            <div className="item">Are you good in elvish?</div>
            <div className="item">
                <div className="grid">
                    <div className="row row-1">
                        <div className="elem elem-1">D</div>
                        <div className="elem elem-2">A</div>
                        <div className="elem elem-3">I</div>
                    </div>
                    <div className="row row-2">
                        <div className="elem elem-4">A</div>
                        <div className="elem elem-5">L</div>
                        <div className="elem elem-6">R</div>
                    </div>
                    <div className="row row-3">
                        <div className="elem elem-7">L</div>
                        <div className="elem elem-8">G</div>
                        <div className="elem elem-9">E</div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="prompt-wrap">
                    <div className="prompt prompt-1"/>
                    <div className="prompt prompt-2"/>
                    <div className="prompt prompt-3"/>
                    <div className="prompt prompt-4"/>
                    <div className="prompt prompt-5"/>
                    <div className="prompt prompt-6"/>
                    <div className="prompt prompt-7"/>
                    <div className="prompt prompt-8"/>
                    <div className="prompt prompt-9"/>
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

export default Step1;
