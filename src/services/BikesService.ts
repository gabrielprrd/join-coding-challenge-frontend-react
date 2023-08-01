import { api } from "./api";

export const BikesService = {
  async getById(id: number) {
    const { data } = await api.get(`bikes/${id}`);
    return data.bike;
  },

  async getAll() {
    const { data } = await api.get(
      `/search?location=berlin&distance=10&stolenness=proximity`
    );
    return data.bikes;
  },

  async getMany(page = 1, query = "") {
    const { data } = await api.get(
      `/search?page=${page}&per_page=10&location=berlin&distance=10&query=${query}&stolenness=proximity`
    );
    return data.bikes;
  },

  async count(query = "") {
    const { data } = await api.get(
      `/search/count?location=berlin&query=${query}&distance=10`
    );
    return data.proximity;
  },
};
