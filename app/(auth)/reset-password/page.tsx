export default function ResetPasswordPage() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="card w-full max-w-md p-6">
        <h1 className="mb-4 text-xl font-semibold">Reset Password</h1>
        <div className="space-y-3">
          <input className="input" placeholder="New password" type="password" />
          <input className="input" placeholder="Confirm password" type="password" />
          <button className="btn btn-primary w-full">Update password</button>
        </div>
      </div>
    </div>
  );
}
