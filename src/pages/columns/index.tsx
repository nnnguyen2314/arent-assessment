import type { NextPage } from "next";
import RootLayout from "@modules/shared/features/layout/RootLayout";
import ColumnContainer from "@modules/column/features/containers/ColumnContainer";

const ColumnsPage: NextPage  = () => {
    return (
        <RootLayout>
            <ColumnContainer />
        </RootLayout>
    )
};

export default ColumnsPage;