export async function registerUser({
    name,
    telephone,
    email,
    password,
    role,
  }: {
    name: string;
    telephone: string;
    email: string;
    password: string;
    role: 'user' | 'admin';
  }) {
    try {
      const res = await fetch('https://backend-bogos.vercel.app/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, telephone, email, password, role }),
      });
  
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.msg || 'Registration failed');
      }
  
      return { success: true, data };
    } catch (err: any) {
      return { success: false, error: err.message || 'Something went wrong' };
    }
  }