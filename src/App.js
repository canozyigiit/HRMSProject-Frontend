import Dashboard from '../src/layouts/Dashboard';
import './App.css';
import '../src/assets/css/style.css'
import { BackTop } from 'antd';



const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 50,
  backgroundColor: '#bae637',
  color: '#f6ffed',
  textAlign: 'center',

};
function App() {
  return (
    <div>

      <Dashboard />
      <BackTop>
        <div style={style}><span className="flaticon-rocket-launch"></span></div>
      </BackTop>
    </div>
  );
}

export default App;
