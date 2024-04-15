import React, { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./LapseAndmed.css"
import { Link } from "react-router-dom"



const LapseAndmed = () => {
  const [nimi, setNimi] = useState('');
  const [sunniaasta, setSunniaasta] = useState(new Date());
  const [lapseAndmed, setLapseAndmed] = useState([]);
  const nimeRef = useRef();

  function lisalaps() {
    let laps = localStorage.getItem("nimi");
    laps = JSON.parse(laps) || [];
    laps.push(nimeRef.current.value);
    laps = JSON.stringify(laps);
    localStorage.setItem("laps", laps);
          
  } 

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'nimi') {
      setNimi(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uusLaps = { nimi, sunniaasta };
    setLapseAndmed([...lapseAndmed, uusLaps]);
    setNimi('');
    setSunniaasta(new Date());
  };

  return (
    <div className='lapseAndmed'>
      <h2><i>Lapse Andmete Lisamine</i></h2>
      <form className='content' onSubmit={handleSubmit}>
        <div >
          <label htmlFor="nimi"><p>Lapse nimi:</p></label>
          <input ref={nimeRef}
            type="text"
            id="nimi"
            name="nimi"
            value={nimi}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="sunniaasta"><p>Sünniaeg:</p></label>
          <DatePicker
            selected={sunniaasta}
            onChange={(date) => setSunniaasta(date)}
          />
        </div>
        <Link to={'/kujundamine'}>
        <button onClick={lisalaps} className='button' type="submit">Alusta Raamatuga</button>
        </Link>
      </form>
    </div>
  );
};

export default LapseAndmed;
