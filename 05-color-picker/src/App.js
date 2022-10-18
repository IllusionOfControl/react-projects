import React, { useState } from "react";
import Color from "color";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.scss";
import Shade from './Shade'

const App = () => {
  const [input, setInput] = useState("");
  const [color, setColor] = useState([]);
  const [shades, setShades] = useState([]);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const isHex = (str) => {
    const regex = /^#(?:[0-9a-fA-F]{3}){1,2}$/i;
    return regex.test(str);
  };

  const isRGB = (str) => {
    const regex = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
    return regex.test(str);
  };

  const isHSL = (str) => {
    const regex = /hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/;
    return regex.test(str);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const variants = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
    const lightShades = variants.map((num) => Color(input).lighten(num));
    const darkShades = variants.map((num) => Color(input).darken(num));
    const shades = [...lightShades, ...darkShades];
    setShades(shades);
    setColor(input);
  };

  const handleCopyStatus = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="app">
      <header className="page-header">
        <h1 className="headline">Color Shade Generator 🖌</h1>
        <p className="description">
          Put any <b>Hex</b>, <b>RGB</b> or <b>HSL</b> color code and you&#39;ll get 20 different
          (probably) shades!
        </p>
      </header>

      <div className="color-input" onSubmit={handleFormSubmit}>
        <form>
          <div className="input-group">
            <input
              type="text"
              value={input}
              placeholder="#333 or rgb(3,3,3) or hsl(3,3%,3%)"
              onChange={handleInputChange}
              spellCheck={false}
              autoFocus
            />

            <input type="submit" value="Get Shades" disabled={!isHex(input) && !isRGB(input) && !isHSL(input)} />
          </div>
          <p className="input-helper-text">
            Entering the color code according to CSS 3
          </p>
        </form>
      </div>
      {shades.length > 0 ? (
        <>
          <div className="color-info wrapper">
            <div className="color-type info-box">
              <div>
                <h5>Color Type</h5>
                <p>{color && Color(color).isDark() ? "Dark" : "Light"}</p>
              </div>

              <div
                className="color-preview"
                style={{ background: color }}
              ></div>
            </div>

            <div className="color-hsl info-box">
              <h5>HSL Value</h5>
              <CopyToClipboard
                text={Color(color).hsl().string(0)}
                onCopy={() => handleCopyStatus()}
              >
                <button>{color && Color(color).hsl().string(0)}</button>
              </CopyToClipboard>
            </div>

            <div className="color-rgb info-box">
              <h5>RBG Value</h5>
              <CopyToClipboard
                text={Color(color).rgb().toString()}
                onCopy={() => handleCopyStatus()}
              >
                <button>{color && Color(color).rgb().toString()}</button>
              </CopyToClipboard>
            </div>
          </div>
          <div className="shades-grid wrapper">
            <div className="light-shades">
              <div className="header">
                <h3>Light Shades</h3>
                <small>
                  May produce unexpected results if the initial color is already
                  very light.
                </small>
              </div>
              {shades.slice(0, 10).map((shade) => (
                <Shade shade={shade} handleCopyStatus={handleCopyStatus}/>
              ))}
            </div>

            <div className="dark-shades">
              <div className="header">
                <h3>Dark Shades</h3>
                <small>
                  May produce unexpected results if the initial color is already
                  very dark.
                </small>
              </div>
              {shades.slice(10, 20).map((shade) => (
                <Shade shade={shade} handleCopyStatus={handleCopyStatus}/>
              ))}
            </div>
          </div>
        </>
      ): (<></>)}

      <footer className="site-footer">
        <p>
          Made by <b>Illusion of control</b>
        </p>
      </footer>

      {copied && <p className="copy-status">Copied!</p>}
    </div>
  );
};

export default App;