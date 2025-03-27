import Navbar from "@/layout/Navbar";
import Sidebar from "@/layout/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen flex flex-col">
            {/* Navbar */}
            <nav>
                <Navbar/>
            </nav>
            
            {/* Sidebar */}
            <div className="flex flex-1">
                <aside className="">
                    <Sidebar/>
                </aside>
            
                <main className="flex-1 p-4">{children}</main>
            </div>
        </div>
    )
}