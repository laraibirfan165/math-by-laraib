export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold tracking-[-0.02em] text-blue-700 sm:text-2xl">
          Mathematics by Laraib
        </h1>

        <div className="flex gap-6 text-[0.9375rem] font-medium tracking-[-0.01em] text-slate-600">
          <a className="transition-colors hover:text-blue-700" href="#">
            Home
          </a>
          <a className="transition-colors hover:text-blue-700" href="#">
            Practice
          </a>
          <a className="transition-colors hover:text-blue-700" href="#">
            Mock Tests
          </a>
          <a className="transition-colors hover:text-blue-700" href="#">
            Courses
          </a>
          <a className="transition-colors hover:text-blue-700" href="#">
            About
          </a>
        </div>

        <div className="flex gap-3">
          <button className="rounded-lg border px-4 py-2 text-[0.9375rem] font-semibold tracking-[-0.01em] text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
            Login
          </button>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-[0.9375rem] font-semibold tracking-[-0.01em] text-white transition-colors hover:bg-blue-700">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
