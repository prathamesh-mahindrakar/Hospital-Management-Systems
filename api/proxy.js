export default async function handler(req, res) {
    const backendBaseUrl = 'http://hospitalmanagementsystem-env.eba-ugyf2qab.us-east-1.elasticbeanstalk.com/api/v1';

    const path = req.query.path || '';
    const url = `${backendBaseUrl}/${path}`;

    try {
        const backendRes = await fetch(url, {
            method: req.method,
            headers: {
                'Content-Type': 'application/json',
                ...req.headers,
            },
            body: req.method !== 'GET' ? JSON.stringify(req.body) : null,
        });

        const data = await backendRes.json();
        res.status(backendRes.status).json(data);
    } catch (error) {
        console.error('Proxy Error:', error);
        res.status(500).json({ message: 'Internal Proxy Error', error: error.message });
    }
}
