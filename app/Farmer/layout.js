import { StickyNavbar } from "@/components/StickyNavbar"
export default function DashboardLayout({ children }) {
    return <section>
        <StickyNavbar path='Farmer' />
        {children}
    </section>
}