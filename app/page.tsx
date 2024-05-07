"use client";

export default function Home() {
  async function sendNotification() {
    const response = await fetch("/api/notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Hello, World!" }),
    });

    console.log(await response.json());
  }

  return (
    <section className="flex items-center justify-center min-h-screen">
      <button
        onClick={sendNotification}
        className="p-3 px-6 text-zinc-950 bg-zinc-200 rounded-md transition-all duration-300 active:scale-95"
      >
        SEND
      </button>
    </section>
  );
}
