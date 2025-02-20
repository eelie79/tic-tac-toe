import { useState } from "react";

const Square = (props) => {
  // const [value, setValue] = useState(null);

  return (
    <button className="square" onClick={props.onClickEvent}>
      {props.value}
    </button>
  );
};

export { Square };
