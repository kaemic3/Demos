"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect } from "react";
// Checks to see if the GMu script element exists in the DOM, and removes it when the pages changes.
export function RouteChangeListener() {
    const path_name = usePathname();
    useEffect(() => {
        if(document.getElementById("GMu"))
        {
            const GMu = document.getElementById("GMu");
            GMu?.remove();
        }
    }, [path_name])
    return <></>
}