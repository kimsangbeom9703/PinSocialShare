import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios';
// console.log(import.meta);
// console.log(process.env.NODE_ENV)
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Axios를 사용하여 Express 서버로 GET 요청
        //axios.get('/api/data')
        axios.get('http://127.0.0.1:3000/api')
            .then(response => {
                setData(response.data); // 데이터를 상태에 저장
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            {/* 데이터를 화면에 렌더링 */}
            {data.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
}
export default App
