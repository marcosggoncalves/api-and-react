import http from "../utils/http";
import ISuggestion from "../types/suggestion.type";

class SuggestionsService {
    async findSuggestion(suggestion: string) {
        return await http.get<Array<ISuggestion>>(`/suggestions/${suggestion}`);
    }
}

export default new SuggestionsService();