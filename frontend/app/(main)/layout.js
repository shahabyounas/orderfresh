import Navbar from "./navbar";


export default function HomeLayout({ children }) {
  return (
    <div>
          <Navbar />
          {children}
    </div>
  );
}
