import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignupLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const endpoint = type === 'signup' ? 'signup' : 'login';

    try {
      const res = await axios.post(`http://localhost:3000/api/auth/${endpoint}`, {
        email,
        password
      });

      localStorage.setItem('token', res.data.token);
      navigate('/query');
    } catch (err) {
      alert(err.response?.data?.msg || `${type} failed`);
    }
  };

  return (
    <form>
      <h2>Signup / Login</h2>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit" onClick={e => handleSubmit(e, 'signup')}>
        Sign Up
      </button>
      <button type="submit" onClick={e => handleSubmit(e, 'login')}>
        Login
      </button>
    </form>
  );
}



// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function SignupLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e, type) => {
//     e.preventDefault();
//     const endpoint = type === 'signup' ? 'signup' : 'login';

//     try {
//       const res = await axios.post(`http://localhost:3000/api/auth/${endpoint}`, {
//         email,
//         password
//       });

//       localStorage.setItem('token', res.data.token);
//       navigate('/query');
//     } catch (err) {
//       alert(err.response?.data?.msg || `${type} failed`);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-300">
//       <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-6">
//         <h2 className="text-2xl font-bold text-center text-gray-700">Signup / Login</h2>

//         <input
//           type="email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <div className="flex justify-between">
//           <button
//             type="submit"
//             onClick={e => handleSubmit(e, 'signup')}
//             className="w-[48%] bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
//           >
//             Sign Up
//           </button>
//           <button
//             type="submit"
//             onClick={e => handleSubmit(e, 'login')}
//             className="w-[48%] bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }