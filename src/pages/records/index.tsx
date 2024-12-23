import type { NextPage } from "next";
import RootLayout from "@modules/shared/features/layout/RootLayout";
import RecordContainer from "@modules/record/features/containers/RecordContainer";

const RecordsPage: NextPage  = () => {
    return (
        <RootLayout>
            <RecordContainer />
        </RootLayout>
    )
};

export default RecordsPage;