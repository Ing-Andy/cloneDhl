import React, { useState } from "react";

export default function CheckBox({ id = "id" }) {
  const [value, setValue] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={value}
        onChange={(e) => setValue(e.target.checked)}
        className={`w-6 h-6 rounded-md cursor-pointer transition-all bg-blue-300 `}
      />
    </div>
  );
}
