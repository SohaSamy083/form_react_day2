import React, { useState } from 'react';

const PasswordValidator = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validatePassword = () => {
    // Regular expressions to check if the password meets the criteria
    const minLengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;

    return (
      minLengthRegex.test(password) &&
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      symbolRegex.test(password) &&
      numberRegex.test(password)
    );
  };

  return (
    <div>
      <label>
        Password:
        <input 
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button className='btn btn-info m-3' onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide Password' : 'Show Password'}
      </button>
      <div>
        {password && !validatePassword() && (
          <p>Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 symbol, and 1 number.</p>
        )}
      </div>
    </div>
  );
};

export default PasswordValidator;
