import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { UserProvider, useUser } from "./lib/context/user";
import { IdeasProvider } from "./lib/context/ideas";

function App() {
  const isLoginPage = window.location.pathname === "/login";

  return (
    <div>
      <UserProvider>
        <IdeasProvider>
            <Navbar /> {/* Add the navbar before page content */}
            <main>{isLoginPage ? <Login /> : <Home />}</main>
        </IdeasProvider>
      </UserProvider>
    </div>
  );
}

function Navbar() {
  const user = useUser();

  return (
    <nav className="flex justify-between items-center border-b border-[#A4BF9D] p-4">
      <a href="/"
        className="text-3xl font-bold text-[#A4BF9D]"
      >Idea tracker</a>
      <div>
        {user.current ? (
          <>
            <span className="mr-4 text-lg text-[#A4BF9D]">{user.current.email}</span>
            <button
             type="button"
             className="bg-[#FA2A59] py-2 px-2"
             onClick={() => user.logout()}>
              Logout
            </button>
          </>
        ) : (
          <a href="/login" className="mr-4 text-lg text-[#A4BF9D]">Login</a>
        )}
      </div>
    </nav>
  );
}

export default App;
