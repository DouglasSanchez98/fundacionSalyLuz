import React from 'react'
import { FaGithub, FaLinkedin,FaTiktok } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { AiFillFacebook,AiFillInstagram } from "react-icons/ai"

const SocialLinksRamos = () => {
    const links = [
       /* {
            id: 1,
            child: (
                <>
                    Tiktok <FaTiktok size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/douglas-sanchez-pardo-5688a0145/',
            style: 'rounded-tr-md'
        },*/
        {
            id: 1,
            child: (
                <>
                    Facebook <AiFillFacebook size={30} />
                </>
            ),
            href: 'https://www.facebook.com/fundaciondanielito',
        },
        {
            id: 2,
            child: (
                <>
                    Instagram <AiFillInstagram size={30} />
                </>
            ),
            href: 'https://www.instagram.com/fund.danielito?igsh=MW10b28zbWNldzI2bQ==',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href:'mailto:jrdouglas98@gmail.com',
            style: 'rounded-br-md',
            
        }
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] -left-4 fixed bg-green-one rounded-md z-40'>
    <ul>
        {links.map(({ id, child, href, style, download }) => (
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[10px] hover:rounded-md duration-300 bg-gray-500" + "" + style}>
                <a href={href}
                    className="flex justify-between items-center w-full text-white"
                    download={download}
                    target="_blank"
                    rel="noreferrer">
                   
                       {child}
                    
                </a>
            </li>

        ))}

    </ul>

</div>
  )
}

export default SocialLinksRamos