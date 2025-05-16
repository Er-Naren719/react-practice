import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hook to store the password
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let passKey = '';
    let stringKey = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) stringKey += '0123456789';
    if (includeCharacters) stringKey += '!@#$%^&*()_+[]{}|;:,.<>?';
    for (let i = 0; i < passwordLength; i++) {
      passKey += stringKey.charAt(Math.floor(Math.random() * stringKey.length));
    }
    setPassword(passKey);
  }, [passwordLength, includeNumbers, includeCharacters, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [passwordLength, includeNumbers, includeCharacters, generatePassword]);

  const copyPasswordHandler = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="f-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-800">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className='outline-none w-full px-3 py-1 bg-white text-gray-800 rounded-tl-lg rounded-bl-lg'
            placeholder='Generated Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordHandler}
            className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0 rounded-tr-lg rounded-br-lg cursor-pointer active:bg-blue-800'
          >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={passwordLength}
              className='cursor-pointer'
              onChange={(e) => setPasswordLength(e.target.value)}
            />
            <label>Length: {passwordLength}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              id="includeNumbers"
              checked={includeNumbers}
              onChange={() => { setIncludeNumbers((prev) => !prev) }}
            />
            <label htmlFor="includeNumbers">Include Numbers</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              id="includeCharacters"
              checked={includeCharacters}
              onChange={() => { setIncludeCharacters((prev) => !prev) }}
            />
            <label htmlFor="includeCharacters">Include Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
