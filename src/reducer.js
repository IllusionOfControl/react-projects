export const LOADING = 'LOADING';
export const DISPLAY_ITEMS = 'DISPLAY_ITEMS'
export const SEARCH = 'SEARCH'

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
            return { ...state, query: action.payload };
        default:
            return state;
    }
}