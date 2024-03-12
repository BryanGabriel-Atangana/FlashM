import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { Button } from "@/components/ui/button";
import { SubmitButton } from "./submit-button";

async function hashPassword(pass: string) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(pass, salt);
  return hashedPassword;
}

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { data: userData, error: userError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (userError) {
      console.error("Error querying user:", userError.message);
      return redirect("/login?message=Un problem est survenu");
    }

    if (!userData) {
      // User not found
      return redirect("/login?message=Vérifiez vos identifiants");
    }

    return redirect("/home");
  };

  const signUp = async (formData: FormData) => {
    "use server";
    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const hashedPassword = await hashPassword(password);
    const supabase = createClient();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Vérifiez vos identifiants");
    }

    const { error: insertError } = await supabase.from("users").insert({
      user_id: data.session?.user?.id,
      email,
      password_hash: hashedPassword,
      last_login: data.session?.user?.last_sign_in_at,
    });

    if (insertError) {
      console.log(insertError);
      return redirect("/login?message= Un problem est survenu");
    }

    return redirect("/home");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <Button className="bg-slate-200 text-[#2d2d2d] hover:bg-slate-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>{" "}
          <p>retour</p>
        </Button>
        {/* animate bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 */}
        <h1 className=" text-[1rem] text-[#181818] font-black pl-[2rem]">
          FLASHMIND
        </h1>
      </Link>

      <form className="animate-in flex-1 flex flex-col w-full justify-center text-foreground">
        <div className="flex flex-col py-2">
          <label className="text-sm text-[#181818]" htmlFor="email">
            Adresse Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border "
            name="email"
            id="email"
            placeholder="flash@mind.com"
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="text-sm text-[#181818]" htmlFor="password">
            Mot de passe
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-4"
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            required
          />
        </div>

        <SubmitButton
          formAction={signIn}
          className="animate-gradient bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500  text-white rounded-md px-4 py-2 text-foreground mb-2 w-full"
          pendingText="Connexion..."
        >
          Se Connecter
        </SubmitButton>

        <SubmitButton
          formAction={signUp}
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2 w-full"
          pendingText="En cours..."
        >
          S'inscrire
        </SubmitButton>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}
