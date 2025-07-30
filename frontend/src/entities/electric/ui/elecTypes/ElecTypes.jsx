import React, { useRef } from "react";
import { useElecTypes } from "../../helpers/ElecHelpers";
import { Types } from "entities/global/ui/Types";

export const ElecTypes = () => {
  const type = useElecTypes();
  const vidRef = useRef(null);

  return (
    <>
      <Types data={type} ref={vidRef} />
    </>
  );
};
