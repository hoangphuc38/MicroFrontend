import { useState } from "react";
import "../components/dropdownMenu.css"; // Import CSS

interface DropdownMenuProps {
  onChange: (option: string) => void;
}

export default function DropdownMenu({ onChange }: DropdownMenuProps) {
  const [selected, setSelected] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["All", "Best Seller", "Men", "Women"];

  return (
    <div className="dropdown">
      {/* Button chính */}
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        <span>{selected}</span>
        <span className="chevron-down">▼</span>
      </button>

      {/* Danh sách lựa chọn */}
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              key={option}
              className="dropdown-item"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
                onChange(option); // Gửi giá trị về Sport.tsx
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
