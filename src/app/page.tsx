"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { LogoutButton } from "./logout";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {toast} from "sonner";
import { useTRPC } from "@/trpc/client";
const Page = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());


  const testAi=useMutation(trpc.testAi.mutationOptions({
    onSuccess: () => {
        toast.success("AI Job queued")
      },
      onError:()=>{
        toast.error("Somethign went wrong")
      }
  }))
  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        toast.success("job queued")
      },
    }),
  );
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      protected server component
      <div>{JSON.stringify(data, null, 2)}</div>
      <Button disabled={testAi.isPending} onClick={()=>testAi.mutate()}>Test AI</Button>
      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create workflows
      </Button>
      <LogoutButton />
    </div>
  );
};

export default Page;
