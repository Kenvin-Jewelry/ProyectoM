import { ExecArgs } from "@medusajs/framework/types"
import type { UserService } from "@medusajs/medusa"

export default async function createAdmin({
  container,
}: ExecArgs) {s
  const userService: UserService = container.resolve("userService")

  const email = "m1guedev21@gmail.com"
  const password = "Pinguino"

  try {
    await userService.create({
      email,
      password,
      role: "admin",
    })

    console.log("Admin user created successfully!")
    console.log("Email:", email)
    console.log("Password:", password)
  } catch (error) {
    console.error("Error creating admin user:", error)
  }
} 