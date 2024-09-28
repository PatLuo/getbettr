import ChallengeCard from "@/components/ui/ChallengeCard";
import MockChallengeData from "@/MockChallengeData.json";
import { useState } from "react";

export default function ChallengeCardList() {
  const [challenges, setChallenges] = useState(MockChallengeData);

  return (
    <div className="grid grid-cols-2 gap-8">
      {challenges.map((challenge, id) => (
        <ChallengeCard key={id} challenge={challenge} />
      ))}
    </div>
  );
}
