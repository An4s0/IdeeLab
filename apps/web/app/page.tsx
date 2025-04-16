import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
        <ThemeImage
          srcLight="/images/next.svg"
          srcDark="/images/next-dark.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
        />
        
      </div>
    </main>
  );
}
