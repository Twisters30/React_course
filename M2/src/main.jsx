import ReactDOM from 'react-dom/client';
import CardList from './components/product/card-list/CardList.jsx';

import { products } from './products';

import './main.css';

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(<CardList products={products} />)
