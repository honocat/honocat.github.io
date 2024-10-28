import Image from "next/image";
import Link from "next/link";

import { Box } from "@/components/styles/box";
import { Badge } from "@/components/ui/badge";

export interface BlogType {
  id: number;
  title: string;
  tags: string[];
  created_at: string;
  platform: string[];
  url: string[];
}

export default function Blog({
  id,
  title,
  tags,
  created_at,
  platform,
  url,
}: BlogType): JSX.Element {
  return (
    <Box key={id}>
      <div className="space-y-1">
        <div className="font-bold">{title}</div>

        <div className="flex justify-between">
          <div className="space-y-2">
            {tags && (
              <div className="space-x-2">
                {tags.map(
                  (tag: string, index: number): JSX.Element => (
                    <Badge
                      variant="secondary"
                      key={index}
                      className="bg-gray-300 dark:bg-gray-600"
                    >
                      {tag}
                    </Badge>
                  ),
                )}
              </div>
            )}
            <div className="text-sm">投稿日: {created_at}</div>
          </div>
          <div className="flex space-x-4 items-center">
            {platform.map(
              (plat: string, index: number): JSX.Element => (
                <Link href={url[index]} key={index} target="_blank">
                  <div className="flex space-x-2">
                    {plat === "Qiita" && (
                      <Image
                        src="/images/logos/qiita/qiita.png"
                        alt="Qiita"
                        width={35}
                        height={35}
                      />
                    )}
                    {plat === "Zenn" && (
                      <Image
                        src="/images/logos/zenn/zenn.svg"
                        alt="Zenn"
                        width={35}
                        height={35}
                      />
                    )}
                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </Box>
  );
}
