import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
    const queryClient = useQueryClient();

    const { mutate: updateUser, isLoading: isUpdating } = useMutation({
        mutationFn: updateCurrentUser,
        onSuccess: ({ user }) => {
            queryClient.setQueryData(["user"], user);
            // queryClient.invalidateQueries({
            //     queryKey: ["user"],
            // });

            toast.success("User account successfully updated");
        },
        onError: (err) => toast.error(err.message),
    });

    return { isUpdating, updateUser };
}
