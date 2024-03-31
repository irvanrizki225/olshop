import type { Metadata } from 'next'
import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  //meta layout
  const meta: Metadata = {
    title: 'Login',
    description: 'Login Page',
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {children}
    </div>
  );
}

