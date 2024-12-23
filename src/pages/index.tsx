import type { NextPage } from "next";
import RootLayout from "@modules/shared/features/layout/RootLayout";
import DashboardContainer from "@modules/dashboard/features/containers/DashboardContainer";

const IndexPage: NextPage = () => {
        // const dispatch = useAppDispatch();
        // const { selector, handleFetchProfile } = useUserService();

        // useEffect(() => {
        //     if(selector.userState.isAuthenticated) {
        //         handleFetchProfile();
        //     }
        // }, [handleFetchProfile, selector.userState.isAuthenticated]);

    return (
        <RootLayout>
            <DashboardContainer />
        </RootLayout>
    );
};

export default IndexPage;