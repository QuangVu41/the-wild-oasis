import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
        mutationFn: ({ bookingId, breakfast }) =>
            updateBooking(bookingId, {
                status: "checked-in",
                isPaid: true,
                ...breakfast,
            }),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ active: true });
            navigate(`/`);
            toast.success(`Booking #${data.id} successfully checked in`);
        },
        onError: () => toast.error("There was an error while checking in"),
    });

    return { checkin, isCheckingIn };
}
