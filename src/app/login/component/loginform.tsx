"use client";

import { Formik, Field, Form, FormikHelpers } from "formik";

import PasswordInput from "./passwordinput";
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";
import { useRouter } from "next/navigation";

interface Values {
  username: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (val: Values) => {
    if (!localStorage) {
      return;
    }

    const token = localStorage?.getItem("token");

    try {
      const res = await fetch("http://localhost:8080/api/v1/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(val),
      });
      const resJson = await res.json();

      if (resJson.message === "already signed in") {
        router.replace("/");
      } else if (resJson.token) {
        localStorage.setItem("token", resJson.token);

        router.replace("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            handleSubmit(values);
            setSubmitting(false);
          });
        }}
      >
        <Form>
          <div className="mb-[10px] sm:mb-[15px] md:mb-[20px] xl:mb-[20px] lg:mb-[15px] text-poppins flex flex-col">
            <text className="font-medium text-[12px] sm:text-[15px] md:text-[18px] xl:text-[14px] lg:text-[12px] mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[20px] lg:mb-[15px] text-poppins">
              Username
            </text>
            <Field
              src="/User.png"
              className="form-control w-[82.2vw] lg:w-[39.6vw] h-auto aspect-[296/28] lg:aspect-[760/48] rounded-[5px] lg:rounded-[15px] bg-[#E6EAF4] pl-[2.7vw] lg:pl-[1.25vw] text-[11px] sm:text-[15px] md:text-[18px] xl:text-[13px] lg:text-[11px]"
              id="Username"
              name="Username"
              placeholder="Username"
              aria-describedby="UsernameHelp"
            />
          </div>

          <div className="mb-[27px] sm:mb-[25px] md:mb-[30px] xl:mb-[35px] lg:mb-[25px] text-poppins flex flex-col">
            <text className="font-medium text-[12px] sm:text-[15px] md:text-[18px] xl:text-[14px] lg:text-[12px] mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[20px] lg:mb-[15px] text-poppins">
              Password
            </text>
            <Field
              className="form-control w-[82.2vw] lg:w-[39.6vw] h-auto aspect-[296/28] lg:aspect-[760/48] rounded-[5px] lg:rounded-[15px] bg-[#E6EAF4] pl-[2.7vw] lg:pl-[1.25vw] text-[11px] sm:text-[15px] md:text-[18px] xl:text-[13px] lg:text-[11px]"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              component={PasswordInput}
            />
          </div>

          <div className="ml-[294px]">
            <button
              type="submit"
              className="bg-[#67AEEE] p-[10px] rounded-[5px] flex items-center justify-center"
            >
              <text className="text-white font-montserrat text-xs font-semibold leading-normal">
                Log In
              </text>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
