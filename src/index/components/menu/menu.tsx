
import type { SVGProps } from 'react';
import'../menu/menu.css'


export function Menu(props: SVGProps<SVGSVGElement> ) {


	return (

    <div>
    <svg id='menu' xmlns="http://www.w3.org/2000/svg" 
    width="1em" 
    height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2.5} d="M5 7h14M5 12h14M5 17h14" />
  
    </svg>


    </div>
    )
}