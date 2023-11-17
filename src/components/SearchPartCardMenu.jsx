import  MoreVertical from '@/components/icons/MoreVertical'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function  handleMenu1() {
    console.log("Menu 1")
}
function SearchPartCardMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <MoreVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <DropdownMenuLabel onClick={ () => handleMenu1()}>Menu Item 1</DropdownMenuLabel>
                        {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <DropdownMenuLabel>Menu Item 2</DropdownMenuLabel>
                        {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <DropdownMenuLabel>Menu Item 3</DropdownMenuLabel>
                        {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>

    );
}

export default SearchPartCardMenu;                    