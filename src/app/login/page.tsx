"use client";
import Button from "@/components/button/Button";
import { userLogin } from "@/lib/api/fetch";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { VscLoading } from "react-icons/vsc";
import { toast } from "react-toastify";

export default function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  type Inputs = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsSubmitting(true);
      const response = await userLogin(data.email, data.password);
      if (response) {
        if (response === "admin") {
          router.push("/admin");
        } else {
          const storeToken = localStorage.setItem("userInfo", response.token);
          const storeId = localStorage.setItem("userId", response.id);
          toast.success("Login successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setIsSubmitting(false);
          console.log(response);

          if (response.progress === "20") {
            router.replace(`/register/pro/${response.id}`);
          } else if (response.progress === "40") {
            router.replace(`/register/completeYourProfile/${response.id}`);
          } else if (response.progress === "60") {
            router.replace(`/register/addService/${response.id}`);
          } else if (response.progress === "80") {
            router.replace(`/register/addPayment/${response.id}`);
          } else if (response.progress === "100") {
            router.replace(`/pro/dashboard/${response.id}`);
          }
        }
      } else {
        toast.error("Failed to Loggin, try again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      toast.error("Network error or wrong email and password, try again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setIsSubmitting(false);
    
    }
  };

  return (
    <section className="container mx-auto flex md:shadow-xl my-5">
      <div className="bg-[#4FBFA3] flex-1 text-center text-white pt-8 lg:px-20 px-5 hidden md:block">
        <h1 className="text-[32px] leading-[46px]">Grow with Guru</h1>
        <div className="w-64 carousel rounded-box">
          <div className="carousel-item w-full flex-col">
            <div>
              <h2 className="font-semibold text-lg">
                99% Customer Satisfaction
              </h2>
              <h3 className="font-semibold text-base">
                Based on paid invoices
              </h3>
            </div>
          </div>
          <div className="carousel-item w-full flex-col">
            <div>
              <h2 className="font-semibold text-lg">Flexible Platform</h2>
              <h3 className="font-semibold text-base">
                Choose from four Payment terms
              </h3>
            </div>
          </div>
          <div className="carousel-item w-full flex-col">
            <div>
              <h2 className="font-semibold text-lg">Payment Protection</h2>
              <h3 className="font-semibold text-base">
                Secure your transactions with SafePay
              </h3>
            </div>
          </div>
          <div className="carousel-item w-full flex-col">
            <div>
              <h2 className="font-semibold text-lg">Lowest Transaction Fees</h2>
              <h3 className="font-semibold text-base">
                Get maximum value at minimum cost
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 pt-8 px-10 md:px-5 lg:px-20 space-y-5 pb-28">
        <h1 className="text-[32px] leading-[46px] text-center text-[#4FBFA3]">
          Log In
        </h1>
        <div className="border-b" />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <input
            type="email"
            className="focus:border-[#4FBFA3] border focus:outline-none w-full px-5 py-2.5"
            placeholder="Email or Username"
            {...register("email", { required: true, minLength: 5 })}
          />
          {errors.email && (
            <p className="text-sm text-red-500">Please enter a valid email</p>
          )}
          <input
            type="password"
            className="focus:border-[#4FBFA3] border focus:outline-none w-full px-5 py-2.5"
            placeholder="Password"
            {...register("password", { required: true, minLength: 5 })}
          />
          {errors.password && (
            <p className="text-sm text-red-500">
              Please enter a valid password
            </p>
          )}
          <div className="text-[14px] leading-[21px] flex justify-between">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="scale-125" />
              <span className="cursor-pointer">Remember me</span>
            </label>
            <Link href={"#"} className="text-[#4FBFA3]">
              Forgot Password
            </Link>
          </div>
          <div className="flex justify-end">
            <Button disabled={isSubmitting ? true : false}>
              {isSubmitting ? (
                <div className="animate-spin">
                  <VscLoading size={25} />
                </div>
              ) : (
                "Proceed"
              )}
            </Button>
          </div>
        </form>
        <div className="text-[14px] leading-[21px] text-center">
          <span>
            Don{"'"}t have an account?{" "}
            <Link href={"/register"} className="text-[#4FBFA3]">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
