import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { motion } from 'framer-motion'

const accordionItems = [
	{
		name: 'Item 1',
		bulletPoints: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque temporibus atque animi. Illo, sit ullam facere recusandae molestias',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque temporibus atque animi. Illo, sit ullam facere recusandae molestias',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque temporibus atque animi. Illo, sit ullam facere recusandae molestias',
		],
	},
	{
		name: 'Item 2',
		bulletPoints: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque temporibus atque animi. Illo, sit ullam facere recusandae molestias',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque temporibus atque animi. Illo, sit ullam facere recusandae molestias',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque temporibus atque animi. Illo, sit ullam facere recusandae molestias',
		],
	},
	{
		name: 'Item 3',
		bulletPoints: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque temporibus atque animi. Illo, sit ullam facere recusandae molestias',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque temporibus atque animi. Illo, sit ullam facere recusandae molestias',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque temporibus atque animi. Illo, sit ullam facere recusandae molestias',
		],
	},
]

function App() {
	const [show, setShow] = useState()

	return (
		<div className='w-[600px] mx-auto mt-6 border border-black rounded-md'>
			{accordionItems.map((item, index) => (
				<div key={index}>
					<h2
						onClick={() =>
							setShow(prev => {
								if (prev === index) return undefined
								return index
							})
						}
						className='px-3 py-2 hover:bg-gray-100 cursor-pointer select-none text-xl flex justify-between items-center'
					>
						<span>{item.name}</span>
						<span>{show === index ? <FaMinus /> : <FaPlus />}</span>
					</h2>
					<motion.div
						initial={{ height: 0 }}
						whileInView={{ height: 'auto' }}
						exit={{ height: 0, opacity: 0 }}
						className={`${
							show === index ? 'block' : 'hidden'
						} overflow-y-hidden px-6 py-3`}
					>
						<ul>
							{item.bulletPoints.map((bP, index) => (
								<li key={index}>{bP}</li>
							))}
						</ul>
					</motion.div>
				</div>
			))}
		</div>
	)
}

export default App
