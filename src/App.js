import './App.scss';
// import Map from './views/Map';
import Layout from './components/Layout';
import Categories from './views/Categories';
import Description from './views/Description';
import MapDespordadas from './views/Map';

function App() {
  return (
    <div className="App">
      <Layout>
        <Categories className="sections"/>
        <Description className="sections"/>
        <MapDespordadas className="sections"/>
      </Layout>
    </div>
  );
}

export default App;
