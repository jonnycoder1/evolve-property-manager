import { nunito } from "@/app/layout";

export default function Navbar() {
    return (
        <div className="flex justify-between mb-6">
            <h1 className={`${nunito.className} text-primary font-medium text-4xl`}>Evolve Property Manager</h1>
            <div>
                <form action="/auth/signout" method="post">
                    <button className="bg-accent hover:bg-secondary text-white font-semibold py-2 px-4 rounded-full" type="submit">Sign out</button>
                </form>
            </div>
        </div>
    );
}
