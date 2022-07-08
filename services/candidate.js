import axios from "axios";
import { getValueFor } from "../screens/utils/helpers";
import { BASE_URL } from "./common";

//candidate integration service

class CandidateService {
  constructor() {
    let token = null;

    getValueFor("token").then((value) => {
      token = value;
      axios.defaults.headers.common["Authorization"] = token;
    });
  }
  async getCandidates() {
    return await axios.get(`${BASE_URL}/candidates`);
  }
  async getCandidate(id) {
    return await axios.get(`${BASE_URL}/candidates/${id}`);
  }
  async createCandidate(candidate) {
    return await axios.post(`${BASE_URL}/candidates`, candidate);
  }
  async updateCandidate(id, candidate) {
    return await axios.put(`${BASE_URL}/candidates/${id}`, candidate);
  }
  async deleteCandidate(id) {
    return await axios.delete(`${BASE_URL}/candidates/${id}`);
  }
  async getCandidatesByPoll(pollId) {
    return await axios.get(`${BASE_URL}/candidates/poll/${pollId}`);
  }
}

export const candidateService = new CandidateService();
