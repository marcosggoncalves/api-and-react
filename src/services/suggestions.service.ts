import ISuggestion from "../types/suggestion.type";
import http from "../utils/http";

class SuggestionsService {
    async findSuggestion(suggestion: string) {
        return await http.get<Array<ISuggestion>>(`/suggestions/${suggestion}`);
    }
}

export default new SuggestionsService();