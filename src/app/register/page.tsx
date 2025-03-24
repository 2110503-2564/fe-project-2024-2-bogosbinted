'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const router = useRouter();
  
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [error, setError] = useState('');
  
    const handleRegister = async (e: React.FormEvent) => {
      e.preventDefault();
      setError('');
  
      try {
        const res = await fetch('https://backend-bogos.vercel.app/api/v1/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            telephone,
            email,
            password,
            role: isAdmin ? 'admin' : 'user',
          }),
        });
  
        const data = await res.json();
  
        if (!res.ok || !data.success) {
          setError(data.msg || 'Registration failed');
          return;
        }
  
        router.push('/api/auth/signin');
      } catch (err) {
        console.error(err);
        setError('Something went wrong');
      }
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <form
          onSubmit={handleRegister}
          className="w-full max-w-sm bg-white p-6 rounded shadow space-y-4"
        >
          <h1 className="text-2xl font-bold text-center">Register</h1>
  
          {error && <p className="text-red-500 text-sm">{error}</p>}
  
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded"
          />
  
          <input
            type="text"
            placeholder="Telephone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded"
          />
  
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded"
          />
  
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded"
          />
  
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
            <span>Register as Admin</span>
          </label>
  
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
  
          <p className="text-sm text-center mt-2">
            Already have an account?{' '}
            <span
              onClick={() => router.push('/api/auth/signin')}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    );
  }