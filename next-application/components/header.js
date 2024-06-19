import Link from 'next/link'
import classes from '../components/header.module.css'

export default function Header(){
    return(
        <div id={classes['header-container']}>
        <div id={classes['inner-header-list']}>
<Link href='/'>Home</Link>

<Link href='/parks'>Parks</Link>

<Link href='/blog'>Blog</Link>

<Link href='/'>Photography</Link>
 
<Link href='/'>Events</Link>

<Link href='/'>About</Link>
<Link href='/'>Contact</Link>
        
</div>
        
        </div>
    )
}