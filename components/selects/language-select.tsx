import { Label } from "../ui/label";
import MultipleSelector from "../ui/multiselect";

const languages = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Spanish", value: "es" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Japanese", value: "ja" },
    { label: "Korean", value: "ko" },
    { label: "Chinese", value: "zh" },
];

export default function LanguageSelect() {
    return (
        <>
            <Label htmlFor="languages">Languages spoken</Label>
            <MultipleSelector
                commandProps={{
                    label: "Select languages",
                }}
                defaultOptions={languages}
                placeholder="Select languages"
                hideClearAllButton
                hidePlaceholderWhenSelected
                emptyIndicator={
                    <p className="text-center text-sm">No results found</p>
                }
            />
        </>
    );
}
