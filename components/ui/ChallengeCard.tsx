import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ChallengeCard() {
  return (
    <Dialog>
      <DialogTrigger className="border p-6 rounded">Open</DialogTrigger>
      <DialogContent>This is inside the popupt</DialogContent>
    </Dialog>
  );
}
