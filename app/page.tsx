import AuthForm from './auth-form'
import { nunito } from "@/app/layout";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen py-8 px-4 sm:px-6">
        <div className="">
            <h1 className={`${nunito.className} text-primary font-semibold text-3xl`}>Evolve Property Manager</h1>
            <br/>
            <h2 className={`${nunito.className} text-primary text-2xl`}>Login</h2>

            <div className="">
                <AuthForm />
            </div>
            <div>No password required. We will email you a one-time link. <br/><br/>
                Future logins will require sending another magic link, but <br/>
                your data will still be here associated with your email address.
            </div>
        </div>
    </main>
  );
}
