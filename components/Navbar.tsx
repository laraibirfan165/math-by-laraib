export default function Navbar() {
    return (
      <nav className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
  
          <h1 className="text-2xl font-bold text-blue-700">
            Mathematics by Laraib
          </h1>
  
          <div className="flex gap-6">
            <a href="#">Home</a>
            <a href="#">Practice</a>
            <a href="#">Mock Tests</a>
            <a href="#">Courses</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
          </div>
  
          <div className="flex gap-3">
            <button className="px-4 py-2 border rounded-lg">
              Login
            </button>
  
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Register
            </button>
          </div>
  
        </div>
      </nav>
    );
  }