import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Separator } from "@/components/ui/separator";

interface Participant {
  name: string;
  progress: number[];
}

interface Challenge {
  name: string;
  participants: Participant[];
}

interface ChallengeCardProps {
  challenge: Challenge;
}

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <Dialog>
      <DialogTrigger className="min-w-80 min-h-80  border rounded-xl">
        <div className="flex flex-col">
          <div className="h-64"></div>
          <Separator />
          <div className="h-16 flex items-center justify-center">
            {challenge.name}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="w-20 min-h-96"></div>
        <Separator />
        This is inside the popupt
      </DialogContent>
    </Dialog>
  );
}
