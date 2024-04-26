import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
    const queryClient = useQueryClient();
    const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
        mutationFn: deleteBookingApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ active: true });
            toast.success("Booking is successfully deleted");
        },
        onError: () => toast.error("There was an error while deleting booking"),
    });

    return { deleteBooking, isDeletingBooking };
}
