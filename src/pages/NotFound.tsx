import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-black text-white px-4 pt-20">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Page not found</h1>
        <p className="text-gray-300 mb-8">The page you are looking for doesn't exist or has moved.</p>
        <Link to="/" className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
          Back to home
        </Link>
      </div>
    </section>
  )
}
