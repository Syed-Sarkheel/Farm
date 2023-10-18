import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
export function SimpleRegistrationForm({ name, path }) {
    const router = useRouter();
    return (
        <Card color="transparent" shadow={false} className="pr-40">
            <Typography variant="h4" color="white" className="text-5xl">
                {name}
            </Typography>
            <Typography variant="h4" color="white" className="text-5xl">
                Sign In
            </Typography>
            <Typography color="white" className="mt-1 font-normal">
                Nice to meet you again! Enter your details.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">

                    <Input
                        size="lg"
                        placeholder="Enter Phone Number"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />

                    <Input
                        type="password"
                        size="lg"
                        placeholder="Enter your password"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>

                <Button onClick={() => { router.push(path) }} className="mt-6 capitalize" fullWidth>
                    sign in
                </Button>
                <Typography color="white" className="mt-4 text-center font-normal">
                    Don{'\''}t have an account?{" "}
                    <a href="#" className=" text-black font-bold hover:underline">
                        Sign Up
                    </a>
                </Typography>
            </form>
        </Card>
    );
}