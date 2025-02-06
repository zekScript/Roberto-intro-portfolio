"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LogOut } from "lucide-react";

import NavContent from "./nav-content";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { getCurrentUser } from "@/server/currentUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import * as React from "react";

export function TopBar() {
  const router = useRouter();
  const isLoggedIn = Cookies.get("authToken") ? true : false;
  const user = getCurrentUser();

  const logout = () => {
    Cookies.remove("authToken");
    window.location.reload();
    router.push("/");
  };

  function getFirstLettersForFallback(str?: string) {
    if (!str) return "";
    return str
      .split(" ") // Split the string into an array of words
      .map((word) => word.charAt(0).toUpperCase()) // Take the first letter of each word and capitalize it
      .join(""); // Combine the letters without spaces
  }

  return (
    // fixed: position
    <div className="fixed  left-0 top-0 z-50 w-full">
      <div>
        <div className="mr-7 ml-7">
          <div className="flex absolute justify-start">
            {!isLoggedIn ? (
              <div className="mb-4 mt-3  w-full justify-end gap-x-4 ">
                <Button
                  onClick={() => router.push("/signin")}
                  variant="default"
                >
                  Sign In
                </Button>
                <Button onClick={() => router.push("/login")} variant="outline">
                  Log In
                </Button>
              </div>
            ) : (
              <div className="mb-4 mt-3 hidden w-full justify-end gap-x-4 lg:flex">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        className="rounded-full shadow-xl"
                        src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
                        alt="Profile avatar"
                      />
                      <AvatarFallback>
                        {getFirstLettersForFallback(user?.name ?? "")}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem onClick={logout}>
                      <LogOut />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center  text-sm">
            <div className="flex w-full justify-end">
              {/* Main nav here */}
              {/* items={topNav.items} */}
              <NavContent />
            </div>
            <div className="flex flex-row-reverse gap-x-4 lg:flex-row">
              {/* MOBILE NAV */}
              {/* <MobileNav items={topNav.items} /> */}
            </div>
            {/* MAIN NAV */}
          </div>
        </div>
      </div>
    </div>
  );
}
