function Avaleht() {
const computers = JSON.parse(localStorage.getItem("laptops")) || [];

return (
<div className="avaleht-text">
  <div>Tere</div> <br /><br />
  <div>Siin lehel saad sülearvuteid vaadata</div>
    { computers.map(oneComputer =>
      <div>
        <div>{oneComputer.mark}</div>
        <div>{oneComputer.mudel}</div>
        <div>{oneComputer.maksumus}</div>
      <button>Teeme temaga midagi</button>
    </div>) }
</div>)

}

export default Avaleht