import React from "react";
import ReactDOM from "react-dom/client";
import BirthdayCard from "@/components/BirthdayCard";
import FloatingHearts from "@/components/FloatingHearts";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="relative min-h-screen overflow-hidden bg-background">
      <FloatingHearts />
      <BirthdayCard />
    </div>
  </React.StrictMode>,
);
