"use client";

import React from "react";
import CreatableSelect from "react-select/creatable";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button"; // Adjust path as needed
import { customStyles } from "@/utils/customStyles"; // Adjust path as needed

type Framework = {
  value: string;
  label: string;
};

const FRAMEWORKS = [
  { value: "tarot Card Reading", label: "Tarot Card Reading" },
  { value: "travel Guide", label: "Travel Guide" },
  { value: "diet Plan", label: "Diet Plan" },
  { value: "e-Sports Guide", label: "E-Sports Guide" },
  { value: "food Recipes", label: "Food Recipes" },
  { value: "digital Art", label: "Digital Art" },
] satisfies Framework[];

export function FancyMultiSelect() {
  const [selected, setSelected] = React.useState<Framework[]>(FRAMEWORKS.slice(1, 2));

  const handleChange = (newValue: Framework[] | null) => {
    setSelected(newValue || []);
  };

  console.log(selected);

  return (
    <div className="relative w-full ">
      <div className="flex flex-col gap-2 my-3">
        <CreatableSelect
          isMulti
          value={selected}
          onChange={handleChange}
          options={FRAMEWORKS}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Select Category..."
          isClearable
          formatCreateLabel={(inputValue: any) => `Create "${inputValue}"`}
          styles={customStyles}
        />
        <div className="flex flex-wrap gap-1 my-3">
          {selected.map((framework) => (
            <Badge key={framework.value} variant="default">
              {framework.label}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
