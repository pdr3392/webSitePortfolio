import useNextBlurhash from "use-next-blurhash";

interface BlurHashProps {
  hash: string;
}

export default function blurHash({ hash }: BlurHashProps) {
  const [blurData] = useNextBlurhash(hash);

  return blurData;
}
