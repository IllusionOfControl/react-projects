import { CopyToClipboard } from "react-copy-to-clipboard";
import { v4 as uuidv4 } from "uuid";

const Shade = ({ shade, handleCopyStatus }) => {
  return (
    <div className="shade-item">
      <div className="preview" style={{ background: shade.hex() }}></div>
      <div className="info">

        <div className="format-copy">
          <CopyToClipboard
            text={shade.hex()}
            onCopy={() => handleCopyStatus()}
            key={uuidv4()}
          >
            <span>HEX</span>
          </CopyToClipboard>

          <CopyToClipboard
            text={shade.rgb()}
            onCopy={() => handleCopyStatus()}
            key={uuidv4()}
          >
            <span>RGB</span>
          </CopyToClipboard>

          <CopyToClipboard
            text={shade.hsl()}
            onCopy={() => handleCopyStatus()}
            key={uuidv4()}
          >
            <span>HSL</span>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default Shade;
