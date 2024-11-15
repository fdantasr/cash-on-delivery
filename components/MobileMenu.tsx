interface MobileMenuProps {}

export const MobileMenu = ({}:MobileMenuProps) => {
  return (
    <div className="bg-white shadow-md w-full">
      <div className="bg-white shadow-sm">
        <div className="flex flex-col items-start">
          <div className="flex flex-col justify-start">
            <p className="text-black text-base">
              <a className="text-blue-500 underline" href="./shop">Shop</a>
            </p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-black text-base">
              <a className="text-blue-500 underline" href="./category/men">Men</a>
            </p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-black text-base">
              <a className="text-blue-500 underline" href="./category/women">Women</a>
            </p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-black text-base">
              <a className="text-blue-500 underline" href="./category/kid">Kids</a>
            </p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-black text-base">
              <a className="text-blue-500 underline" href="./category/about">About</a>
            </p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="text-black text-base">
              <a className="text-blue-500 underline" href="./category/contact">Contact</a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between py-4">
        <a href="./" className="text-blue-500 text-lg font-bold">
          Serrena
        </a>
        <div className="flex items-center space-x-2">
          <div className="bg-black w-2 h-2 rounded-full"></div>
          <div className="bg-black w-2 h-2 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

