import { useQuery } from "@tanstack/react-query";
import React from "react";

import { getAllDocumentsService } from "../../services/document.services";

export const DocumentsPage = () => {
  const { data } = useQuery({
    queryKey: ["fetchDocuments"],
    queryFn: () => getAllDocumentsService(),
  });

  return (
    <div>
      {data.map((e) => (
        <ProductComponent key={e.id} />
      ))}
    </div>
  );
};
