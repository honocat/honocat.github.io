"use client";

import { useState, useEffect } from "react";
import { blogs } from "@/data/blogs";
import Blog, { BlogType } from "@/components/blog";

import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/styles/container";
import { Heading } from "@/components/styles/heading";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";

export default function Blogs(): JSX.Element {
  const [sortOption, setSortOption] = useState("newest");
  const [selectedTag, setSelectedTag] = useState("All");
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect((): void => {
    setIsFirstRender(false);
  }, []);

  const tagCounts = blogs.reduce(
    (
      acc: { [key: string]: number },
      blog: BlogType,
    ): { [key: string]: number } => {
      blog.tags.forEach((tag: string): void => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
      return acc;
    },
    {} as { [key: string]: number },
  );

  tagCounts["All"] = blogs.length;
  const sortedTags = Object.keys(tagCounts).sort(
    (a: string, b: string): number => tagCounts[b] - tagCounts[a],
  );

  const sortedBlogs = [...blogs]
    .filter(
      (blog: BlogType): boolean =>
        selectedTag === "All" || blog.tags.includes(selectedTag),
    )
    .sort((a: BlogType, b: BlogType): number => {
      if (sortOption === "newest") {
        return b.id - a.id;
      } else if (sortOption === "oldest") {
        return a.id - b.id;
      }
      return 0;
    });

  return (
    <Container>
      <div className="flex justify-between">
        <Heading variant="h2">Blogs</Heading>

        <div className="flex space-x-4">
          <Select
            onValueChange={(value: string): void => setSelectedTag(value)}
            defaultValue="All"
          >
            <SelectTrigger className="w-fit bg-gray-50 bg-opacity-50 dark:bg-opacity-10 backdrop-blur-lg">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent className="bg-gray-50">
              <SelectGroup>
                <SelectLabel>Tag</SelectLabel>
                {sortedTags.map(
                  (tag: string): JSX.Element => (
                    <SelectItem key={tag} value={tag}>
                      {tag} ({tagCounts[tag]})
                    </SelectItem>
                  ),
                )}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select
            onValueChange={(value: string): void => setSortOption(value)}
            defaultValue="newest"
          >
            <SelectTrigger className="w-fit bg-gray-50 bg-opacity-50 dark:bg-opacity-10 backdrop-blur-lg">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent className="bg-gray-50">
              <SelectItem value="newest">投稿日（新しい順）</SelectItem>
              <SelectItem value="oldest">投稿日（古い順）</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="my-4 space-y-4">
        <AnimatePresence>
          {sortedBlogs.map(
            (blog: BlogType): JSX.Element => (
              <motion.div
                key={blog.id + sortOption}
                initial={isFirstRender ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Blog
                  id={blog.id}
                  title={blog.title}
                  tags={blog.tags}
                  created_at={blog.created_at}
                  platform={blog.platform}
                  url={blog.url}
                />
              </motion.div>
            ),
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
}
