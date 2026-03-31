import { BrandBlock } from "@/src/components";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-white px-4">
      <div className="w-full max-w-md space-y-6 rounded-xl border border-border bg-white p-8 shadow-sm">
        <BrandBlock />
        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input className="input" type="email" placeholder="operator@niso.local" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Password</label>
            <input className="input" type="password" />
          </div>
          <button className="btn btn-primary w-full" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
