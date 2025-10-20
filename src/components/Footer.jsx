import React from 'react'

const Footer = () => {
  return (
    <>
        
                <footer className="bg-gray-900 text-gray-300 py-8 text-center">
                    <div className="mb-4">
                        <a href="/home" className="mx-3 hover:text-amber-500">
                            Home
                        </a>
                        <a href="/product" className="mx-3 hover:text-amber-500">
                            Shop
                        </a>
                        <a href="/signup" className="mx-3 hover:text-amber-500">
                            Contact
                        </a>
                    </div>
                    <p className="text-sm">
                        © {new Date().getFullYear()} Diva. All Rights Reserved.
                    </p>
                </footer>
    </>
  )
}

export default Footer