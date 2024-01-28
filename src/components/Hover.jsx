import React, { useRef } from 'react'
import useHover from '../hooks/useHover'

const Hover = () => {
	const ref = useRef()
	const isHovering = useHover(ref)

	return (
		<div
			ref={ref}
			style={{
				width: 300,
				height: 300,
				background: isHovering ? 'red' : 'green',
			}}
		>
			<button onClick={() => console.log(ref.current)}>Click</button>
		</div>
	)
}

export default Hover

//10:12 - https://www.youtube.com/watch?v=ks8oftGP2oc&ab_channel=UlbiTV
