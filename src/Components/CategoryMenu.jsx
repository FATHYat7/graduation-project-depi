import React from "react";
import { FaChevronRight } from "react-icons/fa";

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const CategoryMenu = ({ onSelectCategory }) => {
  return (
    <div className="border-end pe-3">
      <ul className="list-unstyled lh-lg">
        {categories.map((cat, index) => (
          <li
            key={index}
            className="d-flex justify-content-between align-items-center mt-2 category-item"
            style={{ cursor: "pointer" }}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
            {(cat.includes("Fashion") || cat.includes("Sports")) && (
              <FaChevronRight size={12} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
