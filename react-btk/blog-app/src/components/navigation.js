"use client"
import { usePathname } from "next/navigation";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { blue } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    const pathname = usePathname();
    console.log("Current Path:", pathname);

    return (
        <AppBar position="static" sx={{ backgroundColor: blue[500] }}>
            <Toolbar>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Image src="vercel.svg" height={20} width={20} alt="" />
                    <Button
                        component={Link}
                        href="/"
                        color={pathname === "/" ? "warning" : "inherit"}
                    >
                        Home
                    </Button>
                    <Button
                        component={Link}
                        href="/blog"
                        color={pathname === "/blog" ? "warning" : "inherit"}
                    >
                        Blog
                    </Button>
                    <Button
                        component={Link}
                        href="/users"
                        color={pathname === "/users" ? "warning" : "inherit"}
                    >
                        Users   
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}