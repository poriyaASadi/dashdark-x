import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex w-full flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      {/* Title */}
      <h1 className="text-9xl font-extrabold tracking-widest text-red-500">404</h1>

      {/* Subtitle */}
      <div className="mt-4 text-center">
        <p className="text-2xl md:text-3xl font-medium">Oops! Page not found.</p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">The page you are looking for doesn't exist.</p>
      </div>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
}