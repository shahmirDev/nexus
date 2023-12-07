import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const SignInSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(7, { message: "password must be at least 7 characters long" })
      .max(30, "password must be less than 30 characters in length"),
  })
  .required();

type SignInSchemaType = z.infer<typeof SignInSchema>;

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = (data: SignInSchemaType) => console.log(data);
  return <form></form>;
};

export default SignInForm;
