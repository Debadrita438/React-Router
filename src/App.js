import { Route, Switch, Redirect } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

const App = () => {
    return (
        <div>
            <MainHeader />
            <main>
                <Switch>
                    <Route exact path='/'>
                        <Redirect to='/welcome' />
                    </Route>
                    <Route path='/welcome'>
                        <Welcome />
                    </Route>
                    <Route exact path='/products'>
                        <Products />
                    </Route>
                    <Route path='/products/:productId'>
                        <ProductDetails />
                    </Route>
                </Switch>
            </main>
        </div>
    );
};

export default App;
