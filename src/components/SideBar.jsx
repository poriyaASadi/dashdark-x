import React, { useRef, useState, useEffect } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
export default function SideBar() {
    const menuBar = useRef(null);
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        if (menuBar.current) {
            if (isActive) {
                menuBar.current.classList.add('!-left-[300px]');
            } else {
                menuBar.current.classList.remove('!-left-[300px]');
            }
        }
    }, [isActive]);
    function switchMenu(e) {
        console.log(e.target, 'jidff', e.currentTarget);

        e.stopPropagation();
        setIsActive(prev => !prev);

    }
    return (
        <div ref={menuBar} className='w-[300px] z-10 transition-all duration-300 xl:!left-0 delay-150 fixed xl:relative left-0 top-0 h-screen'>
            <nav className='p-5 bg-Color800 h-full h-screen relative'>
                {
                    isActive ?
                        <div onClick={switchMenu} className='absolute transition-all xl:!hidden duration-150 -right-8 top-10 flex  items-center justify-center w-8 h-11 cursor-pointer bg-Color800  rounded-r-full'>
                            <SettingsIcon style={{ color: '#ffff' }} />
                        </div>
                        : ''
                }
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-1'>
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.55363 0.275879C9.09481 0.275879 8.72287 0.647826 8.72287 1.10665V8.99895H8.72283C3.90521 8.99895 -0.000244141 12.9044 -0.000244141 17.722C-0.000244141 22.5396 3.90521 26.4451 8.72283 26.4451H16.6151C17.074 26.4451 17.4459 26.0731 17.4459 25.6143V17.722H17.4459C22.2636 17.722 26.169 13.8166 26.169 8.99895C26.169 4.18133 22.2636 0.275879 17.4459 0.275879H9.55363ZM17.4459 17.722V9.82971C17.4459 9.37089 17.074 8.99895 16.6151 8.99895H8.72287V16.8913C8.72287 17.3501 9.09481 17.722 9.55363 17.722H17.4459Z" fill="#CB3CFF" />
                            <path d="M9.46 0.275879C9.05288 0.275879 8.72284 0.605917 8.72284 1.01304L8.72284 8.99895H16.7088C17.1159 8.99895 17.4459 9.32899 17.4459 9.73611L17.4459 17.722C22.2635 17.722 26.169 13.8166 26.169 8.99895C26.169 4.18133 22.2635 0.275879 17.4459 0.275879H9.46Z" fill="#00C2FF" />
                        </svg>
                        <p className='text-xl text-Color200 font-500'>Dashdark X</p>
                    </div>
                    <div className='cursor-pointer' onClick={switchMenu}>
                        <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.8">
                                <path d="M14.5 9.55957L17.5 6.55957L14.5 3.55957" stroke="#AEB9E1" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <g opacity="0.8">
                                <path d="M7.49963 3.55957L4.49963 6.55957L7.49963 9.55957" stroke="#AEB9E1" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className='flex items-center my-6 gap-x-2 relative px-3 rounded-md bg-Color700'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.2593 12.9446C10.5321 12.9446 13.1852 10.2915 13.1852 7.0187C13.1852 3.7459 10.5321 1.09277 7.2593 1.09277C3.9865 1.09277 1.33337 3.7459 1.33337 7.0187C1.33337 10.2915 3.9865 12.9446 7.2593 12.9446Z" stroke="#AEB9E1" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.6666 14.4263L11.4444 11.2041" stroke="#AEB9E1" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <input type="text" placeholder='Search for...' className='w-full py-3 placeholder:text-Color300 text-Color300 h-full bg-transparent border-none outline-none' />
                </div>
                <div>
                    <ul className='*:p-3'>
                        <li className='flex cursor-pointer items-center justify-between'>
                            <div className='flex items-center gap-x-2'>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.0683594 6.83355C0.0683594 6.41283 0.249846 6.01216 0.567115 5.73244L6.07891 0.872996C6.643 0.375668 7.49372 0.375668 8.05781 0.872995L13.5696 5.73244C13.8869 6.01216 14.0684 6.41283 14.0684 6.83355V13.0259C14.0684 13.84 13.4021 14.5 12.5802 14.5H1.55656C0.73465 14.5 0.0683594 13.84 0.0683594 13.0259V6.83355Z" fill="#CB3CFF" />
                                </svg>
                                <p className='text-Color300'>Dashboard</p>
                            </div>
                            <div>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                        <path d="M3.25 5L6.25 8L9.25 5" stroke="#AEB9E1" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </div>
                        </li>
                        <li className='flex cursor-pointer items-center justify-between'>
                            <div className='flex items-center gap-x-2'>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.57784 1.06151C6.76629 0.73796 7.23371 0.737959 7.42216 1.06151L9.41868 4.48932C9.48772 4.60785 9.60339 4.69189 9.73745 4.72092L13.6144 5.56047C13.9804 5.63972 14.1248 6.08426 13.8754 6.36347L11.2323 9.32153C11.1409 9.42381 11.0967 9.55979 11.1105 9.69626L11.5101 13.6429C11.5478 14.0155 11.1697 14.2902 10.827 14.1392L7.19701 12.5396C7.07149 12.4843 6.92851 12.4843 6.80299 12.5396L3.17296 14.1392C2.83032 14.2902 2.45216 14.0155 2.48988 13.6429L2.88948 9.69626C2.9033 9.55979 2.85911 9.42381 2.76772 9.32153L0.12464 6.36347C-0.124841 6.08426 0.0196004 5.63972 0.385551 5.56047L4.26255 4.72092C4.39661 4.69189 4.51228 4.60785 4.58132 4.48932L6.57784 1.06151Z" fill="#AEB9E1" />
                                </svg>
                                <p className='text-Color300'>ّّFeatures</p>
                            </div>
                            <div>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                        <path d="M3.25 5L6.25 8L9.25 5" stroke="#AEB9E1" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </div>
                        </li>
                        <li className='flex cursor-pointer items-center justify-between'>
                            <div className='flex items-center gap-x-2'>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.943604 12.7391C0.943604 10.5946 2.68203 8.8562 4.8265 8.8562H9.17356C11.318 8.8562 13.0565 10.5946 13.0565 12.7391C13.0565 13.4539 12.477 14.0334 11.7622 14.0334H2.2379C1.52308 14.0334 0.943604 13.4539 0.943604 12.7391Z" fill="#AEB9E1" />
                                    <path d="M7.00236 7.86972C8.90855 7.86972 10.4538 6.32445 10.4538 4.41826C10.4538 2.51207 8.90855 0.966797 7.00236 0.966797C5.09617 0.966797 3.5509 2.51207 3.5509 4.41826C3.5509 6.32445 5.09617 7.86972 7.00236 7.86972Z" fill="#AEB9E1" />
                                </svg>
                                <p className='text-Color300'>Users</p>
                            </div>
                            <div>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                        <path d="M3.25 5L6.25 8L9.25 5" stroke="#AEB9E1" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </div>
                        </li>
                        <li className='flex cursor-pointer items-center justify-between'>
                            <div className='flex items-center gap-x-2'>
                                <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.00357 0.5C5.51784 0.5 5.93473 0.916896 5.93473 1.43116V1.90222C6.36312 1.90237 6.7873 1.98682 7.18308 2.15076C7.57923 2.31485 7.93917 2.55535 8.24236 2.85855C8.54556 3.16174 8.78607 3.52169 8.95016 3.91783C9.11425 4.31398 9.1987 4.73856 9.1987 5.16734C9.1987 5.68161 8.7818 6.09851 8.26754 6.09851C7.75327 6.09851 7.33637 5.68161 7.33638 5.16734C7.33638 4.98312 7.30009 4.80071 7.22959 4.63051C7.1591 4.46032 7.05577 4.30567 6.9255 4.17541C6.79524 4.04515 6.6406 3.94182 6.4704 3.87132C6.3002 3.80082 6.11779 3.76454 5.93357 3.76454H3.833C3.46095 3.76454 3.10414 3.91233 2.84107 4.17541C2.57799 4.43849 2.43019 4.7953 2.43019 5.16734C2.43019 5.53939 2.57799 5.8962 2.84107 6.15928C3.10414 6.42235 3.46095 6.57015 3.833 6.57015H6.40036C7.26633 6.57015 8.09683 6.91415 8.70916 7.52648C9.32149 8.13881 9.66549 8.96931 9.66549 9.83528C9.66549 10.7012 9.32149 11.5317 8.70916 12.1441C8.09683 12.7564 7.26633 13.1004 6.40036 13.1004H5.93473V13.5688C5.93473 14.0831 5.51784 14.5 5.00357 14.5C4.48931 14.5 4.07241 14.0831 4.07241 13.5688V13.1004H3.5996C2.73364 13.1004 1.90314 12.7564 1.29081 12.1441C0.678476 11.5317 0.334473 10.7012 0.334473 9.83528C0.334473 9.32101 0.751368 8.90412 1.26563 8.90412C1.7799 8.90412 2.1968 9.32101 2.1968 9.83528C2.1968 10.2073 2.34459 10.5641 2.60767 10.8272C2.87075 11.0903 3.22756 11.2381 3.5996 11.2381H4.96485C4.97769 11.2376 4.9906 11.2373 5.00357 11.2373C5.01654 11.2373 5.02945 11.2376 5.0423 11.2381H6.40036C6.77241 11.2381 7.12922 11.0903 7.3923 10.8272C7.65537 10.5641 7.80317 10.2073 7.80317 9.83528C7.80317 9.46323 7.65537 9.10642 7.3923 8.84335C7.12922 8.58027 6.77241 8.43247 6.40036 8.43247H3.833C2.96703 8.43247 2.13653 8.08847 1.5242 7.47614C0.911873 6.86381 0.567869 6.03331 0.567869 5.16734C0.567869 4.30138 0.911873 3.47088 1.5242 2.85855C2.13653 2.24622 2.96703 1.90221 3.833 1.90221H4.07241V1.43116C4.07241 0.916896 4.48931 0.5 5.00357 0.5Z" fill="#AEB9E1" />
                                </svg>
                                <p className='text-Color300'>Pricing</p>
                            </div>
                            <div>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                        <path d="M3.25 5L6.25 8L9.25 5" stroke="#AEB9E1" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </div>
                        </li>
                        <li className='flex cursor-pointer items-center justify-between'>
                            <div className='flex items-center gap-x-2'>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.36257 13.7199C3.21408 13.7199 3.07168 13.6609 2.96668 13.5559C2.86169 13.4509 2.8027 13.3085 2.8027 13.1601V10.1718C2.49555 10.3183 2.15515 10.3811 1.81594 10.3537C1.52872 10.3326 1.24969 10.2485 0.998699 10.1073C0.747707 9.96605 0.530926 9.77125 0.363785 9.53673C0.196643 9.30221 0.0832509 9.03372 0.0316773 8.75039C-0.0198963 8.46705 -0.00838304 8.17584 0.0653976 7.89746C0.139178 7.61908 0.273412 7.36039 0.458547 7.13979C0.643681 6.91919 0.875164 6.74211 1.13652 6.62116C1.39788 6.5002 1.68268 6.43834 1.97067 6.43998C2.25865 6.44161 2.54274 6.50671 2.8027 6.63063V3.64235C2.8027 3.49387 2.86169 3.35146 2.96668 3.24647C3.07168 3.14147 3.21408 3.08249 3.36257 3.08249H6.63078C6.48426 2.77534 6.42149 2.43493 6.44882 2.09573C6.46992 1.80851 6.55408 1.52948 6.69529 1.27848C6.8365 1.02749 7.0313 0.810711 7.26582 0.64357C7.50035 0.476429 7.76883 0.363036 8.05217 0.311462C8.3355 0.259889 8.62672 0.271402 8.9051 0.345183C9.18347 0.418963 9.44217 0.553198 9.66276 0.738332C9.88336 0.923466 10.0604 1.15495 10.1814 1.41631C10.3024 1.67766 10.3642 1.96247 10.3626 2.25045C10.3609 2.53844 10.2958 2.82252 10.1719 3.08249H13.4401C13.5886 3.08249 13.731 3.14147 13.836 3.24647C13.941 3.35146 14 3.49387 14 3.64235V6.63063C13.6929 6.48411 13.3524 6.42134 13.0132 6.44867C12.726 6.46978 12.447 6.55393 12.196 6.69514C11.945 6.83635 11.7282 7.03115 11.5611 7.26568C11.3939 7.5002 11.2805 7.76868 11.229 8.05202C11.1774 8.33535 11.1889 8.62657 11.2627 8.90495C11.3365 9.18333 11.4707 9.44202 11.6558 9.66262C11.841 9.88321 12.0725 10.0603 12.3338 10.1812C12.5952 10.3022 12.88 10.3641 13.168 10.3624C13.456 10.3608 13.74 10.2957 14 10.1718V13.1601C14 13.3085 13.941 13.4509 13.836 13.5559C13.731 13.6609 13.5886 13.7199 13.4401 13.7199H3.36257Z" fill="#AEB9E1" />
                                </svg>

                                <p className='text-Color300'>ّّIntegrations</p>
                            </div>
                            <div>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                        <path d="M3.25 5L6.25 8L9.25 5" stroke="#AEB9E1" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div className='w-full bg-Color1 my-5 h-0.5'></div>
                        </li>
                        <li className='flex cursor-pointer items-center justify-between'>
                            <div className='flex items-center gap-x-2'>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25563 0.5C4.97949 0.5 4.75563 0.723857 4.75563 1V3.61548L2.49258 2.30863C2.25344 2.17054 1.94767 2.25247 1.80962 2.49163L0.0674686 5.50976C-0.0705809 5.74892 0.011364 6.05475 0.250498 6.19284L2.51356 7.49969L0.250389 8.8066C0.011255 8.94469 -0.0706902 9.25052 0.0673594 9.48968L1.80952 12.5078C1.94757 12.747 2.25333 12.8289 2.49247 12.6908L4.75563 11.3839V14C4.75563 14.2761 4.97949 14.5 5.25563 14.5H8.73978C9.01593 14.5 9.23978 14.2761 9.23978 14V11.3839L11.5063 12.6928C11.7455 12.8309 12.0512 12.7489 12.1893 12.5098L13.9314 9.49163C14.0695 9.25247 13.9876 8.94665 13.7484 8.80855L11.4819 7.49969L13.7483 6.19088C13.9874 6.05279 14.0694 5.74697 13.9313 5.50781L12.1892 2.48968C12.0511 2.25052 11.7454 2.16859 11.5062 2.30668L9.23978 3.61549V1C9.23978 0.723858 9.01593 0.5 8.73979 0.5H5.25563ZM6.99914 9.37256C8.03324 9.37256 8.87155 8.53408 8.87155 7.49976C8.87155 6.46544 8.03324 5.62695 6.99914 5.62695C5.96503 5.62695 5.12672 6.46544 5.12672 7.49976C5.12672 8.53408 5.96503 9.37256 6.99914 9.37256Z" fill="#AEB9E1" />
                                </svg>

                                <p className='text-Color300'>Settings</p>
                            </div>
                            <div>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                        <path d="M3.25 5L6.25 8L9.25 5" stroke="#AEB9E1" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </div>
                        </li>
                        <li className='flex cursor-pointer items-center justify-between'>
                            <div className='flex items-center gap-x-2 '>
                                <div className='w-10 h-10 rounded-full bg-Color1'>
                                    <img src="/images/Photo (1).png" alt="ProfileUser" className='w-full h-full rounded-full object-cover' />
                                </div>
                                <div className='*:text-white'>
                                    <p className='text-Color300'>Settings</p>
                                    <span className='text-xs'>Account settings</span>
                                </div>
                            </div>
                            <div>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                        <path d="M3.25 5L6.25 8L9.25 5" stroke="#AEB9E1" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
