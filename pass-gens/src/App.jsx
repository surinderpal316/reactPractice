import React, { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(9);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [mixAllowed,setMixAllowed] =useState(false);
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '1234567890';
    if (charAllowed) str += '!@#$%^&*_+?';
    if (mixAllowed) str+= "1234567890qwertyuiopasdfghjklzxcbvnm,QWERTYUIOPASDFGHJKLZXCVBNM,.123456790-/*-";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed,mixAllowed ,charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, 999);
      document.execCommand('copy');
      setIsCopied(true);

      // Reset the copy status after 3 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed,mixAllowed ,charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-7 py-5 my-6 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3 w-full">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-4 px-2"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-2 shrink-0"
          >
            Copy
          </button>
        </div>
        {isCopied && <p className="text-green-500 text-sm">Password copied to clipboard!</p>}
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={9}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={mixAllowed}
            id="characterInput"
            onChange={()=> {
              setMixAllowed ((prev)=> !prev);
            }}
          
            />
            <label htmlFor="mixInput">MixChracters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
