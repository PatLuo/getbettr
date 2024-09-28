import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Separator } from "@/components/ui/separator";

export default function ChallengeCard() {
  return (
    <Dialog>
      <DialogTrigger className="border p-6 rounded">Open</DialogTrigger>
      <DialogContent>
        <div className="w-20 min-h-96"></div>
        <Separator />
        This is inside the popupt
      </DialogContent>
    </Dialog>
  );
}
