import prisma from "@/lib/db";
import { generateSlug } from "random-word-slugs";
import {
  createTRPCRouter,
  PremiumProcedure,
  protectedProcedure,
} from "@/trpc/init";
import { z } from "zod";

export const workflowsRouter = createTRPCRouter({
  create: PremiumProcedure.mutation(({ ctx }) => {
    return prisma.workflow.create({
      data: {
        name: generateSlug(3),
        userId: ctx.auth.user.id,
      },
    });
  }),
  remove: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return prisma.workflow.delete({
        where: {
          id: input.id,
          userId: ctx.auth.user.id,
        },
      });
    }),
  updatedName: protectedProcedure
    .input(z.object({ id: z.string(), name: z.string().min(1) }))
    .mutation(({ ctx, input }) => {
      return prisma.workflow.update({
        where: { id: input.id, userId: ctx.auth.user.id },
        data: { name: input.name },
      });
    }),
  getMany: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany({
      where: { userId: ctx.auth.user.id },
    });
  }),
});
