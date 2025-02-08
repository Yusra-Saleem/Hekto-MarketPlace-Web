import { SignInButton } from '@clerk/nextjs';
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

function TopHeader() {
    return (
      <div className='w-full bg-[#7E33E0] text-white px-[30px] md:px-[135px] sm:h-[40px] flex justify-center h-[30px] lg:h-[44px] xl:h-[44px] '>
        <div className="flex w-full md:w-[1177px]  mx-auto justify-center">
          <div className="flex w-full md:w-[1177px] justify-between">
            {/* Left side */}
            <div className='flex items-center  gap-x-12'>
              <h1 className='text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>
               
                
                <span className="flex  text-xs md:text-[14px] lg:text-[14px] gap-4 items-center">
                  <span>
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6666 0.666626H2.33325C1.80282 0.666626 1.29411 0.87734 0.919038 1.25241C0.543966 1.62749 0.333252 2.13619 0.333252 2.66663V9.33329C0.333252 9.86372 0.543966 10.3724 0.919038 10.7475C1.29411 11.1226 1.80282 11.3333 2.33325 11.3333H11.6666C12.197 11.3333 12.7057 11.1226 13.0808 10.7475C13.4559 10.3724 13.6666 9.86372 13.6666 9.33329V2.66663C13.6666 2.13619 13.4559 1.62749 13.0808 1.25241C12.7057 0.87734 12.197 0.666626 11.6666 0.666626ZM2.33325 1.99996H11.6666C11.8434 1.99996 12.013 2.0702 12.138 2.19522C12.263 2.32025 12.3333 2.48981 12.3333 2.66663L6.99992 5.91996L1.66659 2.66663C1.66659 2.48981 1.73682 2.32025 1.86185 2.19522C1.98687 2.0702 2.15644 1.99996 2.33325 1.99996ZM12.3333 9.33329C12.3333 9.5101 12.263 9.67967 12.138 9.8047C12.013 9.92972 11.8434 9.99996 11.6666 9.99996H2.33325C2.15644 9.99996 1.98687 9.92972 1.86185 9.8047C1.73682 9.67967 1.66659 9.5101 1.66659 9.33329V4.18663L6.65325 7.23329C6.7546 7.2918 6.86956 7.32261 6.98659 7.32261C7.10361 7.32261 7.21857 7.2918 7.31992 7.23329L12.3333 4.18663V9.33329Z" fill="white"/>
</svg>

                  </span>
                mhhasanul@gmail.com
                </span>
              </h1>
              <span className="hidden md:flex gap-4 items-center">
                <span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0441 13.666H10.0627C10.4147 13.666 10.7474 13.5274 10.9994 13.2754L12.8074 11.4674C12.8694 11.4055 12.9185 11.332 12.9521 11.2512C12.9856 11.1703 13.0029 11.0836 13.0029 10.996C13.0029 10.9085 12.9856 10.8218 12.9521 10.7409C12.9185 10.66 12.8694 10.5866 12.8074 10.5247L10.1407 7.85804C10.0789 7.79608 10.0054 7.74692 9.92453 7.71338C9.84365 7.67984 9.75695 7.66257 9.6694 7.66257C9.58184 7.66257 9.49514 7.67984 9.41427 7.71338C9.33339 7.74692 9.25992 7.79608 9.19806 7.85804L8.1354 8.92071C7.64273 8.77404 6.7234 8.44071 6.14073 7.85804C5.55806 7.27537 5.22473 6.35604 5.07806 5.86337L6.14073 4.80071C6.20269 4.73885 6.25185 4.66538 6.28539 4.5845C6.31893 4.50363 6.3362 4.41693 6.3362 4.32937C6.3362 4.24182 6.31893 4.15512 6.28539 4.07425C6.25185 3.99337 6.20269 3.9199 6.14073 3.85804L3.47406 1.19137C3.34661 1.07108 3.17799 1.00406 3.00273 1.00406C2.82747 1.00406 2.65885 1.07108 2.5314 1.19137L0.724063 2.99937C0.47073 3.25271 0.328063 3.60071 0.333396 3.95604C0.34873 4.90537 0.600063 8.20271 3.19873 10.8014C5.7974 13.4 9.09473 13.6507 10.0441 13.666ZM3.0034 2.60537L4.7274 4.32937L3.8654 5.19137C3.78695 5.2696 3.72933 5.36621 3.69777 5.47241C3.66622 5.5786 3.66173 5.691 3.68473 5.79937C3.70073 5.87604 4.09206 7.69404 5.19873 8.80071C6.3054 9.90737 8.1234 10.2987 8.20006 10.3147C8.30843 10.3378 8.42087 10.3334 8.52708 10.3018C8.6333 10.2703 8.72991 10.2126 8.80806 10.134L9.67006 9.27204L11.3941 10.996L10.0567 12.3327C9.22473 12.3187 6.37806 12.0954 4.1414 9.85804C1.8974 7.61404 1.68006 4.75737 1.66673 3.94204L3.0034 2.60537ZM12.3327 6.33271H13.6661C13.6661 2.91271 11.0841 0.333374 7.6594 0.333374V1.66671C10.3674 1.66671 12.3327 3.62871 12.3327 6.33271Z" fill="white"/>
</svg>
</span >
(12345)67890
</span>
            </div>
  
            {/* Right side */}
            <div className='flex items-center gap-2 bg-transparent'>
            <select id="language" className='hidden md:inline-block bg-transparent text-[12px] sm:text-base cursor-pointer text-white border-none outline-none focus:outline-none focus:border-none  '>
          <option value="en" selected className='bg-black border-none outline-none  '>English</option>
          <option value="fr"  className='bg-black'>French</option>
          <option value="es"  className='bg-black'>Spanish</option>
          <option value="de"  className='bg-black'>German</option>
        </select>
        <select id="language" className='hidden md:inline-block bg-transparent text-[12px] sm:text-base cursor-pointer text-white border-none outline-none focus:outline-none focus:border-none  '>
          <option value="en" selected className=' bg-black border-none outline-none  '>USD</option>
          <option value="fr"  className='bg-black'>PKR</option>
          <option value="es"  className='bg-black'>IND</option>
          <option value="de"  className='bg-black'>EUR</option>
        </select>


        <span className="flex gap-2 items-center ml-2">
        <SignInButton mode="redirect">
                   
                 
        <span>Login
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2C8.49445 2 8.9778 2.14662 9.38893 2.42133C9.80005 2.69603 10.1205 3.08648 10.3097 3.54329C10.4989 4.00011 10.5484 4.50277 10.452 4.98773C10.3555 5.47268 10.1174 5.91814 9.76777 6.26777C9.41814 6.6174 8.97268 6.8555 8.48773 6.95196C8.00277 7.04843 7.50011 6.99892 7.04329 6.8097C6.58648 6.62048 6.19603 6.30005 5.92133 5.88893C5.64662 5.4778 5.5 4.99445 5.5 4.5C5.5 3.83696 5.76339 3.20107 6.23223 2.73223C6.70108 2.26339 7.33696 2 8 2ZM8 1C7.30777 1 6.63108 1.20527 6.05551 1.58986C5.47993 1.97444 5.03133 2.52107 4.76642 3.16061C4.50152 3.80015 4.4322 4.50388 4.56725 5.18282C4.7023 5.86175 5.03564 6.48539 5.52513 6.97487C6.01461 7.46436 6.63825 7.7977 7.31719 7.93275C7.99612 8.0678 8.69985 7.99848 9.33939 7.73358C9.97893 7.46867 10.5256 7.02007 10.9101 6.4445C11.2947 5.86892 11.5 5.19223 11.5 4.5C11.5 3.57174 11.1313 2.6815 10.4749 2.02513C9.8185 1.36875 8.92826 1 8 1Z" fill="white"/>
<path d="M13 15H12V12.5C12 12.1717 11.9353 11.8466 11.8097 11.5433C11.6841 11.24 11.4999 10.9644 11.2678 10.7322C11.0356 10.5001 10.76 10.3159 10.4567 10.1903C10.1534 10.0647 9.8283 10 9.5 10H6.5C5.83696 10 5.20107 10.2634 4.73223 10.7322C4.26339 11.2011 4 11.837 4 12.5V15H3V12.5C3 11.5717 3.36875 10.6815 4.02513 10.0251C4.6815 9.36875 5.57174 9 6.5 9H9.5C10.4283 9 11.3185 9.36875 11.9749 10.0251C12.6313 10.6815 13 11.5717 13 12.5V15Z" fill="white"/>
</svg>
</SignInButton>

        </span>

        <Link href="/wishlist" className="flex items-center">
        <span className="flex gap-2 items-center ml-2">
       
        <span className="hidden md:block">Wishlist
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4401 2.07329C11.7323 1.3653 10.7939 0.934841 9.79559 0.860211C8.79726 0.785581 7.8053 1.07173 7.0001 1.66662C6.15187 1.03572 5.0961 0.749631 4.04538 0.865982C2.99467 0.982333 2.02706 1.49248 1.33742 2.29368C0.647773 3.09488 0.287317 4.12764 0.328636 5.18397C0.369956 6.2403 0.809981 7.24174 1.5601 7.98662L6.52677 12.9533C6.58874 13.0158 6.66248 13.0654 6.74372 13.0992C6.82496 13.1331 6.91209 13.1505 7.0001 13.1505C7.08811 13.1505 7.17525 13.1331 7.25649 13.0992C7.33773 13.0654 7.41146 13.0158 7.47344 12.9533L12.4401 7.98662C12.8285 7.59844 13.1367 7.13752 13.3469 6.6302C13.5571 6.12288 13.6654 5.57911 13.6654 5.02996C13.6654 4.4808 13.5571 3.93703 13.3469 3.42971C13.1367 2.92239 12.8285 2.46147 12.4401 2.07329ZM11.5001 7.04662L7.0001 11.54L2.5001 7.04662C2.10355 6.64842 1.83342 6.14199 1.72359 5.59085C1.61376 5.03971 1.66912 4.46841 1.88274 3.94862C2.09635 3.42883 2.4587 2.98369 2.92433 2.66904C3.38996 2.35439 3.93814 2.18425 4.5001 2.17996C5.25084 2.1818 5.97017 2.48151 6.5001 3.01329C6.56208 3.07578 6.63581 3.12537 6.71705 3.15922C6.79829 3.19306 6.88543 3.21049 6.97344 3.21049C7.06144 3.21049 7.14858 3.19306 7.22982 3.15922C7.31106 3.12537 7.38479 3.07578 7.44677 3.01329C7.99232 2.54055 8.6971 2.29272 9.41846 2.31997C10.1398 2.34723 10.8239 2.64752 11.3322 3.16008C11.8405 3.67264 12.1352 4.35918 12.1564 5.08075C12.1777 5.80232 11.924 6.50502 11.4468 7.04662H11.5001Z" fill="white"/>
</svg>

        </span>
</Link>


        <Link href="/cart" className="flex items-center">
                <ShoppingCart className="text-foreground" />
                
              </Link>
        {/* <span className="ml-1 flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 4.25C2.5 4.05109 2.57902 3.86032 2.71967 3.71967C2.86032 3.57902 3.05109 3.5 3.25 3.5H3.808C4.758 3.5 5.328 4.139 5.653 4.733C5.87 5.129 6.027 5.588 6.15 6.004C6.18327 6.00137 6.21663 6.00004 6.25 6H18.748C19.578 6 20.178 6.794 19.95 7.593L18.122 14.002C17.9581 14.5769 17.6114 15.0827 17.1343 15.4428C16.6572 15.803 16.0758 15.9979 15.478 15.998H9.53C8.92749 15.998 8.34165 15.8002 7.86252 15.4349C7.3834 15.0696 7.0375 14.557 6.878 13.976L6.118 11.204L4.858 6.956L4.857 6.948C4.701 6.381 4.555 5.85 4.337 5.454C4.128 5.069 3.96 5 3.809 5H3.25C3.05109 5 2.86032 4.92098 2.71967 4.78033C2.57902 4.63968 2.5 4.44891 2.5 4.25ZM7.573 10.84L8.324 13.579C8.474 14.121 8.967 14.498 9.53 14.498H15.478C15.7497 14.498 16.014 14.4095 16.2309 14.2458C16.4478 14.0821 16.6054 13.8523 16.68 13.591L18.417 7.5H6.585L7.559 10.787L7.573 10.84Z" fill="white"/>
<path d="M11 19C11 19.5304 10.7893 20.0391 10.4142 20.4142C10.0391 20.7893 9.53043 21 9 21C8.46957 21 7.96086 20.7893 7.58579 20.4142C7.21071 20.0391 7 19.5304 7 19C7 18.4696 7.21071 17.9609 7.58579 17.5858C7.96086 17.2107 8.46957 17 9 17C9.53043 17 10.0391 17.2107 10.4142 17.5858C10.7893 17.9609 11 18.4696 11 19ZM9.5 19C9.5 18.8674 9.44732 18.7402 9.35355 18.6464C9.25979 18.5527 9.13261 18.5 9 18.5C8.86739 18.5 8.74021 18.5527 8.64645 18.6464C8.55268 18.7402 8.5 18.8674 8.5 19C8.5 19.1326 8.55268 19.2598 8.64645 19.3536C8.74021 19.4473 8.86739 19.5 9 19.5C9.13261 19.5 9.25979 19.4473 9.35355 19.3536C9.44732 19.2598 9.5 19.1326 9.5 19Z" fill="white"/>
<path d="M18 19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21C15.4696 21 14.9609 20.7893 14.5858 20.4142C14.2107 20.0391 14 19.5304 14 19C14 18.4696 14.2107 17.9609 14.5858 17.5858C14.9609 17.2107 15.4696 17 16 17C16.5304 17 17.0391 17.2107 17.4142 17.5858C17.7893 17.9609 18 18.4696 18 19ZM16.5 19C16.5 18.8674 16.4473 18.7402 16.3536 18.6464C16.2598 18.5527 16.1326 18.5 16 18.5C15.8674 18.5 15.7402 18.5527 15.6464 18.6464C15.5527 18.7402 15.5 18.8674 15.5 19C15.5 19.1326 15.5527 19.2598 15.6464 19.3536C15.7402 19.4473 15.8674 19.5 16 19.5C16.1326 19.5 16.2598 19.4473 16.3536 19.3536C16.4473 19.2598 16.5 19.1326 16.5 19Z" fill="white"/>
</svg>
</span> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default TopHeader;
  