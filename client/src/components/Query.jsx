import { useState } from 'react';
import axios from 'axios';

export default function Query() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleQuery = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:3000/api/auth/query', { message }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      setResponse(res.data.reply || res.data.msg);
    } catch (err) {
      alert(err.response?.data?.msg || 'Query failed');
    }
  };

  return (
    <form onSubmit={handleQuery}>
      <h2>Ask a query</h2>
      <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Type your message" />
      <button type="submit">Send</button>
      <p><strong>Response:</strong> {response}</p>
    </form>
  );
}
