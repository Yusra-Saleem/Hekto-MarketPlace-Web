interface ServiceCardProps {
    icon: React.ReactNode
    title: string
    description: string
  }
  
  export function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center text-[#FB2E86]">
          {icon}
        </div>
        <h3 className="mb-2 text-lg font-bold text-[#151875]">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    )
  }
  
  