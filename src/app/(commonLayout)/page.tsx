import { Hero } from "@/components/layout/hero1";
import { userService } from "@/services/user.service";
import Image from "next/image";

export default async function Home() {

  const {data, error} = await userService.getSession();


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero/>
    </div>
  );
}
