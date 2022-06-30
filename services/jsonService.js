import { urls } from "../config/config";

import { axiosService } from "./axiosService";

export const jsonService = {
  getUsers: () => axiosService.get(urls.users),
  getUser: (id) => axiosService.get(urls.users + `/${id}`),
  getPosts: () => axiosService.get(urls.posts),
  getPost: (id) => axiosService.get(urls.posts + `/${id}`),
  getComments: (id) => axiosService.get(urls.posts + `/${id}/comments`),
};
