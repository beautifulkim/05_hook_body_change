import { useState } from 'react';
import './App.css';

function App() {
  //userState로 선언된 변수의 값이 달라지면
  //App 컴포넌트 재랜더링한다.
  //open 초기값은 false로 설정.
  const [open, setToggle] = useState(false);
  console.log( open );

  return (
    <div className="App">
      {/* 
        버튼 클릭시 count의 값을 1로 변경해라 
        count = count +1; count++
      */}
      <button className='btn' onClick={ () => { setToggle( !open ); } }>
        { open ? '열기' : '닫기' }
      </button>
      <ul className={ open ? 'list_open' : 'list_close' }>
        <li>테스트</li>
        <li>테스트</li>
        <li>테스트</li>
      </ul>
    </div>
  );
}

export default App;