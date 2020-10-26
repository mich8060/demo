import React from 'react'
import './branding.scss'

function Branding(){
    return(
        <div className="branding">
            <span className="branding--mark">
                <svg aria-hidden="true" viewBox="0 0 32 32" data-css-6eqggq="">
                    <g>
                        <path d="M0 0V32H32V0H0ZM9.4053 12.7438L15.088 16L9.4053 19.287V12.7438ZM9.4053 24.8503V21.6468L19.1842 16L9.4053 10.3532V7.17166L24.6955 16L9.4053 24.8503Z" fill="url(#prism-skills-gradient)"></path>
                    </g>
                </svg>
            </span>
            <span className="branding--type">
                <svg fill="none" height="32" viewBox="0 0 82 32" width="82" xmlns="http://www.w3.org/2000/svg">
                    <path d="m10.5117 17.9361-2.5117 2.9996c1.78692 1.57 4.358 2.3753 7.2095 2.3634 3.7734 0 6.2019-1.8059 6.2019-4.765v-.0405c0-2.8399-2.4095-3.8858-6.0023-4.5505-1.4852-.2812-1.8677-.5218-1.8677-.9054v-.0309c0-.3455.3231-.5838 1.0241-.5838 1.5142.0176 2.9861.5026 4.2155 1.389l2.2906-3.1806c-1.6277-1.28653-3.6356-1.93218-6.3445-1.93218-3.8756 0-5.96195 2.07278-5.96195 4.75068v.0405c0 2.9757 2.76835 3.8834 5.92155 4.5267 1.5065.3026 1.9461.5242 1.9461.9268v.0381c0 .3836-.3611.6052-1.2047.6052-1.7755.0081-3.504-.5724-4.9164-1.6511zm16.6822-8.97626h-4.6978v14.08526h4.6978v-2.9948l1.2047-1.4676 2.7493 4.4672h5.5937l-4.9901-7.9718 4.9022-6.12302h-5.4654l-3.9944 5.27482zm10.3979-.00086h4.6978v14.08522h-4.6978zm10.6412 0h-4.6978v14.08522h11.3037v-4.0216h-6.6059zm7.6264 0h4.6978v10.06362h6.6059v4.0216h-11.3037zm14.0722 8.97712-2.5117 2.9996c1.7893 1.57 4.3604 2.3753 7.2095 2.3634 3.7734 0 6.2019-1.8059 6.2019-4.765v-.0405c0-2.8399-2.4095-3.8858-6.0023-4.5505-1.4852-.2812-1.8677-.5218-1.8677-.9054v-.0309c0-.3455.3113-.5838 1.0241-.5838 1.5142.0176 2.9861.5026 4.2155 1.389l2.2906-3.1806c-1.6277-1.28653-3.6356-1.93218-6.3445-1.93218-3.8756 0-5.9643 2.07278-5.9643 4.75068v.0405c0 2.9757 2.773 3.8834 5.9239 4.5267 1.5066.3026 1.9461.5242 1.9461.9268v.0381c0 .3836-.3611.6052-1.2047.6052-1.7755.0081-3.504-.5724-4.9164-1.6511z"></path>
                </svg>
            </span>
            <svg>
                <defs>
                    <linearGradient id="prism-skills-gradient" x1="45.6377" y1="47.4727" x2="-32.2436" y2="-35.2537" gradientUnits="userSpaceOnUse">
                        <stop offset="0.03" stopColor="#F05A28"></stop>
                        <stop offset="0.93" stopColor="#EB008B"></stop>
                    </linearGradient>
                    <linearGradient id="prism-flow-gradient" x1="46.248" y1="48.2732" x2="-33.2531" y2="-36.1648" gradientUnits="userSpaceOnUse">
                        <stop offset="0.15" stopColor="#27AAE1"></stop>
                        <stop offset="0.2" stopColor="#279FD9"></stop>
                        <stop offset="0.51" stopColor="#2968B2" stopOpacity="0.99"></stop>
                        <stop offset="0.74" stopColor="#2B4699" stopOpacity="0.99"></stop>
                        <stop offset="0.86" stopColor="#2B3990" stopOpacity="0.99"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export default Branding