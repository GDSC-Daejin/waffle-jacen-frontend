import Layout from './layout';
import Navigation from './components/common/Navigation';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1 0 auto',
        minHeight: '100vh',
      }}
    >
      <Navigation />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '1240px',
          minHeight: '100%',
          margin: '0 auto',
        }}
      >
        <Sidebar />
        <Layout />
      </div>
    </div>
  );
}

export default App;
