import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
    return (
        <TableOperations>
            <Filter
                filterField="discount"
                options={[
                    { value: "all", label: "All" },
                    {
                        value: "no-discount",
                        label: "No-discount",
                    },
                    {
                        value: "with-discount",
                        label: "With Discount",
                    },
                ]}
            />

            <SortBy
                options={[
                    { value: "name-asc", label: "Sort by name (A-Z)" },
                    { value: "name-desc", label: "Sort by name (Z-A)" },
                    { value: "regularPrice-asc", label: "Sort by price (low first)" },
                    { value: "regularPrice-desc", label: "Sort by price (high first)" },
                    { value: "maxCapcity-asc", label: "Sort by capcity (low first)" },
                    { value: "maxCapcity-desc", label: "Sort by capcity (high first)" },
                ]}
            />
        </TableOperations>
    );
}

export default CabinTableOperations;
