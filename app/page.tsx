import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ChallengeCard from "@/components/ui/ChallengeCard";

export default function Home() {
  return (
    <main className="p-4 d-4 h-screen flex flex-col items-center justify-center">
      <ChallengeCard />
      <ChallengeCard />
      <ChallengeCard />
    </main>
  );
}
