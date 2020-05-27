import React, { useState, FunctionComponent, Dispatch, SetStateAction } from "react";

const useDropdown = (
  defaultState: string,
  label: string,
  options: string[]
): [string, FunctionComponent<unknown>, Dispatch<SetStateAction<string>>] => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown: FunctionComponent = () => (
    <label htmlFor={id}>
      {label}
      <select
        data-testid={id}
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={!options.length}
      >
        <option>All</option>
        {options.map((e: string) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
