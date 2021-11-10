import { Link } from 'react-router-dom'
import { StyledNavbar, StyledNav  } from "./StyledNavbar";
// import { HiMoon, HiSun } from 'react-icons/hi'



export const index = ({ children }: any) => {

    

    return (
        <StyledNavbar>
        <Link  to="/">
            <img
            src={`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDg3IDQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NyA0MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMzNzQ3NEY7fQoJLnN0MXtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkNGMDA7fQoJLnN0MntmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiM0QzU4NTk7fQoJLnN0M3tvcGFjaXR5OjAuMTtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOnVybCgjRmlsbC03XzFfKTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ3LDE4LjZjMC0yLjItMC43LTQtMi01LjVTNDEuOCwxMSwzOS43LDExcy0zLjksMC43LTUuMywyLjJjLTEuNCwxLjUtMi4xLDMuMy0yLjEsNS41YzAsMi4zLDAuNyw0LjEsMi4xLDUuNQoJYzEuNCwxLjQsMy4yLDIuMiw1LjMsMi4yYzEuNywwLDMuMS0wLjUsNC40LTEuNHMyLjEtMi4xLDIuNS0zLjZoLTRjLTAuMiwwLjUtMC42LDAuOS0xLjEsMS4yQzQxLDIyLjksNDAuNCwyMywzOS44LDIzCgljLTEsMC0xLjgtMC4zLTIuNC0wLjhjLTAuNi0wLjUtMS0xLjMtMS4xLTIuM2gxMC42TDQ3LDE4LjZ6IE0zNi4zLDE3YzAuMi0wLjksMC41LTEuNSwxLjEtMnMxLjMtMC43LDIuMi0wLjdzMS43LDAuMywyLjIsMC44CgljMC42LDAuNSwwLjksMS4yLDEuMSwyaC02LjZWMTd6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MCwxMS4zdjEuOGMtMS0xLjQtMi41LTIuMS00LjYtMi4xYy0yLDAtMy42LDAuNy00LjgsMi4xcy0xLjgsMy4yLTEuOCw1LjJjMCwyLjEsMC42LDMuOCwxLjgsNS4yCgljMS4yLDEuNCwyLjgsMi4xLDQuOCwyLjFjMS45LDAsMy4zLTAuNiw0LjMtMS45djJjMCwwLjktMC4zLDEuNi0wLjgsMi4xcy0xLjMsMC44LTIuMywwLjhjLTEuNiwwLTIuNi0wLjYtMi44LTEuOWgtNAoJYzAuMSwxLjQsMC44LDIuNiwxLjksMy43YzEuMSwxLjEsMi44LDEuNyw0LjgsMS43YzIuMiwwLDMuOS0wLjYsNS4yLTEuOXMxLjktMi45LDEuOS00LjhWMTEuM0g2MHogTTU4LjgsMjEuMgoJYy0wLjcsMC43LTEuNSwxLjEtMi42LDEuMXMtMS45LTAuNC0yLjYtMS4xcy0xLTEuNi0xLTIuOGMwLTEuMiwwLjMtMi4xLDEtMi44czEuNS0xLjEsMi42LTEuMXMxLjksMC40LDIuNiwxLjFjMC43LDAuNywxLDEuNiwxLDIuOAoJQzU5LjgsMTkuNSw1OS41LDIwLjQsNTguOCwyMS4yeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzYuNSwxMS4zdjEuOEM3NS42LDExLjcsNzQsMTEsNzIsMTFzLTMuNiwwLjctNC44LDIuMWMtMS4yLDEuNC0xLjgsMy4yLTEuOCw1LjJjMCwyLjEsMC42LDMuOCwxLjgsNS4yCgljMS4yLDEuNCwyLjgsMi4xLDQuOCwyLjFjMS45LDAsMy4zLTAuNiw0LjMtMS45djJjMCwwLjktMC4zLDEuNi0wLjgsMi4xcy0xLjMsMC44LTIuMywwLjhjLTEuNiwwLTIuNi0wLjYtMi44LTEuOWgtNAoJYzAuMSwxLjQsMC44LDIuNiwxLjksMy43czIuOCwxLjcsNC44LDEuN2MyLjIsMCwzLjktMC42LDUuMi0xLjlzMS45LTIuOSwxLjktNC44VjExLjNINzYuNXogTTc1LjQsMjEuMmMtMC43LDAuNy0xLjUsMS4xLTIuNiwxLjEKCXMtMS45LTAuNC0yLjYtMS4xcy0xLTEuNi0xLTIuOGMwLTEuMiwwLjMtMi4xLDEtMi44czEuNS0xLjEsMi42LTEuMXMxLjksMC40LDIuNiwxLjFjMC43LDAuNywxLDEuNiwxLDIuOAoJQzc2LjQsMTkuNSw3NiwyMC40LDc1LjQsMjEuMnoiLz4KPGcgaWQ9Ikdyb3VwLTIiPgoJPGcgaWQ9Ikdyb3VwLTYiPgoJCTxnIGlkPSJHcm91cC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMC4wMzk4MjYpIj4KCQkJPGcgaWQ9IkNsaXAtMiI+CgkJCTwvZz4KCQkJPHBhdGggaWQ9IkZpbGwtMSIgY2xhc3M9InN0MSIgZD0iTTEzLDM2LjNjLTIxLjksMC0xMS42LTM2LjEsMC0zNi4xQzI0LjYsMC4zLDM0LjksMzYuMywxMywzNi4zIi8+CgkJPC9nPgoJCTxwYXRoIGlkPSJGaWxsLTQiIGNsYXNzPSJzdDIiIGQ9Ik0xNy4xLDUuNmMwLjEsMC0xLjMsNC41LTEuMyw1LjRjMCwxLDEsMS41LDEuMywyLjdjMC4xLDAuOS0wLjUsMS43LTAuNCwyLjMKCQkJYzAuMiwwLjksMS43LDAuNiwxLjgsMS41Yy0wLjEsMS4xLTAuOCwxLjctMSwyLjdjMC4zLDAuMSwwLjYsMC4xLDAuNywwLjJzLTMsNC40LTIuNyw1LjNjLTAuNi0wLjcsMC4yLTEuNiwwLjYtMi4zCgkJCWMwLjQtMC44LDAuOS0xLjUsMS4xLTIuM2MtMC4xLTAuMi0wLjYsMC0wLjYtMC4zYzAuMi0xLjIsMS0yLjMsMC45LTNjMC4xLTAuMy0xLjMtMS4zLTIuNC0yYy0wLjgtMC40LTEtMC45LTMuNy0wLjcKCQkJYy0wLjIsMC0wLjctMC4yLTAuNy0wLjVjMC43LDEsMS44LTAuMywzLDBjMC45LDAuMiwyLDAuNywyLjMsMC43YzAuMi0wLjMsMC42LTAuNiwwLjQtMS40Yy0wLjItMC43LTEuMS0xLjEtMS4zLTIKCQkJYy0wLjMtMS4xLDAuNi0zLjMsMC42LTMuM1MxNi45LDUuNiwxNy4xLDUuNiIvPgoJPC9nPgoJPGcgaWQ9IkNsaXAtOCI+Cgk8L2c+CgkKCQk8cmFkaWFsR3JhZGllbnQgaWQ9IkZpbGwtN18xXyIgY3g9Ii0xMjk2LjgzMjgiIGN5PSItMTA5NS42NTE5IiByPSIyLjE5NDciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTYgMCAwIC0xLjA1NDYgLTc3NjcuOTk2NiAtMTExNi40NzQ1KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMzMDQzNDY7c3RvcC1vcGFjaXR5OjAuOTk4NyIvPgoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM0QjU3NTk7c3RvcC1vcGFjaXR5OjAiLz4KCTwvcmFkaWFsR3JhZGllbnQ+Cgk8cGF0aCBpZD0iRmlsbC03IiBjbGFzcz0ic3QzIiBkPSJNMTMsNDJjNy4yLDAsMTMtMS4zLDEzLTNzLTUuOC0zLTEzLTNTMCwzNy4zLDAsMzlTNS44LDQyLDEzLDQyeiIvPgo8L2c+Cjwvc3ZnPgo=`}
            width="80"
            height="80"
            alt="Egg logo"
        />
        </Link>
        <StyledNav>

            {/* <IconTheme
                theme="light"
                size={24}
                color="gray"
                cursor="pointer"
            /> */}

            {
                children
            }
            

        </StyledNav>
        </StyledNavbar>
    )
}

// interface IIconTheme {
//     theme?: string,
//     size?: number,
//     color?: string,
//     cursor?: string,
//     onClick?: () => void,
//     props?: any
// }

// const IconTheme = ({ theme, ...props }: IIconTheme) => {
//     if (theme === 'light') {
//         return <HiMoon {...props} />
//     }
//     return <HiSun {...props}/>
// }


  