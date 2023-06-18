import logo from './logo.svg';
import './App.css';

import {useSelector,useDispatch} from 'react-redux';
import {getAllData} from './features/gitUserSlice';

function App() {
  const dispatch = useDispatch();
  const {users,loading,error} = useSelector((state)=>{ return state.app });
  console.log(users);
  return (
    <>
      <div className='bg-gray-700 p-5 text-center'>
        <h5 className="text-3xl font-bold text-white hover:text-green-700">Hi Kush Kumar Soni</h5> 
      </div>
      <div className='flex items-center justify-center'>     
        <div className='text-center'>
          <button className='mt-3 mb-3 mx-3 hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm' onClick={()=>{dispatch(getAllData())}}>Get User</button>   
          <table className='table-auto border-collapse border border-slate-400'>
            <thead className='border border-slate-300'>
              <tr>
                <th>Login</th>
                <th>Node Id</th>
                <th>Avator</th>
              </tr>
            </thead>
            <tbody>
              {
                loading ? <h2>Loading...</h2> : error !=null ? <h2>{error}</h2> :
                !loading && users.map((item,index)=>(
                  <tr key={index}>
                    <td key={item.id}>{item.login}</td>
                    <td>{item.node_id}</td>
                    <td><img src={item.avatar_url} height="50" width="50" /></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
