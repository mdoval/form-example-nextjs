import { UserSchema } from "@/schemas/userSchema";
import { z } from "zod";

export  type User = z.infer<typeof UserSchema>