export default async function epicStoreApi() {
    try {
        const apiUrl = import.meta.env.VITE_API_URI;


    const response = await fetch(`${apiUrl}freeGamesPromotions?locale=en-US&country=IN&allowCountries=IN`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching Epic Games data:', error);
        // Return a more user-friendly error message
        throw new Error('Unable to fetch game data. Please try again later.');
    }
}
