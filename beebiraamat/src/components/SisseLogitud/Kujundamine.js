import React, { useState } from 'react';
import { SketchPicker } from 'react-color';



function Kujundamine() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [color, setColor] = useState('var(--overlay)'); 
  const [titleStyle, setTitleStyle] = useState('italic');
  const [authorStyle, setAuthorStyle] = useState('normal');
  const [titleFont, setTitleFont] = useState('Arial');
  const [authorFont, setAuthorFont] = useState('Arial');
  const [titleSize, setTitleSize] = useState(36); 
  const [authorSize, setAuthorSize] = useState(22); 
  const [titleWeight, setTitleWeight] = useState('normal');
  const [authorWeight, setAuthorWeight] = useState('normal');

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, author, image, color };
    localStorage.setItem('book', JSON.stringify(book));
    setTitle('');
    setAuthor('');
    setImage('');
    setColor('var(--overlay)');
    alert('Raamat salvestatud!');
  };

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  const handleTitleStyleChange = (e) => {
    setTitleStyle(e.target.value);
  };

  const handleAuthorStyleChange = (e) => {
    setAuthorStyle(e.target.value);
  };

  const handleTitleFontChange = (e) => {
    setTitleFont(e.target.value);
  };

  const handleAuthorFontChange = (e) => {
    setAuthorFont(e.target.value);
  };

  const handleTitleSizeChange = (e) => {
    setTitleSize(parseInt(e.target.value));
  };

  const handleAuthorSizeChange = (e) => {
    setAuthorSize(parseInt(e.target.value));
  };

  const handleTitleWeightChange = (e) => {
    setTitleWeight(e.target.value);
  };

  const handleAuthorWeightChange = (e) => {
    setAuthorWeight(e.target.value);
  };

  return (
    <div >
      <div  style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px', width: '50%' }}>
          <h1>DigiBeebi Beebiraamat</h1>
          <span className='line'></span>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title"><b>Pealkiri:</b></label>
            <div><i>Tavaliselt lapse nimi</i></div>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <br />
            <br />
            <label htmlFor="titleStyle">Perkirja kalle:</label>
            <select
              id="titleStyle"
              value={titleStyle}
              onChange={handleTitleStyleChange}
            >
              <option value="normal">Tavaline</option>
              <option value="italic">Kursiiv</option>
            </select>
            <br />
            <br />
            <label htmlFor="titleWeight">Pelkirja paksus:</label>
            <select
              id="titleWeight"
              value={titleWeight}
              onChange={handleTitleWeightChange}
            >
              <option value="normal">Tavaline</option>
              <option value="bold">Paks</option>
            </select>
            <br />
            <br />
            <label htmlFor="titleFont">Pealkirja font:</label>
            <select
              id="titleFont"
              value={titleFont}
              onChange={handleTitleFontChange}
            >
              <option value="Arial">Arial</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Verdana">Verdana</option>
              
            </select>
            <br />
            <br />
            <label htmlFor="titleSize">Pealkirja suurus (px):</label>
            <input
              type="number"
              id="titleSize"
              value={titleSize}
              onChange={handleTitleSizeChange}
            />
            <br />
            <br />
            <label htmlFor="author"><b>Tekst pealkirja alla:</b></label>
            <div><i>Nt: Meie esimene aasta</i></div>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
            <br />
            <br />
            <label htmlFor="authorStyle">All teksti kalle :</label>
            <select
              id="authorStyle"
              value={authorStyle}
              onChange={handleAuthorStyleChange}
            >
              <option value="normal">Tavaline</option>
              <option value="italic">Kursiiv</option>
         
            </select>
            <br />
            <br />
            <label htmlFor="authorWeight">All teksti paksus:</label>
            <select
              id="authorWeight"
              value={authorWeight}
              onChange={handleAuthorWeightChange}
            >
              <option value="normal">Tavaline</option>
              <option value="bold">Paks</option>
            </select>
            <br />
            <br />
            <label htmlFor="authorFont">All teksti font:</label>
            <select
              id="authorFont"
              value={authorFont}
              onChange={handleAuthorFontChange}
            >
              <option value="Arial">Arial</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Verdana">Verdana</option>
              
            </select>
            <br />
            <br />
            <label htmlFor="authorSize">All teksti suurus (px):</label>
            <input
              type="number"
              id="authorSize"
              value={authorSize}
              onChange={handleAuthorSizeChange}
            />
            <br />
            <br />
            <label htmlFor="image"><b>Pilt:</b></label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            />
            <br />
            <br />
            <label htmlFor="color"><b>Raamatu värv:</b></label>
            <SketchPicker color={color} onChange={handleColorChange} />
            <br />
            <br />
            <button type="submit" className="button" style={{ backgroundColor: 'var(--secondary-color)', border: '1px solid var(--secondary-color)', color: '#333' }}>Edasi sisu juurde</button>
          </form>
        </div>
        <h4>Raamatu eelvaade:</h4>
        <div style={{ border: '1px solid black', padding: '10px', backgroundColor: color, width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
          {image && <img src={image} alt="Pilt" style={{ maxWidth: '100%', maxHeight: '300px' }} />}
          <div style={{ color: 'white', textAlign: 'center' }}>
            <p style={{ fontStyle: titleStyle, fontWeight: titleWeight, fontFamily: titleFont, fontSize: `${titleSize}px` }}>{title}</p>
            <p style={{ fontStyle: authorStyle, fontWeight: authorWeight, fontFamily: authorFont, fontSize: `${authorSize}px` }}> {author}</p>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kujundamine;
