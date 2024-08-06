import Navigation from "@/components/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  return <div>
    <Navigation />
    {children}
  </div>
}
