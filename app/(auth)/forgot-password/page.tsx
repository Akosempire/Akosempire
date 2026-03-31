export default function ForgotPasswordPage() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="card w-full max-w-md p-6">
        <h1 className="mb-2 text-xl font-semibold">Forgot Password</h1>
        <p className="mb-4 text-sm text-slate-600">Enter your email to receive reset instructions.</p>
        <input className="input" placeholder="Email" />
      </div>
    </div>
  );
}
