import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  newsletter: z.boolean().optional(),
});

export type ContactPayload = z.infer<typeof ContactSchema>;

export async function handleContact(payload: unknown) {
  const parsed = ContactSchema.safeParse(payload);
  if (!parsed.success) {
    return { ok: false, errors: parsed.error.flatten() } as const;
  }

  // TODO: Integrate with email provider / CRM
  return { ok: true } as const;
}
