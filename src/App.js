import Header from './components/Header';
import OrderTable from './components/OrderTable';
import Search from './components/Search';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-5/6 bg-orange-100 shadow-lg rounded-lg overflow-hidden">
        <Sidebar />

        <div className="w-5/6 p-4">
          <Header />

          <Search />

          <OrderTable />
        </div>
      </div>
    </div>
  );
};

export default App;
