// SelectBox.js
import React from "react";

function SelectBox({ label, value, onChange, options, className1,className2 }) {
  return (
    
    <div className={className1}>
      {
      label !== 'mark Status'?
      <select value={value} onChange={onChange} className={className2} >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>:
    
      <select value={value} onChange={onChange} className={className2}>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
}
    </div>
  );
}

export default SelectBox;
