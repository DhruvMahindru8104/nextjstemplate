'use client'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from 'framer-motion'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet"

import { ModeToggle } from '@/components/ui/toggle'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


function Navbar() {
  const pathname = usePathname(); // Get current path
  return (
    <>
    {/* <div className='overflow-hidden'> */}
    <motion.nav className='flex justify-between items-center   p-2 '
      initial={{opacity:0,y:-40}}
      whileInView={{opacity:1,y:0}}
      transition={{ease:'easeInOut',duration:0.6}}
    >

{/* logo area start */}
<div className='flex items-center w-[40%] gap-1  '>
<Avatar className='h-[2rem] w-[2rem]' >
  <AvatarImage src="https://github.com/shadcn.png" className='object-cover' />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<span className='text-sm md:text-xl font-semibold '>CompanyName</span>
</div>
{/*  logo area end */}

{/* list of link start */}
<ul className='md:flex md:gap-4 hidden'>
      <li className={clsx('hover:text-blue-400', pathname === '/' && 'text-blue-400')}>
        <Link href='/'>Home</Link>
      </li>
      <li className={clsx('hover:text-blue-400', pathname === '/about' && 'text-blue-400')}>
        <Link href='/about'>About</Link>
      </li>
      <li className={clsx('hover:text-blue-400', pathname === '/contact' && 'text-blue-400')}>
        <Link href='/contact'>Contact Us</Link>
      </li>
      <li className={clsx('hover:text-blue-400', pathname === '/alumni' && 'text-blue-400')}>
        <Link href='/alumni'>Alumni</Link>
      </li>

      {/* dropdown start  */}
      <li className={clsx('hover:text-blue-400', pathname === '/more' && 'text-blue-400')}>
   
      <DropdownMenu>
  <DropdownMenuTrigger className='flex items-center'>Student Support<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Support</DropdownMenuLabel>
    <DropdownMenuSeparator/>
    <a href="https://collegeadmissions.gndu.ac.in/studentArea/GNDUEXAMRESULT.aspx" target='_blank'><DropdownMenuItem>Check Result</DropdownMenuItem></a>
    <a href="https://a2zpaper.com/gndu" target='_blank'><DropdownMenuItem>Previous Year Question Paper</DropdownMenuItem></a>
<a href="https://collegeadmissions.gndu.ac.in/StudentArea/ViewDateSheet.aspx" target='_blank'>    <DropdownMenuItem>Datesheet</DropdownMenuItem></a>
  </DropdownMenuContent>
</DropdownMenu>

      </li>
{/* dropdown end */}
    </ul>
{/* list of link end  */}



{/* dark mode and hamburger start */}
<div className='flex items-center'>
<ModeToggle /> {/* this will enable on md not sm */}
{/* hamburger on */}
<div className='md:hidden'>
<Sheet  >
  <SheetTrigger className='px-6'><svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></SheetTrigger>
  <SheetContent> 
    <SheetTitle></SheetTitle>    
    <ul className='flex-col'>
      <li className={clsx('hover:text-blue-400', pathname === '/' && 'text-blue-400')}>
      <SheetClose asChild><Link href='/' className='flex items-center gap-1'> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>Home</Link></SheetClose>
      </li>
      <li className={clsx('hover:text-blue-400', pathname === '/about' && 'text-blue-400')}>
        <SheetClose asChild><Link href='/about' className='flex items-center gap-1' ><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>About</Link></SheetClose>
      </li>
      <li className={clsx('hover:text-blue-400', pathname === '/contact' && 'text-blue-400')}>
        <SheetClose asChild><Link href='/contact' className='flex items-center gap-1'><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2.5C4 2.22386 4.22386 2 4.5 2H10.5C10.7761 2 11 2.22386 11 2.5V12.5C11 12.7761 10.7761 13 10.5 13H4.5C4.22386 13 4 12.7761 4 12.5V2.5ZM4.5 1C3.67157 1 3 1.67157 3 2.5V12.5C3 13.3284 3.67157 14 4.5 14H10.5C11.3284 14 12 13.3284 12 12.5V2.5C12 1.67157 11.3284 1 10.5 1H4.5ZM6 11.65C5.8067 11.65 5.65 11.8067 5.65 12C5.65 12.1933 5.8067 12.35 6 12.35H9C9.1933 12.35 9.35 12.1933 9.35 12C9.35 11.8067 9.1933 11.65 9 11.65H6Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>Contact Us</Link></SheetClose>
      </li>
      <li className={clsx('hover:text-blue-400', pathname === '/alumni' && 'text-blue-400')}>
        <SheetClose asChild><Link href='/alumni' className='flex items-center gap-1'><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>Alumni</Link></SheetClose>
      </li>
      <li>
        
      <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className='no-underline'>Student support </AccordionTrigger>
    <AccordionContent className='flex-col gap-1'>
    <div  className='hover:text-blue-500'><a href="https://collegeadmissions.gndu.ac.in/studentArea/GNDUEXAMRESULT.aspx"  target='_blank'>Check Result</a></div>
    <div className='hover:text-blue-500'><a href="https://a2zpaper.com/gndu" target='_blank'>Previous Year Question Paper</a></div>
<div className='hover:text-blue-500'><a href="https://collegeadmissions.gndu.ac.in/StudentArea/ViewDateSheet.aspx" target='_blank'>Datesheet</a></div>
    </AccordionContent>
  </AccordionItem>
</Accordion>

      </li>
      </ul>
        
    
  </SheetContent>
</Sheet>
</div>
{/* hamburger end */}

</div>
{/* dark mode and hamburger end */}


    </motion.nav>
      {/* </div> */}
    </>
  )
}

export default Navbar
