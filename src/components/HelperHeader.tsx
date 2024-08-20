import { Button } from "./ui/button";
import { Share2, Save } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { CompilerSliceStateType, updateCurrentLanguage } from "@/redux/slices/CompilerSlice";
import { RootState } from "@/redux/Store";

export default function HelperHeader() {
    const dispatch = useDispatch();
    const currentLanguage = useSelector(
        (state: RootState) => state.compilerSlice.currentLanguage
    );
    return (
        <div className="__helper_header h-[50px]  bg-black text-white p-2 flex justify-between items-center">
            <div className="__btn_container flex gap-1">
                <Button
                    className="flex justify-between items-center gap-1"
                    variant="success"
                >
                    <Save size={16} /> Save
                </Button>
                <Button
                    className="flex justify-between items-center gap-1"
                    variant={"secondary"}
                >
                    <Share2 size={16} />
                    Share
                </Button>
            </div>
            <div className="__tab_switcher flex justify-center items-center gap-1">
                <small>Current Language:</small>
                <Select
                    defaultValue={currentLanguage}
                    onValueChange={(value) => dispatch(updateCurrentLanguage(value as CompilerSliceStateType["currentLanguage"]))}
                >
                    <SelectTrigger className="w-[120px] bg-gray-800 focus:ring-0">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="html">HTML</SelectItem>
                        <SelectItem value="css">CSS</SelectItem>
                        <SelectItem value="javascript">javascript</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
