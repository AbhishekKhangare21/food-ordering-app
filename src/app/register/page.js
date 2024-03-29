"use client";
import { set } from "mongoose";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [err, setError] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      {userCreated && (
        <div className="my-4 text-center">
          User created.
          <br /> No you can{" "}
          <Link className="underline" href={"/login"}>
            Login &raquo;
          </Link>
        </div>
      )}
      {err && (
        <div className="my-4 text-center">
          An error has occured. <br />
          Please try again later
        </div>
      )}
      <form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          disabled={creatingUser}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          disabled={creatingUser}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt={""} width={24} height={24} />
          Login with google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existng account?{" "}
          <Link className="underline" href={"/login"}>
            Login here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;
