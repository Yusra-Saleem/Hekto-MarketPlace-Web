import Link from "next/link"
import { BlogSidebar } from "@/components/blog-sidebar"

export default function SingleBlogPage() {
  return (
    <div>
      {/* Page Header */}
      <div className=" h-[286px] bg-[#F6F5FF] flex items-center py-16">
        <div className="container md:w-[1170px] mx-auto px-4">
          <h1 className="text-3xl text-center md:text-left font-bold mb-4">Single Blog</h1>
          <div className="flex justify-center md:justify-start items-center gap-2 text-sm">
            <Link href="/">Home</Link>
            <span>•</span>
            <Link href="/pages">Pages</Link>
            <span>•</span>
            <span className="text-[#FB2E86]">Single Blog</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <article className="space-y-6">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt=""
                className="w-full rounded-lg"
              />
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>Surf Auxion</span>
                <span>Aug 09 2020</span>
              </div>
              <h1 className="text-3xl font-bold text-[#151875]">
                Mauris at orci non vulputate diam tincidunt nec.
              </h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt=""
                  className="w-full rounded-lg"
                />
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt=""
                  className="w-full rounded-lg"
                />
              </div>

              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
              </p>

              <div className="grid grid-cols-4 gap-4">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt=""
                  className="w-full aspect-square rounded-lg"
                />
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt=""
                  className="w-full aspect-square rounded-lg"
                />
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt=""
                  className="w-full aspect-square rounded-lg"
                />
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt=""
                  className="w-full aspect-square rounded-lg"
                />
              </div>

              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
              </p>

              {/* Comments */}
              <div className="space-y-6 pt-8">
                <h2 className="text-2xl font-bold">Comments</h2>
                {[1, 2].map((comment) => (
                  <div key={comment} className="flex gap-4">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt=""
                      className="w-20 h-20 rounded-full"
                    />
                    <div>
                      <h3 className="font-bold">John Doe</h3>
                      <p className="text-sm text-gray-500">Aug 09 2020</p>
                      <p className="mt-2 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Form */}
              <form className="space-y-4 pt-8">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="p-2 border rounded"
                  />
                  <input
                    type="email"
                    placeholder="Write Your Email*"
                    className="p-2 border rounded"
                  />
                </div>
                <textarea
                  placeholder="Write your comment*"
                  rows={6}
                  className="w-full p-2 border rounded"
                ></textarea>
                <button className="px-8 py-2 bg-[#FB2E86] text-white rounded">
                  Post Comment
                </button>
              </form>
            </article>
          </div>

          {/* Sidebar */}
          <aside>
            <BlogSidebar />
          </aside>
        </div>
      </div>
    </div>
  )
}

