import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
export default function CardBox() {
    return (
        <div className=' bg-Color700 w-full h-[100px] *:py-1 rounded-xl p-3.5'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-x-1'>
                    <p>Pageviews</p>
                </div>
                <span>
                    <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.10002 2.78896C7.7753 2.78896 8.32273 2.24213 8.32273 1.56758C8.32273 0.893025 7.7753 0.346191 7.10002 0.346191C6.42474 0.346191 5.87732 0.893025 5.87732 1.56758C5.87732 2.24213 6.42474 2.78896 7.10002 2.78896Z" fill="#D9E1FA" />
                        <path d="M12.8772 2.78896C13.5525 2.78896 14.0999 2.24213 14.0999 1.56758C14.0999 0.893025 13.5525 0.346191 12.8772 0.346191C12.202 0.346191 11.6545 0.893025 11.6545 1.56758C11.6545 2.24213 12.202 2.78896 12.8772 2.78896Z" fill="#D9E1FA" />
                        <path d="M1.32268 2.78896C1.99796 2.78896 2.54538 2.24213 2.54538 1.56758C2.54538 0.893025 1.99796 0.346191 1.32268 0.346191C0.647399 0.346191 0.0999756 0.893025 0.0999756 1.56758C0.0999756 2.24213 0.647399 2.78896 1.32268 2.78896Z" fill="#D9E1FA" />
                    </svg>
                </span>
            </div>
            <div className='flex items-center gap-x-3'>
                <h3>50.8k</h3>
                <span className='flex items-center p-1 rounded-md text-ColorGreen'>
                    28.4%
                    <TrendingUpIcon/>
                </span>
            </div>
        </div>
    )
}
