import { useState } from "react";
import "../components/dropdownMenu.css"; // Import CSS

export default function DropdownMenu() {
  const [selected, setSelected] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["All", "Best seller", "Men", "Women"];

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
