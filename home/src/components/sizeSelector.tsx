import React, { useState } from "react";
import "./SizeSelector.css";

const sizes = ["XS", "S", "M", "L", "XL"];

interface SizeSelectorProps {
  onChange?: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ onChange }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    if (onChange) {
      onChange(size);
    }
  };

  return (
    <div className="size-selector">
      {sizes.map((size) => (
        <label key={size} className={`size-box ${selectedSize === size ? "selected" : ""}`}>
          <input
            type="radio"
            name="size"
            value={size}
            checked={selectedSize === size}
            onChange={() => handleSizeChange(size)}
          />
          {size}
        </label>
      ))}
    </div>
  );
};

export default SizeSelector;
