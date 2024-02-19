import { nunito } from "@/app/layout";
import Amenities from "@/app/ui/Amenities";

export default function Home() {
  return (
    <main className="flex flex-row h-screen py-8 px-4 sm:px-6">
        <div className="w-full ">
            <h1 className={`${nunito.className} text-primary font-semibold text-3xl`}>Evolve Property Manager</h1>
            <br/>
            <Amenities />
        </div>
    </main>
  );
}
