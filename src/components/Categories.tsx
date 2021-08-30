import React from "react";
import { ICategory } from "../types";
import { useState } from "react";


export function Categories({categories}: {categories: ICategory[]}) {
  const [activeCategory, setCategory] = useState<string>("")

  const setActiveCategory = (cat: string) => {
    setCategory(cat);
  };

  return (
    <div className="categories">
      <div className="container mx-auto text-center">
        <ul className="flex flex-row justify-center categories-list">
          {categories.map(({ name }: ICategory) => (
            <li key={name} onClick={() => setActiveCategory(name)}>
              <button
                className={
                  activeCategory === name
                    ? "px-3 md:px-6 py-3 block active"
                    : "px-3 md:px-6 py-3 block"
                }
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
