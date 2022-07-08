//poll integration service
import { getValueFor } from "../screens/utils/helpers";
import { BASE_URL } from "./common";

class PollService {
  constructor() {
    let token = null;

    getValueFor("token").then((value) => {
      token = value;
      axios.defaults.headers.common["Authorization"] = token;
    });
  }

  async getPolls() {
    return await axios.get(`${BASE_URL}/polls`);
  }
  async getPoll(id) {
    return await axios.get(`${BASE_URL}/polls/${id}`);
  }
  async createPoll(poll) {
    return await axios.post(`${BASE_URL}/polls`, poll);
  }

  async voteForCandidate(userId, pollId, candidateId) {
    return await axios.post(`${BASE_URL}/polls/candidate/vote`, {
      userId,
      pollId,
      candidateId,
    });
  }
}

export const pollService = new PollService();