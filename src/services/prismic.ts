import Prismic from "@prismicio/client";
import { DefaultClient } from "@prismicio/client/types/client";

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(
    "https://projeto-do-zero-pdr3392.prismic.io/api/v2",
    {
      req,
      accessToken: process.env.PRISMIC_ACCESS_KEY,
    }
  );

  return prismic;
}
