const API = 'http://localhost:4000/api/v1';

async function fetchAPI(data, endpoint, method) {

    try {
        const response = await fetch ('${API}/${endpoint}', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const result = await response.json()
        return result;
    }catch(error) {

    }
}