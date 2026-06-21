import Navbar from "./components_layout/Navbar";
import Footer from "./components_layout/Footer";
import Preloader from "./components_layout/Preloader";

export default function UsersLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#070709] relative overflow-x-clip">
      
      {/* Dynamic Blue-Whitish Ambient Lighting Background */}
      <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
        {/* Blob 1: Cyan-Blue */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] min-w-[350px] min-h-[350px] rounded-full bg-[#22d3ee]/[0.03] blur-[120px] animate-ambient-glow-1" />
        
        {/* Blob 2: Whitish Blue */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] min-w-[450px] min-h-[450px] rounded-full bg-cyan-200/[0.025] blur-[150px] animate-ambient-glow-2" />
        
        {/* Blob 3: Deep Blue-Cyan */}
        <div className="absolute top-[40%] right-[10%] w-[45vw] h-[45vw] min-w-[300px] min-h-[300px] rounded-full bg-blue-500/[0.015] blur-[100px] animate-ambient-glow-3" />

        {/* Ambient Lightning/Thunder Sheets (Flashes in Blue-Whitish Light) */}
        <div className="absolute top-0 left-[15%] w-[70vw] h-[40vh] bg-gradient-to-b from-[#22d3ee]/[0.08] via-blue-200/[0.01] to-transparent rounded-full blur-[100px] pointer-events-none animate-lightning-1" />
        <div className="absolute top-[20%] right-[5%] w-[60vw] h-[35vh] bg-gradient-to-b from-[#22d3ee]/[0.06] via-indigo-200/[0.01] to-transparent rounded-full blur-[120px] pointer-events-none animate-lightning-2" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Preloader />
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
