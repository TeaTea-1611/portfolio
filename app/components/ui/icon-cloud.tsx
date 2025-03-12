"use client";
import { useEffect, useMemo, useState, type JSX } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
  type SimpleIcon,
} from "react-icon-cloud";

interface CloudProps {
  containerProps: {
    style: React.CSSProperties;
  };
  options: {
    reverse: boolean;
    depth: number;
    wheelZoom: boolean;
    imageScale: number;
    activeCursor: string;
    tooltip: string;
    initial: [number, number];
    clickToFront: number;
    tooltipDelay: number;
    outlineColour: string;
    maxSpeed: number;
    minSpeed: number;
    // dragControl: boolean;
  };
}

interface IconCloudProps {
  iconSlugs?: string[];
  imageArray?: string[];
}

interface SimpleIconsData {
  simpleIcons: Record<string, SimpleIcon>;
}

export const cloudProps: CloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (
  icon: SimpleIcon,
  theme: string | undefined,
  imageArray?: string[]
): JSX.Element => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
    },
  });
};

export function IconCloud({
  // Default to an empty array if not provided
  iconSlugs = [],
  imageArray,
}: IconCloudProps): JSX.Element {
  const [data, setData] = useState<SimpleIconsData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (iconSlugs.length > 0) {
      // Check if iconSlugs is not empty
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "dark")
    );
  }, [data, theme]);

  return (
    // @ts-ignore - keeping the ts-ignore comment as it was in the original code
    <Cloud {...cloudProps}>
      <>
        <>{renderedIcons}</>
        {imageArray &&
          imageArray.length > 0 &&
          imageArray.map((image, index) => {
            return (
              <a
                key={index}
                href="#"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  e.preventDefault()
                }
              >
                <img height="42" width="42" alt="A globe" src={image} />
              </a>
            );
          })}
      </>
    </Cloud>
  );
}
