"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending, error, refetch } = authClient.useSession();
  const user = session?.user;
  console.log(user, "user form nav");

  if (isPending) return <p>Loading...</p>;

  return (
    <nav className="sticky top-0 z-40 w-full bg-amber-50 border-b border-separator">
      <header className="flex h-16 items-center justify-between px-6">
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/add-destination"}>Add Destinations</Link>
          </li>
          <li>
            <Link href={"/destinations"}>Destinations</Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div>
            <Image
              src={"/assets/Wanderlast.png"}
              width={150}
              height={150}
              alt="wanderlust logo"
            ></Image>
          </div>
        </div>
        <ul className="flex gap-2 p-4">
          {user ? (
            <>
              <Avatar>
                <Avatar.Image alt={`${user?.name}'s Photo`} src={user?.image} />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>
              <li>
                <Button variant="secondary">SignOut</Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href={"/profile"} className="block py-2">
                  Profile
                </Link>
              </li>
              <li>
                <Link href={"/login"} className="block py-2">
                  Login
                </Link>
              </li>
              <li>
                <Link href={"/signUp"} className="block py-2">
                  SignUp
                </Link>
              </li>
            </>
          )}
        </ul>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/destinations">Destinations</Link>
            </li>
            <li>
              <Link href="/my-bookings">My Bookings</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
