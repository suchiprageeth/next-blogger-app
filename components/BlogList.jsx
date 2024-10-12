import BlogItem from "./BlogItem";
import { blog_data } from "@/assets/assets";

const BlogList = () => {
  return (
    <div>
      <div className="flex justify-center gap-6 my-10 ">
        <button className="bg-black text-white py-1 px-4 rounded-sm">
          All
        </button>
        <button>Technology</button>
        <button>Startup</button>
        <button>Life Style</button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blog_data.map((bd, index) => {
          return (
            <BlogItem
              key={index}
              title={bd.title}
              description={bd.description}
              category={bd.category}
              image={bd.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
