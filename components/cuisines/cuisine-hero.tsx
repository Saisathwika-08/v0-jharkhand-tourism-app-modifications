export function CuisineHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/jharkhand-traditional-food-tribal-cuisine.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Flavors of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Jharkhand</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto text-pretty">
          Discover the authentic tastes of tribal cuisine, forest delicacies, and traditional recipes passed down
          through generations in the heart of India.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange-400">100+</div>
            <div className="text-sm text-gray-300">Traditional Dishes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange-400">32</div>
            <div className="text-sm text-gray-300">Tribal Recipes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange-400">15</div>
            <div className="text-sm text-gray-300">Cooking Methods</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-orange-400">50+</div>
            <div className="text-sm text-gray-300">Forest Ingredients</div>
          </div>
        </div>
      </div>
    </section>
  )
}
