import React, { FC } from "react";
import Head from "next/head";
import useTheme from "../../util/hooks/useTheme";

interface Props {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  url: string;
}

const HeadDocument: FC<Props> = ({
  title,
  description,
  keywords,
  ogImage,
  url,
}) => {
  const theme = useTheme();
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description || title} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon/favicon-16x16.png"
      />
      <link rel="canonical" href={url} />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content={theme.palette.background.default} />
      <meta charSet="utf-8" />
      <meta name="og:image" content="" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="keywords"
        content={[
          "construcciones",
          "remodelación",
          "eficios",
          "plomeria",
          "remodelacion de interiores",
          ...(keywords || ""),
        ].join(",")}
      ></meta>
      <meta property="og:title" content={title}></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:image" content={ogImage || ""}></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content={url}></meta>
    </Head>
  );
};
export default HeadDocument;
