// I usually use absolute paths
import { api } from "../api";

export const getAllDocumentsService = async () => {
  const { data } = await api.get("/documents");

  if (data) return data;
};
