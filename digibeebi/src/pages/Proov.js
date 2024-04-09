import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

function Proov() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [color, setColor] = useState('white'); // Vaikimisi värv
  const [titleStyle, setTitleStyle] = useState('normal');
  const [authorStyle, setAuthorStyle] = useState('italic');
  const [titleFont, setTitleFont] = useState('Arial');
  const [authorFont, setAuthorFont] = useState('Arial');
  const [titleSize, setTitleSize] = useState(16);
  const [authorSize, setAuthorSize] = useState(14);
  const [titleWeight, setTitleWeight] = useState('normal');
  const [authorWeight, setAuthorWeight] = useState('normal');

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, author, image, color };
    localStorage.setItem('book', JSON.stringify(book));
    setTitle('');
    setAuthor('');
    setImage('');
    setColor('white'); // Lähtestame värvivaliku
    alert('Raamat salvestatud!');
  };

  const handleColorChange = (newColor) => {
    setColor(newColor.hex); // Uue värvi määramine, kui see muutub
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
    <div className="container">
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px', width: '50%' }}>
          <h1>DigiBeebi Beebiraamat</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Lapse nimi:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <br />
            <br />
            <label htmlFor="titleStyle">Lapse nime stiil:</label>
            <select
              id="titleStyle"
              value={titleStyle}
              onChange={handleTitleStyleChange}
            >
              <option value="normal">Tavaline</option>
              <option value="italic">Kursiiv</option>
              <option value="bold">Paks</option>
              <option value="bold italic">Paks ja kursiiv</option>
            </select>
            <br />
            <br />
            <label htmlFor="titleWeight">Lapse nime raskus:</label>
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
            <label htmlFor="titleFont">Lapse nime font:</label>
            <select
              id="titleFont"
              value={titleFont}
              onChange={handleTitleFontChange}
            >
              <option value="Arial">Arial</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Verdana">Verdana</option>
              {/* Lisa siia veel teisi fondinimesid */}
            </select>
            <br />
            <br />
            <label htmlFor="titleSize">Lapse nime suurus (px):</label>
            <input
              type="number"
              id="titleSize"
              value={titleSize}
              onChange={handleTitleSizeChange}
            />
            <br />
            <br />
            <label htmlFor="author">Tekst lapse nime alla:</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
            <br />
            <br />
            <label htmlFor="authorStyle">Teksti stiil lapse nime all:</label>
            <select
              id="authorStyle"
              value={authorStyle}
              onChange={handleAuthorStyleChange}
            >
              <option value="normal">Tavaline</option>
              <option value="italic">Kursiiv</option>
              <option value="bold">Paks</option>
              <option value="bold italic">Paks ja kursiiv</option>
            </select>
            <br />
            <br />
            <label htmlFor="authorWeight">Teksti raskus lapse nime all:</label>
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
            <label htmlFor="authorFont">Teksti font lapse nime all:</label>
            <select
              id="authorFont"
              value={authorFont}
              onChange={handleAuthorFontChange}
            >
              <option value="Arial">Arial</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Verdana">Verdana</option>
              {/* Lisa siia veel teisi fondinimesid */}
            </select>
            <br />
            <br />
            <label htmlFor="authorSize">Teksti suurus lapse nime all (px):</label>
            <input
              type="number"
              id="authorSize"
              value={authorSize}
              onChange={handleAuthorSizeChange}
            />
            <br />
            <br />
            <label htmlFor="image">Pilt:</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            />
            <br />
            <br />
            <label htmlFor="color">Raamatu värv:</label>
            <SketchPicker color={color} onChange={handleColorChange} />
            <br />
            <br />
            <button type="submit">Salvesta raamat</button>
          </form>
        </div>
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

export default Proov;
