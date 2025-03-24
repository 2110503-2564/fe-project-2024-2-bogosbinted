import ReduxProvider from "@/redux/ReduxProvider";

export default function BookingLayout({ children,dashboard }:{ children: React.ReactNode, dashboard: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}