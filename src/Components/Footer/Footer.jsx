import React from 'react'
import SimpleReactFooter from "simple-react-footer";

export default function Footer() {
    const description = " ";
  const title = "Print Order";
  const columns = [
    {
        title: "Resources",
        resources: [
            {
                name: "About",
                link: "/about"
            },
            {
                name: "Careers",
                link: "/careers"
            },
            {
                name: "Contact",
                link: "/contact"
            },
            {
                name: "Admin",
                link: "/admin"
            }
        ]
    },
    {
        title: "Legal",
        resources: [
            {
                name: "Privacy",
                link: "/privacy"
            },
            {
                name: "Terms",
                link: "/terms"
            }
        ]
    },
    {
        title: "Visit",
        resources: [
            {
                name: "Locations",
                link: "/locations"
            },
            {
                name: "Culture",
                link: "/culture"
            }
        ]
    }
 ];
  return (
    // <div className='footer-container'>
        <SimpleReactFooter id='#contact'
            description={description} 
            title={title}
            columns={columns}
            linkedin="fluffy_cat_on_linkedin"
            facebook="fluffy_cat_on_fb"
            twitter="fluffy_cat_on_twitter"
            instagram="fluffy_cat_live"
            youtube="UCFt6TSF464J8K82xeA?"
            pinterest="fluffy_cats_collections"
            copyright="black"
            iconColor="black"
            backgroundColor="#C4c4c4"
            fontColor="black"
            copyrightColor="darkgrey"
        />
    // </div>
  )
}

// export default Footer