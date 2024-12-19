import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function BlogSidebar() {
  return (
    <div className="space-y-8 md:w-[250px]">
      {/* Search */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-[#151875]">Search</h3>
        <Input type="search" placeholder="Search..." className="border border-gray-400 text-gray-400"/>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold text-[#151875] mb-4">Categories</h3>
        <div className="space-y-2 grid grid-cols-2 justify-between">
          {[
            { name: "Women", count: 21 },
            { name: "Men", count: 17 },
            { name: "Accessories", count: 15 },
            { name: "Kids", count: 13 },
            { name: "Women", count: 21 },
            { name: "Men", count: 17 },
            { name: "Accessories", count: 15 },
            { name: "Kids", count: 13 },
          ].map((category) => (
            <div key={category.name} className="flex items-center gap-2 text-[#151875] text-sm">
              <span className="text-[#151875]">{category.name}</span>
              <span className="text-gray-400">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div>
        <h3 className="text-lg text-[#151875] font-semibold mb-4">Recent Post</h3>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((post) => (
            <div key={post} className="flex gap-4">
              <img
                src="/images/blog-1.png"
                alt=""
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h4 className="font-medium text-[#151875]">It is a long established fact</h4>
                <p className="text-sm text-gray-500">Aug 09 2020</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sale Product */}
      <div>
        <h3 className="text-lg font-semibold text-[#151875] mb-4">Sale Product</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((product) => (
            <div key={product} className="flex gap-4">
              <img
                src="/images/blog-4.png"
                alt=""
                className="w-20 h-20 object-cover rounded"
              />
              <div>
              <h4 className="font-medium text-[#151875]">It is a long established fact</h4>
              <p className="text-sm text-gray-500">Aug 09 2020</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offer Products */}
      <div>
        <h3 className="text-lg text-[#151875] font-semibold mb-4">Offer product</h3>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((product) => (
            <Card key={product} className="">
              <img
                src="/images/blog-5.png"
                alt=""
                className="w-full aspect-square object-cover rounded mb-2"
              />
              <div className="text-center ">
                <h4 className="text-sm font-medium text-[#151875]">Cantilever chair</h4>
                <p className="text-xs text-[#151875] ">$26.00</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Follow */}
      <div>
        <h3 className="text-lg text-[#151875] font-semibold mb-4">Follow</h3>
        <div className="flex gap-2">
          <a href="#" className="w-8 h-8 rounded-full bg-purple-700 font-semibold text-white flex items-center justify-center">f</a>
          <a href="#" className="w-8 h-8 rounded-full bg-[#FB2E86] text-white flex items-center justify-center">in</a>
          <a href="#" className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center">X</a>
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="text-lg text-[#151875] font-semibold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2 ">
          {["General", "Atsanil", "Insas", "Bibsaas", "Nulla"].map((tag) => (
            <span key={tag} className="px-3 py-1 text-[#151875] hover:text-pink-500 underline cursor-pointer bg-gray-100 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

