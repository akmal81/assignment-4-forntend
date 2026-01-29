import { Footer2 } from "@/components/footer2";
import { Navbar } from "@/components/layout/navbar1";


const layout = (
    {
        children
    }:
    {
        children:React.ReactNode
    }
) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer2></Footer2>
        </div>
    );
};

export default layout;