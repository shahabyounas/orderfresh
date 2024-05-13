export default function LoginLayout({ children }) {
  return (
    <div>
      <nav className="bg-primary-100 fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-5 px-5 text-white">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse font-bold"
          >
            Order Fresh
          </a>
        </div>
      </nav>
      <div className="h-dvh flex flex-col items-center justify-center bg-slate-100">
        {children}
      </div>
    </div>
  );
}
