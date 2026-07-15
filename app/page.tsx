import Content from "./components/Content/Content";
import Profile from "./components/Profile/Profile";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="grid grid-cols-12 gap-6 p-4 border h-screen w-screen items-center ">
        <div className="border rounded-2xl ring-2 shadow-[0_0_10px_#a855f7,0_0_20px_#a855f7,0_0_40px_#a855f7] col-span-3 col-start-2 h-full p-4">
          <Profile />
        </div>

        <div className="border col-span-7 h-full p-4">
          <Content />
        </div>
      </main>
    </div>
  );
}
