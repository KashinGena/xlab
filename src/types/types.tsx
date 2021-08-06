export interface INavItem  {
    title:string,
    path:string,
    icon:any,
    nested:INavItem[] | any[] 
}