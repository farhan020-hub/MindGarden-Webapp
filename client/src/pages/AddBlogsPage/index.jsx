import React,{useState, useContext} from "react";
import { Button, AdminHeading} from "../../components";
import Footer from "../../components/Footer";
import AdminHero from "../../components/AdminHero";
import { useArticles } from "../../context/ArticleContext";
import { UserContext } from "../../context/UserContext";
import Swal from "sweetalert2";


export default function AddBlogsPagePage() {
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [content, setContent] = useState("");
  const { addArticle } = useArticles();
  const { currentUser } = useContext(UserContext);

  const handleSubmit=()=>{

    if(currentUser){
      addArticle(title, imageURL, content, currentUser.id, "draft");

      setTitle("");
      setImageURL("");
      setContent("");
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please Login First",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[173px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[139px]">
          <AdminHero
            className="bg-gradient  flex flex-col items-end justify-start md:pl-10 pl-20 sm:pl-5 pt-20 w-full"
            aboutustext="Add Blogs"
          />
          <div className="flex flex-row justify-center w-full max-w-[1691px]">
            <div className="flex flex-col items-start justify-center w-full pl-[98px] pr-14 gap-3 py-[98px] bg-green-200 rounded-[30px]">
              <AdminHeading
                size="2xl"
                as="h1"
                className="ml-[278px] !font-extrabold"
              >
                Add a Blog Post/ Article
              </AdminHeading>
              <div className="flex flex-col items-start justify-start w-[57%] mb-[30px] ml-[255px] gap-[23px]">
                <div className="flex flex-col items-center justify-start w-[99%] ml-[11px]">
                  <div className="flex flex-row justify-center w-full">
                    <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                      <AdminHeading size="lg" as="h2">
                        Title
                      </AdminHeading>
                      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-black-900 border-solid text-black-900 rounded-[30px] bg-transparent p-5" placeholder="Your title"/>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full mt-[37px]">
                    <div className="flex flex-col items-start justify-start w-full pt-1 gap-[25px]">
                      <AdminHeading size="lg" as="h3">
                        Image Url
                      </AdminHeading>
                      <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} className="w-full border border-black-900 border-solid text-black-900 rounded-[30px] bg-transparent p-5" placeholder="Your image URL"/>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full mt-[19px]">
                    <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                      <AdminHeading size="lg" as="h4">
                        Content
                      </AdminHeading>
                      <textarea type="text" value={content} onChange={(e) => setContent(e.target.value)} className="w-full border border-black-900 border-solid text-black-900 rounded-[30px] bg-transparent p-5 rounded-[30px] h-[371px] p-[25px] text-lg" placeholder="Your content"/>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[182px] text-[22px] text-center sm:text-lg md:text-xl mt-[30px]"
                  shape="round"
                  color="deep_orange_400"
                  size="sm"
                  variant="fill"
                  onClick={() => handleSubmit()}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full">
          <Footer className="flex flex-row justify-center items-center w-full" />
        </footer>
      </div>
    </>
  );
}
