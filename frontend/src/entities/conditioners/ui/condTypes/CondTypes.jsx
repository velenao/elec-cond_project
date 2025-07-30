import React, { useRef } from "react";
import { useCondTypes } from "../../helpers/CondHelpers";
import { Types } from "entities/global/ui/Types";

export const CondTypes = () => {
  const type = useCondTypes();
  const vidRef = useRef(null);

  return (
    <>
      <Types data={type} ref={vidRef} />
    </>
  );
};
