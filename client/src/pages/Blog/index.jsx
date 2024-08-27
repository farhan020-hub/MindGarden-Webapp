import React from "react";

import { Img, Text } from "components";
import HeroSection from "components/HeroSection";
import Footer from "components/Footer";
import { useArticles } from "../../context/ArticleContext";
import BlogCard from "../../components/BlogCard";

const BlogPage = () => {
  const {articles} = useArticles();
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-manrope items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <HeroSection
            className="bg-gradient  flex flex-col items-end justify-start md:pl-10 pl-20 sm:pl-5 pt-20 w-full"
            aboutustext="Blog"
          />
        </div>
        <div className="h-[2006px] md:h-[2363px] sm:h-[4714px] mt-[55px] md:px-5 relative w-[90%] md:w-full">
          <Img
            className="absolute bottom-[0] h-[1553px] left-[0] object-cover"
            src="images/img_group7.png"
            alt="groupSeven"
          />
          <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[93%]">
            <div className="flex flex-col md:gap-10 gap-[75px] items-center justify-start w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-auto sm:w-full">
                <Text
                  className="text-[22px] text-black-900 sm:text-lg md:text-xl w-auto"
                  size="txtManropeBold22"
                >
                  Blog
                </Text>
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[54px] text-black-900 text-center w-auto"
                  size="txtManropeBold54"
                >
                  Our Blogs
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:gap-5 gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {/* Blogs should go here */}
                  {
                    articles.map((article) => (
                      <BlogCard
                      key={article.id}
                      blogTitle={article.title}
                      blogImage={article.imageURL}
                      blogContent={article.content}
                      />
                    ))
                  }
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end mt-[166px] md:px-10 sm:px-5 px-[122px] w-full">
          
        </div>
        <div className="flex flex-col items-center mt-[155px] w-full">
          <Footer className="flex items-center justify-center w-full" />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
