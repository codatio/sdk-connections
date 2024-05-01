import {
  CodatConnectionsProps,
  initCodatConnections,
} from "@codat/sdk-connections";
import React, { useEffect, useState } from "react";

export const CodatConnections: React.FC<CodatConnectionsProps> = (
  props: CodatConnectionsProps
) => {
  const [componentMount, setComponentMount] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    const target = componentMount;
    if (target && target.children.length === 0) {
      initCodatConnections(target, props);
    }
    // CodatConnections does not support changing props after initialisation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentMount]);

  return (
    <div
      style={{
        // Recommended dimensions
        width: "460px",
        height: "840px",
        maxHeight: "95%",
      }}
      ref={setComponentMount}
    ></div>
  );
};
