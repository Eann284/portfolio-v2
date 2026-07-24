import Content from "./components/Content/Content";
import Profile from "./components/Profile/Profile";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <main className="
      grid 
        grid-cols-1           /* Mobile: 1 column */
        lg:grid-cols-12       /* Desktop: 12 columns */
        gap-6 p-4 
        w-full max-w-7xl      /* Constrain width */
        mx-auto               /* Center */
        items-start
                 /* Align to top */

        
      ">
        
        <div className="
         rounded-2xl 
          ring-2 ring-green-400 
          shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e] 
          p-4
          lg:col-span-3       
          lg:col-start-2      
          col-span-1        
          h-auto lg:h-full
        ">
          <Profile />
        </div>

        <div className="rounded-2xl 
          ring-2 ring-green-400 
          shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e] 
          p-4
          lg:col-span-7        
          col-span-1           
          h-full lg:h-full">
          <Content />
        </div>
      </main>
    </div>
  );
}
