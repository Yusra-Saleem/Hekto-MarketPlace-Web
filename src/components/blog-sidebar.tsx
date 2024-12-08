import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function BlogSidebar() {
  return (
    <div className="space-y-8 md:w-[250px]">
      {/* Search */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Search</h3>
        <Input type="search" placeholder="Search..." />
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {[
            { name: "Women", count: 21 },
            { name: "Men", count: 17 },
            { name: "Accessories", count: 15 },
            { name: "Kids", count: 13 },
          ].map((category) => (
            <div key={category.name} className="flex items-center justify-between text-sm">
              <span className="text-gray-600">{category.name}</span>
              <span className="text-gray-400">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Post</h3>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((post) => (
            <div key={post} className="flex gap-4">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt=""
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h4 className="font-medium">It is a long established fact</h4>
                <p className="text-sm text-gray-500">Aug 09 2020</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sale Product */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Sale Product</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((product) => (
            <div key={product} className="flex gap-4">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt=""
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h4 className="font-medium">Comfortable Chair</h4>
                <p className="text-sm text-[#FB2E86]">$45.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offer Products */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Offer product</h3>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((product) => (
            <Card key={product} className="p-4">
              <img
                src="/placeholder.svg?height=120&width=120"
                alt=""
                className="w-full aspect-square object-cover rounded mb-2"
              />
              <div className="text-center">
                <h4 className="text-sm font-medium">Cantilever chair</h4>
                <p className="text-xs text-[#FB2E86]">$26.00</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Follow */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Follow</h3>
        <div className="flex gap-2">
          <a href="#" className="w-8 h-8 rounded-full bg-[#FB2E86] text-white flex items-center justify-center">f</a>
          <a href="#" className="w-8 h-8 rounded-full bg-[#FB2E86] text-white flex items-center justify-center">t</a>
          <a href="#" className="w-8 h-8 rounded-full bg-[#FB2E86] text-white flex items-center justify-center">in</a>
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {["General", "Atsanil", "Insas", "Bibsaas", "Nulla"].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

