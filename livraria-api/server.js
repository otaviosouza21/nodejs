import 'dotenv/config';
import app from './express/src/app.js';

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Servidor escutando');
});
