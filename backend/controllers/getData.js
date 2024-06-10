import { data } from '../sampleData.js';

export const getData = async (req, res) => {
    try {
        return res.status(200).json({ data });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}