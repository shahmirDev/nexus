import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const SignUpSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "First name must have at least two characters" }),
    lastName: z
      .string()
      .min(2, { message: "Last name must have at least two characters" }),
    email: z.string().email(),
    password: z
      .string()
      .min(7, { message: "password must be at least 7 characters long" })
      .max(30, "password must be less than 30 characters in length"),
  })
  .required();

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = (data: SignUpSchemaType) => console.log(data);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
        flex flex-col w-3/5 md:w-1/2 xl:w-1/3 justify-center items-center text-gray-200 bg-slate-800 rounded-lg "
      >
        <h2 className="text-2xl mt-6 mb-2.5 font-medium">
          Sign Up to begin the journey
        </h2>
        <div className="w-3/4 h-0.5 mb-3.5 bg-gray-200 rounded-xl"></div>
        <div className="flex w-4/5 flex-col md:flex-row">
          <div className="flex flex-col w-full md:w-1/2 ">
            <label className="py-4 px-1 text-lg">First Name</label>
            <input
              {...register("firstName")}
              placeholder="Enter your first name"
              type="string"
              className="block px-4 py-3 rounded-lg bg-slate-600 focus:outline-none focus:bg-slate-500"
            />
            {errors.firstName && <p>{errors.firstName?.message}</p>}
          </div>
          <div className="flex flex-col w-full md:w-1/2 md:ml-4">
            <label className="py-4 px-1 text-lg">Last Name</label>
            <input
              {...register("lastName")}
              placeholder="Enter your last name"
              type="string"
              className="block px-4 py-3 rounded-lg bg-slate-600 focus:outline-none focus:bg-slate-500"
            />
            {errors.lastName && <p>{errors.lastName?.message}</p>}
          </div>
        </div>
        <div className="flex flex-col w-4/5">
          <label className="py-4 px-1 text-lg">Email</label>
          <input
            {...register("email")}
            placeholder="Enter your email"
            type="string"
            className="block px-4 py-3 rounded-lg bg-slate-600 focus:outline-none focus:bg-slate-500"
          />
          {errors.email && <p>{errors.email?.message}</p>}
        </div>
        <div className="flex flex-col w-4/5">
          <label className="py-4 px-1 text-lg">Password</label>
          <input
            {...register("password")}
            placeholder="Enter your password"
            type="password"
            className="block px-4 py-3 rounded-lg bg-slate-600 focus:outline-none focus:bg-slate-500"
          />
          {errors.password && <p>{errors.password?.message}</p>}
        </div>
        <button
          type="submit"
          className="w-2/5 lg:w-2/6 m-5 py-2 rounded-xl bg-gradient-to-bl from-slate-600 to-slate-700"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
