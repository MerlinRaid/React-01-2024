import React from 'react'

function Avaleht() {
  return (
    <div>
 <button className="nupp">Nupp</button>
        <div className="tekst">Tekst</div>
        <h2 className="tekst2">Tekst</h2>
        <img src="https://t4.ftcdn.net/jpg/05/74/26/31/360_F_574263101_TJBaEd9BGd36eO1TlPhnl8apExNEdq8n.jpg" className="pilt" alt="Logo" />
        

        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/mcOjTPSLEeA?si=hn-iz0JREdDtDcsJ" 
        title="YouTube video player"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>

        </iframe>
        
        <h2>HTML Table</h2>

  <table>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
    <tr>
      <td>Ernst Handel</td>
      <td>Roland Mendel</td>
      <td>Austria</td>
    </tr>
    <tr>
      <td>Island Trading</td>
      <td>Helen Bennett</td>
      <td>UK</td>
    </tr>
    <tr>
      <td>Laughing Bacchus Winecellars</td>
      <td>Yoshi Tannamuri</td>
      <td>Canada</td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>Giovanni Rovelli</td>
      <td>Italy</td>
    </tr>
  </table>


    </div>
  )
}

export default Avaleht