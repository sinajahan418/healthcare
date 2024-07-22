"use server"
import connectToDB from "@/configs/db";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import UserModel from "@/models/User";

const authUser = async () => {
  connectToDB();
  const token: RequestCookie | undefined = cookies().get("token");
  let user = null;
//   console.log("llllllllllllllllllllllllll", token?.name);

  user = await UserModel.findOne({ name: token?.name });

  return user;
};

export { authUser };
