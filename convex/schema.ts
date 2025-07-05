import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  usernames: defineTable({
    userId: v.string(), // Clerk user ID
    username: v.string()
  })
    .index('by_user_id', ['userId'])
    .index('by_username', ['username']),

  userCustomizations: defineTable({
    userId: v.string(), // Clerk user ID
    profilePictureStorageId: v.optional(v.id('_storage')), // Convex storage ID for profile picture
    description: v.optional(v.string()),
    accentColor: v.optional(v.string())
  }).index('by_user_id', ['userId'])
});
