import express from 'express';
import itemsRoute from './routers/items'; 
import cors from 'cors';

const app = express();
app.use(cors());
const port = 3000;

app.use(express.json()); 
app.use('/api/items', itemsRoute);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
