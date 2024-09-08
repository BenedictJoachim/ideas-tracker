import { useState } from "react";
import { useUser } from "../lib/context/user";

export function Login() {
  const user = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="flex flex-col mx-auto w-96 mt-3">
      <h1 className="text-xl text-[#A4BF9D]">Login or register</h1>
      <form className="flex flex-col space-y-8 mt-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="py-1 px-2"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="py-1 px-2"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="flex space-x-4">
          <button
            className="button rounded-full px-4 py-1 border border-[#A4BF9D] text-[#A4BF9D]"
            type="button"
            onClick={() => user.login(email, password)}
          >
            Login
          </button>
          <button
            className="button rounded-full px-4 py-1 bg-[#A4BF9D] text-[#0C3D48]"
            type="button"
            onClick={() => user.register(email, password)}
          >
            Register
          </button>
        </div>
      </form>
    </section>
  );
}
