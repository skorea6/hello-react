import React, {useState} from 'react';

const Counter = () => {
    // 동적값을 변동시킬때 useState 사용! (상태)
    const [num, setNumber] = useState(0); // num 기본값이 0 , setNumber 는 num을 세팅하는 함수 (set함수를 써야지만 동적으로 반영됨)

    const increase = () => {
        setNumber(num + 1);
    }

    const decrease = () => {
        setNumber(num - 1);
    }

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    );
}

export default Counter;