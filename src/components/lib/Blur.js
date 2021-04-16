import { useState, useEffect } from 'react'
import './Blur.css'

const Blur = () => {
	const [mounted, setMounted] = useState(false)
	
	useEffect(() => {
		setMounted(true)
	}, [])

	return(
		<div className = {mounted ? 'blur-filter blur-filter-fade-in' : 'blur-filter' }/>
	)
}

export default Blur