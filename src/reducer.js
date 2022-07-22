export const LOADING = 'LOADING';
export const DISPLAY_ITEMS = 'DISPLAY_ITEMS';
export const SEARCH = 'SEARCH';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';

export const reducer = (state, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, isLoading: true };
        case DISPLAY_ITEMS:
            return { 
                ...state, 
                location: action.payload.location, 
                weather: action.payload.weather,
                forecast: action.payload.forecast,
                isLoading: false,
            };
        case SEARCH:
            const new_history = [action.payload].concat(state.search_history);
            return { ...state, query: action.payload, search_history: new_history };
        case CLEAR_HISTORY:
            return { ...state, search_history: [] };
        default:
            return state;
    }
}