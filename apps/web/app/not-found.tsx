export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-32rem)] mt-16 text-center">
      <h1 className="text-2xl font-bold md:text-4xl">404 - Page Not Found</h1>
      <p className="mt-4 text-md text-subtle md:text-lg">
        The page you are looking for does not exist. Please check the URL or
        return to the homepage.
      </p>
    </div>
  );
}
