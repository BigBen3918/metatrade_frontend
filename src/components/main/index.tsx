import React from "react";
import Header from "./header";
import SidebarPanel from "./sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ProSidebarProvider>
            <div style={{ display: "flex" }}>
                <SidebarPanel />
                <div style={{ padding: "20px", width: "100%" }}>
                    <Header />
                    <div className="spacer-50"></div>
                    {children}
                </div>
            </div>
        </ProSidebarProvider>
    );
}
