// pages/index.tsx
import BrandPackCard from '@/components/your-account/my-coupons/BrandPackCard';
import { brandPacks } from '@/constants/data';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <header className="bg-primary text-white text-center p-4">
                <h1 className="text-4xl font-bold text-black">BRAND PACKS</h1>
                <p className="mt-2 text-black text-bold">Extra offers on your favourite product categories</p>
                <div className="flex justify-center mt-2">
                    <div className="flex space-x-4">
                        <span className="text-black p-2 rounded-lg">*BANNER* </span>
                    </div>
                </div>
            </header>
            <main className="mt-8">
                <h2 className="text-2xl font-bold text-center mb-4">Explore coupons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {brandPacks.map(pack => (
                        <BrandPackCard
                            key={pack.id}
                            name={pack.name}
                            discount={pack.discount}
                            coupons={pack.coupons}
                            validity={pack.validity}
                            imageUrl={pack.imageUrl}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default HomePage;
