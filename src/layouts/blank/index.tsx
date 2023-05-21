import { Outlet } from "react-router-dom";

export const BlankLayout = ({ children, ...props}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return (
    <main {...props}>
      {children}
      
      <Outlet />
    </main>
  )
}