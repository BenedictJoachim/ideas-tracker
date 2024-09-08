import { useState } from "react";
import { useUser } from "../lib/context/user";
import { useIdeas } from "../lib/context/ideas";

export function Home() {
  const user = useUser();
  const ideas = useIdeas();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex">
      {/* Show the submit form to logged in users. */}
      {user.current ? (
        <section className="mx-auto border border-[#A4BF9D] py-2 px-4 mt-3 rounded-md">
          <h2 className="text-xl text-[#A4BF9D]">Submit Idea</h2>
          <form className="flex flex-col w-96 space-y-8 mt-3">
            <input
              type="text"
              placeholder="Title"
              value={title}
              className="border px-2 py-2"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <textarea
              placeholder="Description"
              value={description}
              className="border px-2 py-2"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <button
              type="button"
              className="bg-blue-500 rounded-md text-white py-2"
              onClick={() =>
                ideas.add({ userId: user.current.$id, title, description })
              }
            >
              Submit
            </button>
          </form>
        </section>
      ) : (
        <section className="mx-auto w-96 py-2 px-4 mt-3 rounded-md">
          <p className="text-xl text-[#A4BF9D]">Please login to submit an idea.</p>
        </section>
      )}
      <section className="mx-auto w-1/2 py-2 px-4 mt-3 rounded-md">
        <h2 className="text-2xl text-[#A4BF9D] font-bold">Latest Ideas</h2>
        <ul className="pl-4 mt-3 text-[#A4BF9D]">
          {ideas.current.map((idea) => (
            <li key={idea.$id}>
              <strong>{idea.title}</strong>
              <p>{idea.description}</p>
              {/* Show the remove button to idea owner. */}
              {user.current && user.current.$id === idea.userId && (
                <button
                 type="button"
                 className="bg-[#DF4671] text-white rounded-md py-1 px-3"
                 onClick={() => ideas.remove(idea.$id)}>
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
