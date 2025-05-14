import Header from "@/components/header";
import Footer from "@/components/footer";

export default function VerifyEmailPage() {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)] text-center max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Verify Your Email</h1>
        <p className="mt-4 text-md text-subtle">
          Please check your email for a verification link. If you didn&apos;t
          receive an email, please check your spam folder or request a new
          verification link.
        </p>
        <button className="cursor-pointer text-white bg-primary text-white rounded-md hover:bg-primary/50 mt-6 px-4 py-2">
          Resend Verification Email
        </button>
      </div>
      <Footer />
    </main>
  );
}
