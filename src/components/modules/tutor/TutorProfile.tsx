import { Button } from "@/components/ui/button";
import { Tutor } from "@/types";
import Link from "next/link";


const TutorProfile = ({ tutor }: { tutor: Tutor[] }) => {
  
    return (
        <div className="max-w-2xl mx-auto mt-8">
            <h1 className="text-2xl text-center font-bold">My profile</h1>
            {
                tutor.map((tu: Tutor) => (
                    <div key={tu.id} className="flex flex-col p-4 mt-6 gap-4 rounded-2xl">
                        <div >
                            <p className="font-semibold">Name:</p>
                            <p className="border border-gray-400  rounded-sm border-r p-2">
                                {tu.name}
                            </p>
                        </div>

                        <div >
                            <p className="font-semibold">Bio:</p>
                            <p className="border border-gray-400  rounded-sm border-r p-2">
                                {tu.bio}
                            </p>
                        </div>

                        <div >
                            <p className="font-semibold">Subject:</p>
                            <p className="border border-gray-400  rounded-sm border-r p-2">
                                {tu.subject}
                            </p>
                        </div>



                        <div >
                            <p className="font-semibold">Experience</p>
                            <p className="border border-gray-400  rounded-sm border-r p-2">
                                {tu.experience_year}
                            </p>
                        </div>


                        <div >
                            <p className="font-semibold">Hourly Rate</p>
                            <p className="border border-gray-400  rounded-sm border-r p-2">
                                {tu.hourly_rate}
                            </p>
                        </div>

                        <div >
                            <p className="font-semibold">Category</p>
                            <p className="border border-gray-400  rounded-sm border-r p-2">
                                {tu.category.name}
                            </p>
                        </div>

                    </div>
                ))
            }
                        <Link href="/tutor/dashboard/update-profile">
                            <Button>Update Profile</Button>
                        </Link>
        </div>
    );
};

export default TutorProfile;