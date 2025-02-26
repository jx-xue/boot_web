/// <reference types="vite/client" />
type MyRouter = {
    path: string,
    name: string,
    description: string,
}
type Link = {
    id: number,
    description: string
}
type LeftNavigation = {
    id: number,
    description: string,
    children: Link[]
}