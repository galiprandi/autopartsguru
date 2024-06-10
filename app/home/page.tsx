"use client";
import { useState } from "react";
import AddUser from "../users/components/AddUser";
import { DialogForm } from "@components/ui/Dialog";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <section>
      <h1>Home</h1>
      <button onClick={() => setIsOpen(true)}>Add User</button>
      <AddUser onClose={() => setIsOpen(false)} isOpen={isOpen} />
    </section>
  );
}
