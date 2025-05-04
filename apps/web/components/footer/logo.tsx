import Image from "next/image";

export default function LogoSection() {
  return (
    <div className="w-full md:w-1/4">
      <div className="flex items-center space-x-2 mb-6">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={40}
          height={40}
          className="h-10 w-10"
        />
        <h1 className="text-xl font-bold">IdeeLab</h1>
      </div>
      <p className="text-sm text-subtle leading-relaxed">
        Your go-to platform for daily coding challenges, consistent practice,
        and developer growth.
      </p>
    </div>
  );
}
