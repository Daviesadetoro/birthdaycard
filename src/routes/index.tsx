import { createFileRoute } from "@tanstack/react-router";
import BirthdayCard from "@/components/BirthdayCard";
import FloatingHearts from "@/components/FloatingHearts";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <FloatingHearts />
      <BirthdayCard />
    </div>
  );
}
