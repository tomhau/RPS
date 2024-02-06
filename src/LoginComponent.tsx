import { useState } from 'react';

const VALID_USERNAMES = ['User1', 'User2', 'User3']; // Define valid usernames

function LoginComponent() {
    const [username, setUsername] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    function handleUsernameChange(e:any) {
        setUsername(e.target.value);
    }

    function validateLogin() {
        if (VALID_USERNAMES.includes(username)) {
            setLoginMessage('Login successful!');
        } else {
            setLoginMessage('Invalid username. Please try again.');
        }
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        validateLogin();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <button type="submit">Submit</button>
            </form>
            {loginMessage && <div>{loginMessage}</div>}
        </div>
    );
}

export default LoginComponent;
