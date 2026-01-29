import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,

    CardContent,

    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Tutor } from "@/types";


import { Eye, MessageCircle, Star } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const TutorCard = ({ tutors }: { tutors: Tutor }) => {
    return (
        <div className="p-4 flex-col md:flex-row">
            <Card className="h-full overflow-hidden border-none shadow-md transition-all duration-300 pb-2">
                <div className="relative h-56 w-full overflow-hidden">
                    {tutors.image ? (
                        <Image
                            src={tutors.image}
                            alt="Tutor"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    )
                        : (
                            <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                                No Image
                            </div>
                        )}
                </div>
                <CardHeader className="pb-2">
                    <CardTitle className="line-clamp-2 text-xl font-bold transition-colors group-hover:text-primary">
                        <p>
                            {tutors.user.name}
                        </p>
                        <div className="flex flex-row gap-2 text-sm mt-2">
                            <span>
                                {tutors.experience_year}+ Years
                            </span>
                            <span>Experience:</span>

                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-row justify-between">

                    <span>

                        <Badge variant={"default"} className="bg-orange-400 hover:bg-amber-60">

                            {tutors.category.name}
                        </Badge>
                    </span>
                    <span className="flex items-center gap-1 ">
                        <Star className="w-4 text-orange-400"></Star>
                        <span className="text-xl">

                            {tutors.average_rating || 0}.0
                        </span>

                    </span>


                </CardContent>
                <CardFooter>
                    <Link href={`/tutors/${tutors.id}`}>
                        <Button variant="outline" className="hover:bg-orange-400 hover:text-white">Details</Button>
                    </Link>
                </CardFooter>

            </Card>
        </div>
    );
};

export default TutorCard;