import React from 'react';
import { Link } from 'react-router-dom';

function SinuRaamatud() {
  const laps = JSON.parse(localStorage.getItem("nimi")) || [];

  return (
    <div>
      <h2>Sinu raamatud</h2>
      <div><i>Raamatud on väljatoodud lapse nime järgi.</i></div>
      <br /><br />

      {laps.map((l, index) => (
        <div key={index}>
          {l.nimi}
          <br /><br />
          <Link to={"/kujundamine"}>
            <button className='button'>Vaata lähemalt</button>
          </Link>
        </div>
      ))}

      {laps.length === 0 && <div><b>Ühtegi raamatut hetkel pole!</b></div>}
    </div>
  );
}

export default SinuRaamatud;
