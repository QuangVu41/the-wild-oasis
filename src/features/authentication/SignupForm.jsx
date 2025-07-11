import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
    const { signup, isLoading } = useSignup();
    const { register, formState, getValues, handleSubmit, reset } = useForm();
    const { errors } = formState;

    function onSubmit({ fullName, email, password }) {
        signup(
            { fullName, email, password },
            {
                onSettled: reset,
            }
        );
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow label="Full name" error={errors.fullName?.message}>
                <Input
                    disabled={isLoading}
                    {...register("fullName", { required: "This field is required" })}
                    type="text"
                    id="fullName"
                />
            </FormRow>

            <FormRow label="Email address" error={errors.email?.message}>
                <Input
                    disabled={isLoading}
                    {...register("email", {
                        required: "This field is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Please provide a valid email address",
                        },
                    })}
                    type="email"
                    id="email"
                />
            </FormRow>

            <FormRow label="Password (min 8 characters)" error={errors.password?.message}>
                <Input
                    disabled={isLoading}
                    {...register("password", {
                        required: "This field is required",
                        minLength: {
                            value: 8,
                            message: "Password needs a minimum of 8 characters",
                        },
                    })}
                    type="password"
                    id="password"
                />
            </FormRow>

            <FormRow label="Repeat password" error={errors.passwordConfirm?.message}>
                <Input
                    disabled={isLoading}
                    {...register("passwordConfirm", {
                        required: "This field is required",
                        validate: (value) => value === getValues().password || "Passwords need to match",
                    })}
                    type="password"
                    id="passwordConfirm"
                />
            </FormRow>

            <FormRow>
                {/* type is an HTML attribute! */}
                <Button variation="secondary" type="reset" disabled={isLoading} onClick={reset}>
                    Cancel
                </Button>
                <Button disabled={isLoading}>Create new user</Button>
            </FormRow>
        </Form>
    );
}

export default SignupForm;
