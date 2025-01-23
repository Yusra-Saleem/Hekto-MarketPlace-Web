interface SectionHeaderProps {
    title: string
    className?: string
  }
  
  export function SectionHeader({ title, className }: SectionHeaderProps) {
    return (
      <h2 className={`mb-8 text-center text-3xl font-bold text-[#151875] ${className}`}>
        {title}
      </h2>
    )
  }
  
  