
import { createRoot } from 'react-dom/client';
import Greeting from './components/greeting';

const el = document.getElementById('app');
const root = createRoot(el);

root.render(<Greeting />);
