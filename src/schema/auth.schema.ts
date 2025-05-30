import * as z from "zod";

const loginValidationSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
const fogotpasswordSchema = z.object({
  email: z.string({ required_error: "Email is Required" }),
});

const changePasswordSchema = z.object({
  oldPassword: z.string({ required_error: "Old Password is required" }),
  newPassword: z
    .string({ required_error: "New Password is required" })
    .min(6, { message: "New Password must be at least 6 characters long" }),

  confirmPassword: z
    .string({ required_error: "Confirm Password is required" })
    .min(6, { message: "Confirm Password must be at least 6 characters long" }),
});
const resetPasswordSchema = z.object({
  newPassword: z
    .string({ required_error: "New Password is required" })
    .min(6, { message: "New Password must be at least 6 characters long" }),

  confirmPassword: z
    .string({ required_error: "Confirm Password is required" })
    .min(6, { message: "Confirm Password must be at least 6 characters long" }),
});

const createVendorSchema = z.object({
  fullName: z.string({ required_error: "Vendor name  is Required" }),
  email: z.string({ required_error: "Vendor email  is Required" }),
  password: z.string({ required_error: "Vendor password is Required" }),
  phoneNumber: z.coerce
    .number({ required_error: "Vendor phone number is required" })
    .refine((value) => /^5\d{6,}$/.test(value.toString()), {
      message:
        "Vendor phone number must start with 5 and be at least 7 digits long",
    }),
});
const EditVendorSchema = z.object({
  fullName: z
    .string({ required_error: "Vendor name is Required" })
    .min(1, { message: "Vendor name is Required" }),

  phoneNumber: z.coerce
    .number({ required_error: "Vendor phone number is required" })
    .refine((value) => /^5\d{6,}$/.test(value.toString()), {
      message:
        "Vendor phone number must start with 5 and be at least 7 digits long",
    }),
  email: z
    .string({ required_error: "Email is Required" })
    .min(1, { message: "email is Required" }),
});

export const authValidationSchema = {
  loginValidationSchema,
  fogotpasswordSchema,
  changePasswordSchema,
  resetPasswordSchema,
  createVendorSchema,
  EditVendorSchema,
};
