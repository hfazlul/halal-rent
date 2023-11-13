'use client';

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";
import { Icon } from "leaflet";
import { machine } from "os";
import { BiHeart } from "react-icons/bi";


interface EmptyState{
    title?:string;
    subtitle?:string;
    showReset?:boolean;
}

const EmptyState: React.FC<EmptyState> = ({
    title= "No exact fmatches",
    subtitle= "Try changing or removing some of your filters",
    showReset
}) => {
    const router=useRouter();
    return (
        <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
            <Heading
                center
                title={title}
                subtitle={subtitle}
            />
            <div className="w-48 mt-4">
                 {showReset && (
                    <Button
                        outline
                        label="Remove all Filters"
                        onClick={()=> router.push('/')}
                    />
                 )}
            </div>
        </div>
     );
}
 
export default EmptyState;